## Task 04 — Leaderboard List

Implement the ranked list of all users rendered below the podium.

### Each row contains (left to right)

1. **Rank number** — muted gray; progressively more faded for lower ranks (e.g. reduce opacity or lighten color as rank increases).
2. **Circular avatar.**
3. **Full name** (bold) and **role** (smaller muted text) stacked.
4. **Per-category activity icons** — show only categories the user has at least one activity in:
   - Education → graduation cap icon
   - Public Speaking → monitor/screen icon
   - University Partnership → smiley face icon
   Each icon is accompanied by a count of activities in that category.
5. **Vertical divider.**
6. **TOTAL label + star icon + score** (e.g. `TOTAL ★ 342`).
7. **Chevron button** (▾) to expand/collapse the activity panel (Task 05).

### Behavior

- Rows are sorted by total score descending. Rank 1 = highest score.
- Accepts a `renderLeaderboard(rankedUsers)` function that re-renders the list. Called by filter/search logic.
- Each row must carry a data attribute (e.g. `data-user-index`) linking it to its user for the expand panel.

### Deliverable

`renderLeaderboard(users)` function + associated CSS. List renders correctly on page load with the full dataset.
