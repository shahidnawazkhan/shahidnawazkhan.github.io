# Notes for Claude

This is Shahid Nawaz Khan's personal academic site, served by GitHub Pages from `master`.

## Workflow
- The owner has given standing permission to merge changes into `master` without asking each time.
  After making and checking a change, open a pull request into `master` and merge it (or push to `master` directly).
- Before merging, render `index.html` at desktop (1280px) and phone (390px) widths and confirm there is no horizontal scrolling.

## Site structure
- Everything visible is in `index.html`; styles are in `css/freelancer.css` (not the `.min.css` file).
- Highlight the owner's name in author lists with `<b class="highlight">`.
- Teaching uses one table row per semester (`.teaching-table`), with `<span class="course-level">UG</span>` / `MS` tags.
