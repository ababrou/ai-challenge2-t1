## Task 03 — Podium Component

Implement the top-3 podium rendered inside the card, above the leaderboard list.

### Layout

Left to right: **2nd place** (medium height) — **1st place** (tallest, gold block, center) — **3rd place** (shortest).

### Each podium card contains

1. Circular avatar with a rank-number badge overlaid on it (e.g. bottom-right corner).
2. User full name.
3. User role in smaller muted text.
4. A pill below the name showing a star icon and the user's total score.

### Behavior

- On initial render (no filters active), display the top 3 users by total score from the full dataset.
- Accepts a `renderPodium(rankedUsers)` function (or equivalent) that takes the current top-3 and re-renders. This will be called by the filter and search logic in later tasks.
- When `rankedUsers` is empty or `null`, collapse the podium entirely (no blank space).

### Search interaction (wired up in Task 05)

- If none of the top-3 match the search query → hide podium entirely.
- If one or more top-3 match → show only the matching cards at their original position blocks; non-matching cards are hidden (their block space collapses).

### Deliverable

`renderPodium(users)` function + associated CSS. Podium displays correctly on page load with the full dataset.
