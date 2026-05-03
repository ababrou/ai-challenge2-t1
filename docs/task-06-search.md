## Task 06 — Search Bar

Implement the name-search input and wire it to the podium and leaderboard list.

### Input behavior

- Case-insensitive substring match on `full_name`.
- On focus and hover: transition the search icon width from 32 px to 4 px (the magnifying glass shrinks as the input field expands). Use CSS `transition`.
- When the field contains text, show an **"×" clear button** on the right side. Clicking it clears the field and resets the view.

### Effect on the leaderboard list

- Filters the visible rows to only users whose name matches the query.
- **Positions and scores are not recomputed.** Each matched user retains their true global rank number (e.g. a user ranked 11th still shows "11" even if they are the only visible row).

### Effect on the podium

- If **none** of the top-3 users match the query → hide the podium entirely (collapse space, no gap).
- If **one or more** top-3 users match → show only the matching top-3 card(s) at their original position block; hide non-matching ones.
- If the search field is empty → restore the full podium.

### Interaction with filters

Search and filters are independent. Filters recompute scores/ranks; search then applies name-matching on top of whatever the current ranked state is. Both can be active simultaneously.

### Deliverable

Search input element + event listener + `applySearch(query)` logic that updates the podium and leaderboard display. CSS for the shrinking icon transition and the × button.
