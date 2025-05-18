
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
  // Try multiple URL formats since we're not sure what format the user has shared
  const urls = [
    // Standard CSV export URL
    `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tabName)}`,
    // Alternative format for published sheets
    `https://docs.google.com/spreadsheets/d/e/${sheetId}/pub?gid=0&single=true&output=csv&sheet=${encodeURIComponent(tabName)}`,
    // Another alternative format
    `https://docs.google.com/spreadsheets/d/e/${sheetId}/pubhtml?gid=0&single=true&output=csv&sheet=${encodeURIComponent(tabName)}`
  ];
  
  let lastError: Error | null = null;
  
  // Try each URL format until one works
  for (const url of urls) {
    try {
      console.log(`Attempting to fetch data from URL: ${url}`);
      const response = await fetch(url, {
        // Add these headers to help with CORS issues
        headers: {
          'Accept': 'text/csv,text/plain;q=0.9',
          'Cache-Control': 'no-cache'
        }
      });
      
      if (!response.ok) {
        console.warn(`Failed to fetch data from ${url}: ${response.status} ${response.statusText}`);
        continue; // Try next URL format
      }
      
      const csvText = await response.text();
      console.log(`Received data length: ${csvText.length} characters from ${url}`);
      
      // Check if we got HTML instead of CSV
      if (csvText.toLowerCase().includes('<!doctype html>') || csvText.toLowerCase().includes('<html>')) {
        console.warn('Received HTML instead of CSV data, trying next URL format');
        continue;
      }
      
      return parseCSV<T>(csvText);
    } catch (error) {
      console.warn(`Error fetching Google Sheet data from ${url}:`, error);
      lastError = error instanceof Error ? error : new Error('Unknown error');
      // Continue to next URL format
    }
  }
  
  // If all URLs failed, throw the last error
  console.error("All URL formats failed to retrieve data");
  throw lastError || new Error('Failed to fetch Google Sheet data');
}

// Parse CSV data into JavaScript objects
function parseCSV<T>(csv: string): T[] {
  const lines = csv.split('\n');
  if (lines.length < 2) {
    console.warn("CSV data contains less than 2 lines, may be empty");
    return [];
  }
  
  const headers = parseCSVLine(lines[0]);
  console.log(`CSV headers: ${headers.join(', ')}`);
  
  return lines.slice(1).map((line) => {
    if (!line.trim()) return null; // Skip empty lines
    
    const values = parseCSVLine(line);
    const entry: Record<string, any> = {};
    
    headers.forEach((header, index) => {
      let value = values[index] || '';
      
      // Handle boolean values for specific fields
      if ((header === 'isHomecoming' || header === 'isSeniorNight') && 
          (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
        entry[header] = value.toLowerCase() === 'true';
      }
      // Handle numeric values but prevent type conversion for fields that should remain as strings
      else if (!isNaN(Number(value)) && value.trim() !== '' && 
               !['height', 'weight', 'grade'].includes(header)) {
        entry[header] = Number(value);
      }
      else {
        entry[header] = value;
      }
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
        console.log(`Loading data for tab: ${tabName}`);
        const result = await fetchGoogleSheetData<T>(sheetId, tabName);
        console.log(`Loaded ${result.length} items for ${tabName}`);
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        console.error(`Error loading Google Sheet data for ${tabName}:`, err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [sheetId, tabName]);

  return { data, loading, error };
}
