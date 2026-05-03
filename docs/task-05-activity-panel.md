## Task 05 — User Activity Panel

Implement the expandable activity detail panel that appears below a leaderboard row when its chevron is clicked.

### Trigger

Clicking the chevron button (▾) on a leaderboard row expands that user's panel inline below the row. Clicking again collapses it.

### Exclusivity

Only one panel may be open at a time. Opening a second user's panel automatically closes the previously open one.

### Visual state of the expanded row

- The entire row gets a **blue border** (e.g. `border: 2px solid #3b82f6`).
- The chevron icon flips to point upward (▴).

### Panel contents

- Section heading: **"RECENT ACTIVITY"** (uppercase, small, muted).
- A table with four columns: **ACTIVITY | CATEGORY | DATE | POINTS**.
- Rows are sorted by date **descending** (most recent first).
- **Category** column: rendered as a styled pill/badge (rounded background, colored or neutral — not plain text).
- **Points** column: displayed as `+N` in blue text (e.g. `+64`).

### Note on filtered data

The panel always shows the user's **full** activity list (unaffected by active filters). Filters change ranking/scores, not the detail panel content.

### Deliverable

Click handler + panel render logic + associated CSS. Expanding/collapsing works correctly and the exclusivity constraint is enforced.
