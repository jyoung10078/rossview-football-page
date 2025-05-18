
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

// Extract the sheet ID from the pubhtml URL
// The URL you provided is a published HTML view, but we need the sheet ID
// Your URL: https://docs.google.com/spreadsheets/d/e/2PACX-1vRCo9M17cIjZMlMOuy4egAavvwjHQgU4DOVypgfwDw9ZeaKZ55Ytzw8KbvCUln4ssCObSyY9NIYuZJR/pubhtml
// We need the actual Sheet ID which would be in the format: https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit

// Using the ID portion from the provided URL - this is the best we can do without the direct edit URL
export const GOOGLE_SHEET_ID = "2PACX-1vRCo9M17cIjZMlMOuy4egAavvwjHQgU4DOVypgfwDw9ZeaKZ55Ytzw8KbvCUln4ssCObSyY9NIYuZJR";

