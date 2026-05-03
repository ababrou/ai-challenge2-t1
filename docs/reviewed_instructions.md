## Overview

- @design/page_top.png
- @design/page_bottom.png
- @design/expanded_user_activity.png
- @design/open_filter.png
- @design/no_podium_on_search.png
- @design/icons.png
- @design/preserved_positions_on_search.png

Design and implement a company leaderboard page based on provided screenshots.

Employee scores are a sum of their activity scores. Filters affect total score and employee positions on the leaderboard.

All logic and data is stored on site.

## Page structure

- Page background is light gray.
- At the top of the page (outside the card), display the heading **"Company Leader Board {year}"** where `{year}` is the most recent year present in the mock data.
- Below the heading sits a single white card containing everything else: the card header, filters, podium, and leaderboard list.
- Card header: bold **"Leaderboard"** title with the subtitle **"Top performers based on contributions and activity"** in smaller muted text below it.

## Data

- local mocked data
- Generate at least 20–30 users with enough score variation to produce a realistic leaderboard. User activities must span within the year 2025.
- Use `@assets/avatar.svg` and `@assets/userphoto.jpg` local files for user avatars (alternate between them).
- user activity format needs to support filtering by year, quarter, category and user full name. filter functionality described in more detail below
- data format:
<user_data_format>
{
    "full_name": "Name Surname",
    "avatar": "https://example.com/img.png",
    "role": "Senior Software Engineer (Department)",
    "activities": [
        {
            "name": "activity_name",
            "category": "activity_category",
            "date": "2025-01-01",
            "points": 64
        }
    ]
}
</user_data_format>

Possible activity categories:
- Education
- Public Speaking
- University Partnership

## Filter functionality

- Filter controls: **Year**, **Quarter**, **Categories** (three separate dropdowns)
- Year dropdown options are derived from the unique years present in the mock activity data (plus an "All Years" default). Do not hardcode years.
- Quarter dropdown options: All Quarters, Q1, Q2, Q3, Q4.
- Applied filters change the leaderboard ranking and podium score values by recomputing each user's total from only the matching activities.
- "Categories" filter limits individual user activities to the selected category when computing scores.
- Filters can be combined (e.g. Year=2025 + Quarter=Q1 + Category=Education all apply together).
- Filter section style: on hover apply `box-shadow: 0 4px 12px rgba(0,0,0,.05)` with `transition: all .2s;` css.

## Search bar

- Searches by user full name (case-insensitive substring match).
- On focus and hover — transition width of search icon from 32px to 4px (the magnifying glass shrinks as the input field expands).
- When the search field contains text, show an **"×" clear button** on the right side of the input. Clicking it clears the search.
- Unlike filters, **search preserves the original leaderboard and podium positions** (scores and rankings are not recomputed). The rank number shown next to each matched user reflects their true global rank (e.g. a user at rank 11 still shows "11").

## Podium

- Displays the top 3 performers at all times when no search is active.
- Layout (left to right): **2nd place** (medium height) — **1st place** (gold block, tallest, centered) — **3rd place** (shortest).
- Each podium card shows: circular avatar with a rank number badge overlaid on the avatar, user name, user role, and a star + score pill below the name.
- Fully affected by filters: when filters are active, the podium reflects the recomputed top 3.
- Search behavior (two cases):
  - If **none** of the top-3 users match the search query, the **podium is hidden entirely** (collapse the space, do not leave a gap).
  - If **one or more** top-3 users match the search query, show **only the matching top-3 user(s)** on the podium, each at their original position block. Non-matching top-3 users are hidden.

## Leaderboard list

- Each row contains: rank number, avatar, full name, role, per-category activity icons (see below), a vertical divider, TOTAL label + star + score, and a chevron expand button.
- **Rank number color**: displayed in muted gray; lower-ranked users appear progressively more faded.
- **Per-category icons**: show a small icon + count for each category in which the user has at least one activity. Only show icons for categories the user has activities in. Icon mapping:
  - Education → graduation cap icon
  - Public Speaking → monitor/screen icon
  - University Partnership → smiley face icon
- Scores and ranks update when filters are applied.

## User activity panel

- User activity can only be viewed for one user at a time. If another user's activity is expanded, the previously opened user's activity gets closed automatically.
- Clicking a row expands an activity panel below it. The **entire row gets a blue border** when expanded. The chevron icon flips to point upward.
- The panel has a **"RECENT ACTIVITY"** section heading, followed by a table with columns: **ACTIVITY | CATEGORY | DATE | POINTS**.
- Activities are sorted by date, **descending** (most recent first).
- **Category** is displayed as a styled **pill/badge** (rounded background, not plain text).
- **Points** are displayed as **"+N"** (with a leading `+` sign) in blue text.

## Steps

- Generate mock user data (20–30 users, all within 2025, alternating between the two local avatar files).
- Bootstrap the application layout (single HTML file with embedded or linked CSS and vanilla JS — no frameworks).
- Use the mocked user data to populate the page (page title, card header, podium, leaderboard list).
- Add search functionality (name filter, preserved positions, podium show/hide logic, × clear button).
- Add filter functionality (Year, Quarter, Categories dropdowns; recompute scores and re-rank on change).
