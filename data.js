window.PORTFOLIO_DATA = {
  "projects": [
    {
      "id": "world-cup",
      "index": "01",
      "name": "World Cup Predictor",
      "category": "MACHINE LEARNING",
      "date": "2026",
      "filters": [
        "data"
      ],
      "featured": true,
      "summary": "A machine learning pipeline for predicting football match outcomes, estimating scores, and exploring tournament simulations.",
      "stack": [
        "Python",
        "scikit-learn",
        "Streamlit"
      ],
      "role": "Sole developer",
      "status": "Research project",
      "repo": "https://github.com/k4b-04/wc2026_predictor",
      "problem": "A team's ranking tells only part of its story. I wanted to explore how recent form, past meetings, and match context could inform outcome and score predictions.",
      "contribution": "I built the data preparation, feature engineering, Random Forest models, evaluation workflow, tournament simulator, and interactive web interface.",
      "features": [
        "38 features spanning recent form, rankings, head-to-head records, and match context.",
        "Time-ordered hyperparameter tuning and annual walk-forward evaluation.",
        "Outcome probabilities, score estimates, feature inspection, and knockout simulation."
      ],
      "learning": "Evaluation design matters as much as model choice. Draws are difficult to predict, and performance varies across years. The project keeps annual evaluation results separate from saved tournament outputs.",
      "architecture": [
        [
          "01",
          "Historical data",
          "International match results and FIFA rankings are cleaned and joined by team and date."
        ],
        [
          "02",
          "Pre-match features",
          "Shifted rolling statistics describe form before the match, alongside ranking and head-to-head features."
        ],
        [
          "03",
          "Models and evaluation",
          "Random Forest classification and regression support outcome and goal estimates; yearly evaluation tracks performance over time."
        ],
        [
          "04",
          "Interactive exploration",
          "A Streamlit interface exposes probabilities, feature values, and model insights. This portfolio explores saved outputs."
        ]
      ],
      "engineeringNote": "The annual validation chart and archived tournament predictions come from different saved artifacts. No single tournament accuracy is presented as a verified forecast result."
    },
    {
      "id": "techjam",
      "index": "02",
      "name": "ML Research Agent",
      "category": "ML ENGINEERING",
      "date": "TECHJAM 2026",
      "filters": [
        "data",
        "software"
      ],
      "featured": true,
      "summary": "An LLM-guided loop for proposing model changes, executing experiments, and recording results on a recommendation benchmark.",
      "stack": [
        "Python",
        "NumPy",
        "Gemini API"
      ],
      "role": "Candidate execution · five-person team",
      "status": "Hackathon prototype",
      "repo": "",
      "problem": "ML experimentation involves a repeated cycle of proposing, training, evaluating, and revising. The challenge was to automate that cycle on the KuaiRand recommendation benchmark.",
      "contribution": "I worked on the candidate runner: separate working directories, syntax checks, subprocess execution, timeouts, and failure capture. The team contribution record also credits me with prompt and target-encoding fixes.",
      "features": [
        "LLM proposals informed by previous experiment history.",
        "Syntax validation and timed execution for generated candidates.",
        "Keep-or-reject decisions and structured experiment logs."
      ],
      "learning": "An experiment that crashes or times out still produces useful information. Clear handoff contracts and structured failures help the research loop decide what to do next.",
      "architecture": [
        [
          "Propose",
          "Research hypothesis",
          "The LLM receives the current pipeline and experiment history, then suggests a candidate change."
        ],
        [
          "My focus",
          "Candidate runner",
          "Python syntax is checked before a subprocess starts. A separate working directory, captured output, and a timeout bound each experiment."
        ],
        [
          "Evaluate",
          "Metric reader",
          "The loop reads and validates candidate output metrics against the benchmark's expected structure."
        ],
        [
          "Record",
          "History and decisions",
          "The orchestration and logging components record scores, code differences, decisions, and failures for the next iteration."
        ]
      ],
      "engineeringNote": "A separate working directory and timeout provide execution controls, rather than a full security sandbox. Final performance figures are being reconciled across saved run artifacts."
    },
    {
      "id": "career-compass",
      "index": "03",
      "name": "Career Compass",
      "category": "APPLIED NLP",
      "date": "2026",
      "filters": [
        "data",
        "software"
      ],
      "featured": false,
      "summary": "An NLP application that uses sentence embeddings and skill matching to connect coursework and résumé evidence with job requirements.",
      "stack": [
        "Python",
        "Sentence Transformers",
        "Streamlit"
      ],
      "role": "Application development",
      "status": "Working prototype",
      "repo": "https://github.com/k4b-04/career-compass",
      "problem": "Module titles alone do not make it easy to see how a degree aligns with a target role. Career Compass brings course descriptions, job requirements, and résumé evidence into one view.",
      "contribution": "This project combines NUSMods module lookup, document text extraction, semantic comparison, and an interactive dashboard for examining coverage and gaps.",
      "features": [
        "Import NUS module descriptions by module code.",
        "Compare requirements with coursework and résumé evidence using text embeddings and explicit skill matches.",
        "Inspect covered requirements and gaps, then compare up to four future modules."
      ],
      "learning": "A useful score needs an explanation. The dashboard links requirements to supporting evidence and treats its alignment index as a heuristic rather than a probability.",
      "architecture": [
        [
          "Collect",
          "Course and résumé text",
          "NUSMods provides module descriptions. PDF, DOCX, and text uploads supply résumé evidence."
        ],
        [
          "Prepare",
          "Meaningful evidence",
          "Preprocessing separates job requirements, course material, and résumé entries."
        ],
        [
          "Compare",
          "Semantic and explicit matches",
          "MiniLM sentence embeddings and cosine similarity contribute 75% of the hybrid score; explicit skill matching contributes 25%."
        ],
        [
          "Explain",
          "Coverage and gaps",
          "The dashboard surfaces matching evidence and a heuristic alignment index, with a separate module comparison view."
        ]
      ],
      "engineeringNote": "The alignment index is a heuristic measure of text alignment. It has not been calibrated as a probability of job suitability or hiring success."
    },
    {
      "id": "refound",
      "index": "04",
      "name": "ReFound",
      "category": "BACKEND / APPLIED AI",
      "date": "HACK & ROLL 2026",
      "filters": [
        "data",
        "software"
      ],
      "featured": false,
      "summary": "A Telegram lost-and-found bot that combines descriptions, location, timing, and images to suggest matches.",
      "stack": [
        "Python",
        "Telegram API",
        "SQLite"
      ],
      "role": "Developer · hackathon project",
      "status": "Hackathon prototype",
      "repo": "",
      "problem": "Lost-and-found reports often lack enough shared context to connect the right people. ReFound guides users through a structured report and looks for promising matches.",
      "contribution": "I worked on a Telegram-based lost-and-found workflow with location tagging, image comparison, and matching across several signals.",
      "features": [
        "Guided lost and found reports with category, description, timing, and location.",
        "Weighted matching that adapts to how certain the user is about the location.",
        "Image comparison, email verification, and messaging between matched users."
      ],
      "learning": "A missing or uncertain location should change how a match is scored. Combining several signals makes the reasoning more useful to inspect than a single similarity score.",
      "architecture": [
        [
          "Report",
          "Guided Telegram conversations",
          "Conversation handlers collect structured item details and optional photos."
        ],
        [
          "Store",
          "SQLite records",
          "Users, items, candidate matches, verification codes, and messages are stored in the bot's database."
        ],
        [
          "Match",
          "Multiple signals",
          "Category, description, distinctive features, location, and date contribute to text-based matching; image comparison can enhance candidates."
        ],
        [
          "Connect",
          "Matched-user messaging",
          "The bot supports exchanging messages and photos between matched users, alongside reporting and reliability features."
        ]
      ],
      "engineeringNote": "Matching scores are heuristic signals for suggesting candidates. They are not calibrated probabilities that two reports refer to the same physical item."
    },
    {
      "id": "nearbites",
      "index": "05",
      "name": "Nearbites",
      "category": "MOBILE / FULL STACK",
      "date": "2026",
      "filters": [
        "software"
      ],
      "featured": false,
      "summary": "A campus food-sharing app that brings surplus food listings, discovery, and community updates into one place.",
      "stack": [
        "React Native",
        "Expo",
        "Appwrite"
      ],
      "role": "Developer · two-person Orbital team",
      "status": "Pilot / continued development",
      "repo": "https://github.com/zoooble/nearbites_adv",
      "problem": "Surplus food announcements were scattered across ad-hoc Telegram posts. Students needed a clearer way to find food nearby, understand dietary suitability, and check whether it was still available.",
      "contribution": "My work covered the mobile app, interactive map, posting flow, preference-based onboarding, and backend integration. Nearbites began as a two-person NUS Orbital project and has continued to evolve.",
      "features": [
        "Map and feed views for discovering food, with location and dietary preferences.",
        "GPS, manual pin placement, and campus building lookup for posting.",
        "Community listing updates, contribution rewards, and duplicate-request handling."
      ],
      "learning": "Location accuracy, stale listings, and interrupted requests all affect whether an app feels dependable. The latest work explores server-side validation and recoverable actions alongside the interface.",
      "architecture": [
        [
          "Discover",
          "Mobile interface",
          "Expo Router screens provide a feed, map, posting flow, profile, and preferences."
        ],
        [
          "Connect",
          "Appwrite integration",
          "Authentication, listing data, photo storage, and service calls connect the mobile experience to its backend."
        ],
        [
          "Validate",
          "Server rules",
          "The service checks listing fields, location freshness, contribution limits, and reward eligibility."
        ],
        [
          "Recover",
          "Repeated requests",
          "Saved request identifiers and a transaction ledger help resolve interrupted submissions without repeating a charge or reward."
        ]
      ],
      "engineeringNote": "The current codebase is a pilot. Some notification, account-management, and native-device acceptance work remains before a public release."
    }
  ],
  "matches": [
    {
      "home": "Mexico",
      "away": "South Africa",
      "date": "2026-06-11",
      "probabilities": [
        58.4,
        27.5,
        14.1
      ],
      "prediction": "2 – 1",
      "actual": "2 – 0"
    },
    {
      "home": "South Korea",
      "away": "Czech Republic",
      "date": "2026-06-11",
      "probabilities": [
        31.9,
        35.2,
        32.9
      ],
      "prediction": "1 – 1",
      "actual": "2 – 1"
    },
    {
      "home": "Canada",
      "away": "Bosnia and Herzegovina",
      "date": "2026-06-12",
      "probabilities": [
        40.9,
        45.3,
        13.8
      ],
      "prediction": "2 – 1",
      "actual": "1 – 1"
    },
    {
      "home": "United States",
      "away": "Paraguay",
      "date": "2026-06-12",
      "probabilities": [
        46.1,
        30.8,
        23.1
      ],
      "prediction": "2 – 1",
      "actual": "4 – 1"
    },
    {
      "home": "Qatar",
      "away": "Switzerland",
      "date": "2026-06-13",
      "probabilities": [
        21.5,
        47.8,
        30.7
      ],
      "prediction": "1 – 1",
      "actual": "1 – 1"
    },
    {
      "home": "Brazil",
      "away": "Morocco",
      "date": "2026-06-13",
      "probabilities": [
        27.6,
        52.0,
        20.4
      ],
      "prediction": "1 – 1",
      "actual": "1 – 1"
    },
    {
      "home": "Haiti",
      "away": "Scotland",
      "date": "2026-06-13",
      "probabilities": [
        14.1,
        25.8,
        60.1
      ],
      "prediction": "1 – 1",
      "actual": "0 – 1"
    },
    {
      "home": "Australia",
      "away": "Turkey",
      "date": "2026-06-13",
      "probabilities": [
        26.7,
        28.6,
        44.7
      ],
      "prediction": "2 – 1",
      "actual": "2 – 0"
    },
    {
      "home": "Germany",
      "away": "Curaçao",
      "date": "2026-06-14",
      "probabilities": [
        70.7,
        21.3,
        8.0
      ],
      "prediction": "4 – 1",
      "actual": "7 – 1"
    },
    {
      "home": "Ivory Coast",
      "away": "Ecuador",
      "date": "2026-06-14",
      "probabilities": [
        25.0,
        34.3,
        40.7
      ],
      "prediction": "1 – 1",
      "actual": "1 – 0"
    },
    {
      "home": "Netherlands",
      "away": "Japan",
      "date": "2026-06-14",
      "probabilities": [
        28.1,
        47.7,
        24.2
      ],
      "prediction": "2 – 1",
      "actual": "2 – 2"
    },
    {
      "home": "Sweden",
      "away": "Tunisia",
      "date": "2026-06-14",
      "probabilities": [
        50.9,
        27.2,
        21.9
      ],
      "prediction": "2 – 1",
      "actual": "5 – 1"
    },
    {
      "home": "Iran",
      "away": "New Zealand",
      "date": "2026-06-15",
      "probabilities": [
        68.7,
        27.5,
        3.8
      ],
      "prediction": "3 – 1",
      "actual": "2 – 2"
    },
    {
      "home": "Belgium",
      "away": "Egypt",
      "date": "2026-06-15",
      "probabilities": [
        34.8,
        43.7,
        21.5
      ],
      "prediction": "2 – 1",
      "actual": "1 – 1"
    },
    {
      "home": "Spain",
      "away": "Cape Verde",
      "date": "2026-06-15",
      "probabilities": [
        53.1,
        38.7,
        8.2
      ],
      "prediction": "2 – 1",
      "actual": "0 – 0"
    },
    {
      "home": "Saudi Arabia",
      "away": "Uruguay",
      "date": "2026-06-15",
      "probabilities": [
        15.4,
        38.4,
        46.2
      ],
      "prediction": "1 – 2",
      "actual": "1 – 1"
    },
    {
      "home": "France",
      "away": "Senegal",
      "date": "2026-06-16",
      "probabilities": [
        36.6,
        28.8,
        34.6
      ],
      "prediction": "2 – 1",
      "actual": "3 – 1"
    },
    {
      "home": "Iraq",
      "away": "Norway",
      "date": "2026-06-16",
      "probabilities": [
        20.3,
        29.0,
        50.7
      ],
      "prediction": "1 – 2",
      "actual": "1 – 4"
    },
    {
      "home": "Argentina",
      "away": "Algeria",
      "date": "2026-06-16",
      "probabilities": [
        52.4,
        30.9,
        16.6
      ],
      "prediction": "3 – 1",
      "actual": "3 – 0"
    },
    {
      "home": "Austria",
      "away": "Jordan",
      "date": "2026-06-16",
      "probabilities": [
        62.5,
        26.8,
        10.6
      ],
      "prediction": "2 – 1",
      "actual": "3 – 1"
    },
    {
      "home": "England",
      "away": "Croatia",
      "date": "2026-06-17",
      "probabilities": [
        49.0,
        26.9,
        24.1
      ],
      "prediction": "2 – 1",
      "actual": "4 – 2"
    },
    {
      "home": "Ghana",
      "away": "Panama",
      "date": "2026-06-17",
      "probabilities": [
        20.3,
        28.7,
        51.0
      ],
      "prediction": "1 – 1",
      "actual": "1 – 0"
    },
    {
      "home": "Portugal",
      "away": "DR Congo",
      "date": "2026-06-17",
      "probabilities": [
        48.8,
        39.6,
        11.5
      ],
      "prediction": "2 – 1",
      "actual": "1 – 1"
    },
    {
      "home": "Uzbekistan",
      "away": "Colombia",
      "date": "2026-06-17",
      "probabilities": [
        13.9,
        26.8,
        59.2
      ],
      "prediction": "1 – 2",
      "actual": "1 – 3"
    },
    {
      "home": "Canada",
      "away": "Qatar",
      "date": "2026-06-18",
      "probabilities": [
        54.5,
        28.2,
        17.3
      ],
      "prediction": "2 – 1",
      "actual": "6 – 0"
    },
    {
      "home": "Czech Republic",
      "away": "South Africa",
      "date": "2026-06-18",
      "probabilities": [
        31.7,
        48.6,
        19.7
      ],
      "prediction": "2 – 1",
      "actual": "1 – 1"
    },
    {
      "home": "Mexico",
      "away": "South Korea",
      "date": "2026-06-18",
      "probabilities": [
        47.0,
        33.5,
        19.5
      ],
      "prediction": "1 – 1",
      "actual": "1 – 0"
    },
    {
      "home": "Switzerland",
      "away": "Bosnia and Herzegovina",
      "date": "2026-06-18",
      "probabilities": [
        45.2,
        32.5,
        22.3
      ],
      "prediction": "3 – 1",
      "actual": "4 – 1"
    },
    {
      "home": "United States",
      "away": "Australia",
      "date": "2026-06-19",
      "probabilities": [
        46.7,
        29.6,
        23.7
      ],
      "prediction": "1 – 1",
      "actual": "2 – 0"
    },
    {
      "home": "Brazil",
      "away": "Haiti",
      "date": "2026-06-19",
      "probabilities": [
        77.6,
        15.0,
        7.4
      ],
      "prediction": "3 – 0",
      "actual": "3 – 0"
    },
    {
      "home": "Turkey",
      "away": "Paraguay",
      "date": "2026-06-19",
      "probabilities": [
        32.8,
        30.1,
        37.1
      ],
      "prediction": "1 – 1",
      "actual": "0 – 1"
    },
    {
      "home": "Scotland",
      "away": "Morocco",
      "date": "2026-06-19",
      "probabilities": [
        12.0,
        22.2,
        65.8
      ],
      "prediction": "1 – 2",
      "actual": "0 – 1"
    },
    {
      "home": "Netherlands",
      "away": "Sweden",
      "date": "2026-06-20",
      "probabilities": [
        48.1,
        29.7,
        22.2
      ],
      "prediction": "3 – 1",
      "actual": "5 – 1"
    },
    {
      "home": "Tunisia",
      "away": "Japan",
      "date": "2026-06-20",
      "probabilities": [
        10.0,
        21.4,
        68.6
      ],
      "prediction": "1 – 2",
      "actual": "0 – 4"
    },
    {
      "home": "Germany",
      "away": "Ivory Coast",
      "date": "2026-06-20",
      "probabilities": [
        45.5,
        34.2,
        20.3
      ],
      "prediction": "2 – 1",
      "actual": "2 – 1"
    },
    {
      "home": "Ecuador",
      "away": "Curaçao",
      "date": "2026-06-20",
      "probabilities": [
        50.5,
        38.3,
        11.2
      ],
      "prediction": "2 – 1",
      "actual": "0 – 0"
    },
    {
      "home": "Spain",
      "away": "Saudi Arabia",
      "date": "2026-06-21",
      "probabilities": [
        66.3,
        23.9,
        9.8
      ],
      "prediction": "3 – 1",
      "actual": "4 – 0"
    },
    {
      "home": "Belgium",
      "away": "Iran",
      "date": "2026-06-21",
      "probabilities": [
        27.4,
        47.6,
        25.0
      ],
      "prediction": "1 – 1",
      "actual": "0 – 0"
    },
    {
      "home": "New Zealand",
      "away": "Egypt",
      "date": "2026-06-21",
      "probabilities": [
        10.5,
        25.1,
        64.4
      ],
      "prediction": "1 – 2",
      "actual": "1 – 3"
    },
    {
      "home": "Uruguay",
      "away": "Cape Verde",
      "date": "2026-06-21",
      "probabilities": [
        45.1,
        42.6,
        12.3
      ],
      "prediction": "2 – 1",
      "actual": "2 – 2"
    },
    {
      "home": "Jordan",
      "away": "Algeria",
      "date": "2026-06-22",
      "probabilities": [
        15.7,
        28.7,
        55.6
      ],
      "prediction": "1 – 1",
      "actual": "1 – 2"
    },
    {
      "home": "Argentina",
      "away": "Austria",
      "date": "2026-06-22",
      "probabilities": [
        43.7,
        31.3,
        25.0
      ],
      "prediction": "2 – 1",
      "actual": "2 – 0"
    },
    {
      "home": "France",
      "away": "Iraq",
      "date": "2026-06-22",
      "probabilities": [
        63.9,
        23.2,
        12.9
      ],
      "prediction": "3 – 1",
      "actual": "3 – 0"
    },
    {
      "home": "Norway",
      "away": "Senegal",
      "date": "2026-06-22",
      "probabilities": [
        27.7,
        27.2,
        45.2
      ],
      "prediction": "1 – 1",
      "actual": "3 – 2"
    },
    {
      "home": "Panama",
      "away": "Croatia",
      "date": "2026-06-23",
      "probabilities": [
        22.5,
        28.0,
        49.4
      ],
      "prediction": "1 – 2",
      "actual": "0 – 1"
    },
    {
      "home": "England",
      "away": "Ghana",
      "date": "2026-06-23",
      "probabilities": [
        51.2,
        39.9,
        8.9
      ],
      "prediction": "2 – 0",
      "actual": "0 – 0"
    },
    {
      "home": "Portugal",
      "away": "Uzbekistan",
      "date": "2026-06-23",
      "probabilities": [
        65.5,
        23.1,
        11.4
      ],
      "prediction": "3 – 1",
      "actual": "5 – 0"
    },
    {
      "home": "Colombia",
      "away": "DR Congo",
      "date": "2026-06-23",
      "probabilities": [
        56.0,
        28.8,
        15.2
      ],
      "prediction": "2 – 1",
      "actual": "1 – 0"
    },
    {
      "home": "Mexico",
      "away": "Czech Republic",
      "date": "2026-06-24",
      "probabilities": [
        42.6,
        30.2,
        27.2
      ],
      "prediction": "2 – 1",
      "actual": "3 – 0"
    },
    {
      "home": "South Africa",
      "away": "South Korea",
      "date": "2026-06-24",
      "probabilities": [
        23.8,
        35.1,
        41.1
      ],
      "prediction": "1 – 1",
      "actual": "1 – 0"
    },
    {
      "home": "Canada",
      "away": "Switzerland",
      "date": "2026-06-24",
      "probabilities": [
        31.9,
        30.7,
        37.4
      ],
      "prediction": "1 – 1",
      "actual": "1 – 2"
    },
    {
      "home": "Bosnia and Herzegovina",
      "away": "Qatar",
      "date": "2026-06-24",
      "probabilities": [
        35.2,
        30.4,
        34.4
      ],
      "prediction": "2 – 1",
      "actual": "3 – 1"
    },
    {
      "home": "Scotland",
      "away": "Brazil",
      "date": "2026-06-24",
      "probabilities": [
        10.9,
        25.3,
        63.8
      ],
      "prediction": "1 – 2",
      "actual": "0 – 3"
    },
    {
      "home": "Morocco",
      "away": "Haiti",
      "date": "2026-06-24",
      "probabilities": [
        72.5,
        20.6,
        6.9
      ],
      "prediction": "3 – 1",
      "actual": "4 – 2"
    },
    {
      "home": "United States",
      "away": "Turkey",
      "date": "2026-06-25",
      "probabilities": [
        33.7,
        30.5,
        35.8
      ],
      "prediction": "2 – 1",
      "actual": "2 – 3"
    },
    {
      "home": "Paraguay",
      "away": "Australia",
      "date": "2026-06-25",
      "probabilities": [
        20.7,
        47.6,
        31.7
      ],
      "prediction": "1 – 1",
      "actual": "0 – 0"
    },
    {
      "home": "Curaçao",
      "away": "Ivory Coast",
      "date": "2026-06-25",
      "probabilities": [
        11.2,
        24.1,
        64.8
      ],
      "prediction": "1 – 2",
      "actual": "0 – 2"
    },
    {
      "home": "Japan",
      "away": "Sweden",
      "date": "2026-06-25",
      "probabilities": [
        33.3,
        43.6,
        23.1
      ],
      "prediction": "2 – 1",
      "actual": "1 – 1"
    },
    {
      "home": "Tunisia",
      "away": "Netherlands",
      "date": "2026-06-25",
      "probabilities": [
        9.1,
        23.2,
        67.8
      ],
      "prediction": "1 – 2",
      "actual": "1 – 3"
    },
    {
      "home": "Ecuador",
      "away": "Germany",
      "date": "2026-06-25",
      "probabilities": [
        18.5,
        29.9,
        51.7
      ],
      "prediction": "1 – 2",
      "actual": "2 – 1"
    },
    {
      "home": "Egypt",
      "away": "Iran",
      "date": "2026-06-26",
      "probabilities": [
        20.6,
        43.4,
        36.0
      ],
      "prediction": "1 – 1",
      "actual": "1 – 1"
    },
    {
      "home": "New Zealand",
      "away": "Belgium",
      "date": "2026-06-26",
      "probabilities": [
        6.1,
        15.0,
        78.9
      ],
      "prediction": "1 – 3",
      "actual": "1 – 5"
    },
    {
      "home": "Cape Verde",
      "away": "Saudi Arabia",
      "date": "2026-06-26",
      "probabilities": [
        25.3,
        46.2,
        28.4
      ],
      "prediction": "1 – 1",
      "actual": "0 – 0"
    },
    {
      "home": "Uruguay",
      "away": "Spain",
      "date": "2026-06-26",
      "probabilities": [
        13.0,
        23.3,
        63.7
      ],
      "prediction": "1 – 1",
      "actual": "0 – 1"
    },
    {
      "home": "Norway",
      "away": "France",
      "date": "2026-06-26",
      "probabilities": [
        14.4,
        27.4,
        58.2
      ],
      "prediction": "1 – 2",
      "actual": "1 – 4"
    },
    {
      "home": "Senegal",
      "away": "Iraq",
      "date": "2026-06-26",
      "probabilities": [
        52.3,
        28.6,
        19.1
      ],
      "prediction": "2 – 1",
      "actual": "5 – 0"
    },
    {
      "home": "Jordan",
      "away": "Argentina",
      "date": "2026-06-27",
      "probabilities": [
        9.2,
        23.6,
        67.2
      ],
      "prediction": "1 – 3",
      "actual": "1 – 3"
    },
    {
      "home": "Colombia",
      "away": "Portugal",
      "date": "2026-06-27",
      "probabilities": [
        14.6,
        42.8,
        42.7
      ],
      "prediction": "1 – 1",
      "actual": "0 – 0"
    },
    {
      "home": "Algeria",
      "away": "Austria",
      "date": "2026-06-27",
      "probabilities": [
        22.7,
        42.2,
        35.2
      ],
      "prediction": "1 – 1",
      "actual": "3 – 3"
    },
    {
      "home": "DR Congo",
      "away": "Uzbekistan",
      "date": "2026-06-27",
      "probabilities": [
        38.7,
        33.6,
        27.7
      ],
      "prediction": "2 – 1",
      "actual": "3 – 1"
    },
    {
      "home": "Panama",
      "away": "England",
      "date": "2026-06-27",
      "probabilities": [
        7.7,
        18.1,
        74.2
      ],
      "prediction": "1 – 2",
      "actual": "0 – 2"
    },
    {
      "home": "Croatia",
      "away": "Ghana",
      "date": "2026-06-27",
      "probabilities": [
        61.3,
        26.5,
        12.2
      ],
      "prediction": "2 – 1",
      "actual": "2 – 1"
    }
  ],
  "years": [
    {
      "year": 2019,
      "accuracy": 59.98,
      "train": 20847,
      "test": 992,
      "f1": 0.551
    },
    {
      "year": 2020,
      "accuracy": 52.31,
      "train": 21839,
      "test": 346,
      "f1": 0.474
    },
    {
      "year": 2021,
      "accuracy": 61.78,
      "train": 22185,
      "test": 1078,
      "f1": 0.553
    },
    {
      "year": 2022,
      "accuracy": 57.33,
      "train": 23263,
      "test": 900,
      "f1": 0.5218
    },
    {
      "year": 2023,
      "accuracy": 60.64,
      "train": 24163,
      "test": 912,
      "f1": 0.5467
    },
    {
      "year": 2024,
      "accuracy": 58.06,
      "train": 25075,
      "test": 1135,
      "f1": 0.5022
    },
    {
      "year": 2025,
      "accuracy": 60.74,
      "train": 26210,
      "test": 922,
      "f1": 0.5375
    },
    {
      "year": 2026,
      "accuracy": 56.54,
      "train": 27132,
      "test": 405,
      "f1": 0.502
    }
  ],
  "terms": {
    "y1s1": {
      "name": "Year 1 · Semester 1",
      "status": "Completed",
      "units": 22,
      "courses": [
        {
          "code": "BT1101",
          "name": "Introduction to Business Analytics",
          "units": 4
        },
        {
          "code": "CS1010A",
          "name": "Programming Methodology",
          "units": 4
        },
        {
          "code": "IS1108",
          "name": "Digital Ethics and Data Privacy",
          "units": 4
        },
        {
          "code": "MA1522",
          "name": "Linear Algebra for Computing",
          "units": 4
        },
        {
          "code": "GEX1012",
          "name": "Effective Reasoning",
          "units": 4
        },
        {
          "code": "CFG1002",
          "name": "Career Catalyst",
          "units": 2
        }
      ]
    },
    "y1s2": {
      "name": "Year 1 · Semester 2",
      "status": "Completed",
      "units": 22,
      "courses": [
        {
          "code": "BT2102",
          "name": "Data Management and Visualisation",
          "units": 4
        },
        {
          "code": "CS2030",
          "name": "Programming Methodology II",
          "units": 4
        },
        {
          "code": "IS2101",
          "name": "Business and Technical Communication",
          "units": 4
        },
        {
          "code": "MA1521",
          "name": "Calculus for Computing",
          "units": 4
        },
        {
          "code": "GESS1020",
          "name": "Singapore Society",
          "units": 4
        },
        {
          "code": "CFG1004",
          "name": "Financial Readiness for Young Professionals",
          "units": 2
        }
      ]
    },
    "summer": {
      "name": "Year 1 · Summer",
      "status": "Completed",
      "units": 4,
      "courses": [
        {
          "code": "CP2106",
          "name": "Orbital",
          "units": 4
        }
      ]
    },
    "y2s1": {
      "name": "Year 2 · Semester 1",
      "status": "In progress",
      "units": 22,
      "courses": [
        {
          "code": "BT2101",
          "name": "Econometrics Modeling for Business Analytics",
          "units": 4
        },
        {
          "code": "CS2040",
          "name": "Data Structures and Algorithms",
          "units": 4
        },
        {
          "code": "IS2218",
          "name": "Digital Platforms for Businesses",
          "units": 4
        },
        {
          "code": "QF1100",
          "name": "Introduction to Quantitative Finance",
          "units": 4
        },
        {
          "code": "ST2334",
          "name": "Probability and Statistics",
          "units": 4
        },
        {
          "code": "GEN2060X",
          "name": "Reconnect SeniorsSG",
          "units": 2
        }
      ]
    }
  }
};
