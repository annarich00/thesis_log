# Thesis Log

Astro + Tailwind website for weekly advisor presentations, literature search notes, weekly work logs, and future work planning.

## Open the site
Once GitHub Pages is enabled and the deployment workflow finishes, open:

https://annarich00.github.io/thesis_log/

If that URL shows a 404, check the Actions tab in GitHub and confirm the latest deployment completed successfully.

## Local development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal, usually:
   ```
   http://localhost:4321/thesis_log/
   ```

## Pages
- `Weekly Presentations` — home page with weekly presentation links
- `Literature Search` — paper notes and citations
- `Weekly Work` — weekly progress log
- `Future Work` — upcoming tasks and next steps

## Deployment
This site is configured for GitHub Pages with the base path `/thesis_log/`.

A GitHub Actions workflow at `.github/workflows/deploy.yml` builds and deploys the site automatically when you push to `main`.

If Pages is not yet enabled in the repository settings, turn it on and set the source to GitHub Actions.
