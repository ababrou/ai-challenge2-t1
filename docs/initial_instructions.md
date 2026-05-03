## Overview

- @page_top.png
- @page_bottom.png
- @expanded_user_activity.png
- @open_filter.png
- @no_podium_on_search.png
- @icons.png
- @preserved_positions_on_search.png

Design and implement a company leaderboard page based on provided screenshots.

Employee scores are a sum of their activity scores. Filters affect total score and employee positions on the leaderboard.

All logic and data is stored on site.

Data
- local mocked data
- user activity format needs to support filting by year, quarter, category and user full name. filter functionality described in more detail below
- potential data format
<user_data_format>
{
    "full_name": "Name Surname",
    "avatar": "https://example.com/img.png"
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

Filter functionality
- Filter controls: Date, Quarter, Categories
- Applied filter changes the leaderboard and podium score values
- "Categories" filter limits individual user activities

Search bar
- On focus and hover - transition width of search icon from 32px to 4px
- unlike filters, search preserves the leaderboard and podium positions

Filter section style
- on hover apply `box-shadow: 0 4px 12px rgba(0,0,0,.05)` with `transition: all .2s;` css

User activity
- User activity can only be viewed for one user at a time. If another users activity is expanded - the previously opened users activity gets closed
- sorted by activity date, descending order

Podium
- Reflects top performers, fully affected by filters

## Steps
- Generate mock user data. Use @assets/avatar.svg and @assets/userphoto.jpg local files for user avatar.
- bootstrap the application layout
- use the mocked user data to populate the page
- add search functionality
- add filter functionality 
