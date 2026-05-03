## Task 01 — Generate Mock User Data

Create a `data.js` file (or inline `<script>` block) containing the mock dataset.

### Requirements

- 20–30 users total.
- Each user follows this shape:
  ```js
  {
    full_name: "Name Surname",
    avatar: "assets/avatar.svg" | "assets/userphoto.jpg",  // alternate between the two
    role: "Job Title (Department)",
    activities: [
      { name: "...", category: "Education" | "Public Speaking" | "University Partnership", date: "2025-MM-DD", points: N }
    ]
  }
  ```
- All activity dates must fall within 2025 and be spread across all four quarters.
- Point values should vary enough (e.g. 5–100 per activity) to produce a realistic, non-trivial ranking.
- Each user should have between 3 and 15 activities.
- Cover all three categories across the dataset; individual users may have activities in one, two, or all three.
- Avatars strictly alternate: even-indexed users get `avatar.svg`, odd-indexed get `userphoto.jpg`.

### Deliverable

A single exported/global `USERS` array (or equivalent) ready to be consumed by the rest of the app.
