
import { useState, useEffect } from 'react';

// Types for our data
export interface Player {
  id: number;
  name: string;
  number: number;
  position: string;
  grade: string;
  height: string;
  weight: string;
  image: string;
}

export interface Coach {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface Game {
  id: number;
  opponent: string;
  location: string;
  date: string;
  time: string;
  result: string | null;
  isHomecoming: boolean;
  isSeniorNight: boolean;
}

// Function to fetch and parse data from a published Google Sheet
export async function fetchGoogleSheetData<T>(sheetId: string, tabName: string): Promise<T[]> {
  // Google Sheets must be published to the web (File > Publish to the Web > Publish)
  // The URL format allows us to get the data as CSV
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tabName)}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    
    const csvText = await response.text();
    return parseCSV<T>(csvText);
  } catch (error) {
    console.error("Error fetching Google Sheet data:", error);
    throw error;
  }
}

// Parse CSV data into JavaScript objects
function parseCSV<T>(csv: string): T[] {
  const lines = csv.split('\n');
  const headers = parseCSVLine(lines[0]);
  
  return lines.slice(1).map((line) => {
    if (!line.trim()) return null; // Skip empty lines
    
    const values = parseCSVLine(line);
    const entry: Record<string, any> = {};
    
    headers.forEach((header, index) => {
      let value = values[index] || '';
      
      // Try to parse boolean values
      if (value.toLowerCase() === 'true') value = true;
      else if (value.toLowerCase() === 'false') value = false;
      
      // Try to parse numeric values
      else if (!isNaN(Number(value)) && value.trim() !== '') {
        value = Number(value);
      }
      
      entry[header] = value;
    });
    
    return entry as T;
  }).filter(Boolean) as T[]; // Remove null entries
}

// Helper function to properly parse CSV lines (handles commas within quoted fields)
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let startPos = 0;
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"') {
      inQuotes = !inQuotes;
    } else if (line[i] === ',' && !inQuotes) {
      result.push(line.substring(startPos, i).replace(/^"|"$/g, '').replace(/""/g, '"'));
      startPos = i + 1;
    }
  }
  
  result.push(line.substring(startPos).replace(/^"|"$/g, '').replace(/""/g, '"'));
  return result;
}

// Custom hook to fetch data from a Google Sheet
export function useGoogleSheetData<T>(sheetId: string, tabName: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const result = await fetchGoogleSheetData<T>(sheetId, tabName);
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        console.error("Error loading Google Sheet data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [sheetId, tabName]);

  return { data, loading, error };
}
