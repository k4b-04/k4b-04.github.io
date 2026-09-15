# Kabir Durgani portfolio

A responsive portfolio for software engineering, data analytics, and machine learning opportunities.

## Open the portfolio

Open index.html in a browser. The portfolio runs directly from the folder; no installation, build step, API key, or subscription is needed.

Keep index.html, styles.css, app.js, data.js, and the assets folder together.

## What is included

- Five project case studies, with filters for Data & ML and Software.
- An explorer for 72 saved World Cup group-stage predictions and eight annual evaluation results.
- A Nearbites discovery demonstration using fictional listings.
- A Career Compass illustration connecting actual coursework to areas of interest.
- A step-by-step ML research loop demonstration with success, syntax-error, and timeout scenarios.
- An adjustable ReFound text-and-location matching example.
- Four semester views covering 19 NUS modules.
- Experience, contact links, and the original August 2026 résumé download.

Y1 Semester 1, Y1 Semester 2, and Y1 Summer are marked completed: 48 units. Y2 Semester 1 is marked in progress: 22 units, as confirmed by Kabir. Individual module grades and GPA are not displayed on the website.

## GitHub Pages

- Website: https://k4b-04.github.io/
- Repository: https://github.com/k4b-04/k4b-04.github.io
- Publishing source: main branch, root folder.

Keep index.html at the repository root alongside styles.css, app.js, data.js, the assets folder, and .nojekyll. Commit and push updates to main; GitHub Pages then deploys the latest files automatically.

The .github.io address avoids purchasing a custom domain. GitHub Pages is available for public repositories on GitHub Free. Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Update the content

- index.html contains the homepage introduction, experience, contact details, and navigation.
- data.js contains project descriptions, coursework, archived predictions, and annual evaluation results.
- styles.css controls the layout and appearance.
- app.js controls the filters, project dialogs, demonstrations, and accessibility behaviour.
- assets contains project artwork, the favicon, and the résumé download.

To update a semester, change its status and coursework in data.js. The completed-unit figure is calculated from semesters marked Completed. The semester navigation labels in index.html should be updated at the same time.

To replace the résumé, put the new document in assets and update both résumé links in index.html. A PDF can be used instead of the current DOCX; change the DOCX label beside the top download link as well.

## Before sharing with employers

The following points are content decisions, not errors hidden by the portfolio:

1. The downloadable résumé is the unchanged August 2026 document. It does not yet include Career Compass, TechJam, or the new Nearbites work.
2. Nearbites is described as a pilot because local documentation records remaining deployment and physical-device acceptance work.
3. TechJam performance figures disagree across the README, run summary, and experiment log. No headline score is displayed. The case study uses the documented contribution for Kabir: candidate execution, syntax checking, timeouts, failure capture, and prompt/target-encoding fixes.
4. World Cup predictions and annual validation data are presented as separate saved artifacts. The site does not claim the tournament predictions were generated before kickoff or from a particular frozen model. Confirm the training cutoff and model provenance before adding a forecast-accuracy headline.
5. The Career Compass demonstration uses curated coursework links. It does not claim to execute the full application's embedding model or calculate its alignment index.
6. Source-code links for Nearbites, Career Compass, and World Cup Predictor come from local Git remote configuration. Public accessibility could not be verified during this session. Add confirmed public repository links for TechJam and ReFound when available.
7. Career Compass team size and individual ownership were not established in the reviewed files. Its text describes the application without inventing a sole-developer claim.

## Source material

- Résumé: Kabir Durgani Resume 0826.docx supplied by Kabir.
- Coursework: the supplied NUS module screenshot; Y2 S1 status confirmed by Kabir.
- Project descriptions: reviewed README files, key source files, and local project documentation.
- World Cup archive: data/processed/group_2026_predictions.csv.
- Annual validation: models/walk_forward_results.csv.
- Nearbites artwork: assets/app-icon-v2.png from the Nearbites project.
- ReFound artwork: logo.jpeg from the ReFound project.

Project artwork is reused from the supplied files. The portfolio does not add a new licence for those assets or the underlying project code.

## Browser support

Use a current browser with native dialog support. The portfolio has keyboard-operable dialogs, tabs, filters, visible focus indicators, and reduced-motion support. It contains no tracking scripts or backend calls.
