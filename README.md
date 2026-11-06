# KotatsuShelf · Weird Girl Lit

A moody little recommendation tool for Weird Girl Lit. Answer a 20-question
survey and get 3–5 novels matched to your particular flavor of strange, plus a
"weird girl archetype" for yourself.

It's a static site (plain HTML, CSS and JavaScript, no build step), so it runs
on GitHub Pages as-is.

## Publish on GitHub Pages

1. Merge this into your default branch (or pick this branch directly).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   choose the branch and the `/ (root)` folder, then **Save**.
4. After a minute the site is live at
   `https://<your-username>.github.io/KotatsuShelf/`.

To try it locally, run `python3 -m http.server` in this folder and open
<http://localhost:8000>.

## How it works

- `js/data.js` holds the books, the 20 questions and the archetypes.
  - Each book has tag weights from 0–3 (e.g. `surreal`, `work`, `mother`).
  - Each answer nudges the reader's profile up or down on those same tags.
- `js/app.js` adds up the answers, compares that profile to every book
  (cosine similarity), keeps one book per author, and shows the top 3, plus a
  4th and 5th when they're close to the best match.
- Answers are saved in the browser so a half-finished survey can be resumed.

## Adding a book

Add an entry to `WGL_BOOKS` in `js/data.js`:

```js
{
  title: "Title",
  author: "Author Name",
  year: 2024,
  blurb: "One or two spoiler-free sentences.",
  tags: { surreal: 3, humor: 2, work: 1 },
  cw: "Optional content note."
}
```

Books from before 1990 are tagged `classic` and books from 2020 on are tagged
`recent` automatically.
