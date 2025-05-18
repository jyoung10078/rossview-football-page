
# Google Sheet Setup Guide

This guide will help you set up your Google Sheet for the Rossview Hawks Football website.

## Step 1: Create a new Google Sheet

Create a new Google Sheet with three tabs:
- Players
- Coaches
- Games

## Step 2: Set up the Players tab

Add the following columns to the Players tab:
- id (number)
- name (text)
- number (number)
- position (text)
- grade (text)
- height (text)
- weight (text)
- image (text - URL to player image)

Example:
| id | name | number | position | grade | height | weight | image |
|----|------|--------|----------|-------|--------|--------|-------|
| 1 | Jackson Smith | 12 | Quarterback | Senior | 6'2" | 195 lbs | https://... |

## Step 3: Set up the Coaches tab

Add the following columns to the Coaches tab:
- id (number)
- name (text)
- position (text)
- bio (text)
- image (text - URL to coach image)

Example:
| id | name | position | bio | image |
|----|------|----------|-----|-------|
| 1 | Coach Robert Wilson | Head Coach | Coach Wilson has led the Hawks program since 2018... | https://... |

## Step 4: Set up the Games tab

Add the following columns to the Games tab:
- id (number)
- opponent (text)
- location (text - must be "Home" or "Away")
- date (text)
- time (text)
- result (text - leave blank for future games)
- isHomecoming (boolean - TRUE or FALSE)
- isSeniorNight (boolean - TRUE or FALSE)

Example:
| id | opponent | location | date | time | result | isHomecoming | isSeniorNight |
|----|----------|----------|------|------|--------|--------------|---------------|
| 1 | Clarksville High School | Home | September 1, 2025 | 7:00 PM |  | FALSE | FALSE |

## Step 5: Publish to the web

1. Click File > Publish to the web
2. Click "Publish"
3. Copy the Sheet ID from the URL of your Google Sheet
   - Example: `https://docs.google.com/spreadsheets/d/1ZL5PFD0DXONch-NMo3JCKSRmQZfJrUT40UWn7Q0wuVo/edit`
   - The Sheet ID is: `1ZL5PFD0DXONch-NMo3JCKSRmQZfJrUT40UWn7Q0wuVo`
4. Update the GOOGLE_SHEET_ID in src/config.ts with your Sheet ID

## Step 6: Update your data

Now you can update your Google Sheet and the website will automatically pull in the new data when users visit the site.
