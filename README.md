# Math Notes Starter (Static HTML + MathJax)

This is a ready-to-upload starter for math notes styled like concise lecture notes (sidebar TOC, callout boxes, MathJax).

## Publish on GitHub Pages (no command line needed)
1. Create a **public** GitHub repository (e.g., `math-154-notes`).
2. Upload all files from this folder (drag & drop in GitHub → *Commit changes*).
3. Go to **Settings → Pages**.
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` • **Folder:** `/ (root)` → **Save**
4. Wait ~30–60 seconds. Your site appears at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

## Edit notes
- Home page: `index.html`
- Sections: files in `sections/`
- Styles: `assets/style.css`
- Math is written in LaTeX inside `$$ ... $$` or `$ ... $`.

## Optional
- Rename the site title and your name at the top of `index.html` and each section.
- Add more sections by duplicating a file in `sections/`.

## License
Content is marked CC BY 4.0 by default. Change as you wish.
