## Task 02 — Bootstrap App Layout

Create the single-file application skeleton: `index.html` with embedded or linked CSS and a `<script>` entry point.

### Requirements

- **No frameworks** — plain HTML, CSS, and vanilla JS only.
- Page background: light gray (`#f3f4f6` or similar).
- At the top of the page (outside the card) render the heading:
  **"Company Leader Board {year}"** — where `{year}` is computed at runtime as the most recent year present in the mock data.
- Below the heading: a single white card (`border-radius`, `box-shadow`) that will contain all further sections (filters, podium, leaderboard).
- Inside the card, a **card header** area with:
  - Bold title: `"Leaderboard"`
  - Smaller muted subtitle: `"Top performers based on contributions and activity"`
- Stub placeholder `<div>` elements (with IDs or data attributes) for: filters section, podium section, leaderboard list section. Actual content is added in later tasks.
- Basic CSS reset/normalize, font stack, and responsive container (max-width ~900–1100px, centered).

### Deliverable

`index.html` that renders the correct heading and card shell. The three placeholder sections must be present in the DOM even if empty.
