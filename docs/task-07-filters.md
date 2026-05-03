## Task 07 — Filter Dropdowns

Implement the Year, Quarter, and Categories filter controls and wire them to score recomputation and re-ranking.

### Controls

Three separate `<select>` dropdowns placed in the filter section of the card:

| Dropdown | Options |
|---|---|
| **Year** | "All Years" + each unique year found in the activity data (derived at runtime, not hardcoded) |
| **Quarter** | All Quarters, Q1, Q2, Q3, Q4 |
| **Categories** | All Categories, Education, Public Speaking, University Partnership |

### Filter logic

When any filter changes:

1. For each user, compute a **filtered score**: sum only the activities that satisfy all currently active filter conditions simultaneously (year + quarter + category all apply together).
2. Re-rank users by their filtered score (descending). Users with a filtered score of 0 remain in the list but rank at the bottom.
3. Call `renderPodium(top3)` and `renderLeaderboard(rankedUsers)` with the new order.

Quarter mapping: Q1 = Jan–Mar, Q2 = Apr–Jun, Q3 = Jul–Sep, Q4 = Oct–Dec.

### Filter section hover style

```css
.filter-section:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
}
```

### Interaction with search

Filters run first (recompute scores + ranks), then search applies name-matching on the result. Changing a filter while search text is present should re-apply both.

### Deliverable

Three `<select>` elements + `applyFilters()` function + associated CSS. Changing any dropdown immediately updates the podium and leaderboard.
