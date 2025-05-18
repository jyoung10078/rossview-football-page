
// Configuration file for the application

/**
 * Google Sheets Configuration
 * 
 * Instructions:
 * 1. Create a Google Sheet with tabs named "Players", "Coaches", and "Games"
 * 2. Each sheet should have columns matching the data types in lib/googleSheets.ts
 * 3. Publish the sheet to the web via File > Publish to the web > Publish
 *    - Select entire document
 *    - Choose Web page or CSV format
 *    - Click "Publish"
 * 4. Set sharing permissions to "Anyone with the link can view"
 * 5. Copy the Sheet ID from the URL and paste it below
 * 
 * Format of Google Sheets URL: https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit
 */

// The ID from the published Google Sheet URL
export const GOOGLE_SHEET_ID = "2PACX-1vRCo9M17cIjZMlMOuy4egAavvwjHQgU4DOVypgfwDw9ZeaKZ55Ytzw8KbvCUln4ssCObSyY9NIYuZJR";

// Tab names in the Google Sheet
export const SHEET_TABS = {
  PLAYERS: "Players",
  COACHES: "Coaches",
  GAMES: "Games"
};
