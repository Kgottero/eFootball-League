# eFootball League Standings Website

## What this is

A responsive football league standings website with four groups of three teams.

The website automatically calculates:

- Played (P)
- Wins (W)
- Draws (D)
- Losses (L)
- Goal Difference (GD)
- Points (Pts)
- League position

## How to edit the competition

Open `data.js`.

You normally only need to edit this file.

### Change the competition name

Find:

`name: "eFootball League"`

and change it to your competition name.

### Change teams

Inside each group, change the team names and logos.

Example:

`{ name: "Arsenal", logo: "🔴" }`

The team name must match the name used in the results.

### Add a result

Inside `results`, add:

`{ group: "A", date: "18 Aug", home: "Arsenal", away: "Chelsea", homeScore: 3, awayScore: 1 }`

The standings will recalculate automatically.

## Important

For a result, `home` and `away` must exactly match an existing team name in that group.

## Running it

Double-click `index.html` to open it in a browser.

For a real public website, upload the three files to a static host such as GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

## Next upgrade

If you want non-technical editing, the next step is to connect this to Google Sheets or build a password-protected admin panel. Then you can enter results through a form without opening `data.js`.
