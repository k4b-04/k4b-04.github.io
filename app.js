(function () {
  'use strict';
  var data = window.PORTFOLIO_DATA;
  if (!data) return;
  var byId = function (id) { return document.getElementById(id); };
  var escape = function (value) { return String(value).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var dialog = byId('project-dialog');
  var lastTrigger = null;
  var activeProject = null;

  function projectVisual(project) {
    if (project.id === 'nearbites') {
      return '<div class="project-visual visual-nearbites"><div class="nearbites-type">nearbites<span>GOOD FOOD.<br>CLOSER TO YOU.</span></div><img src="./assets/nearbites.png" alt="Nearbites green map-pin mascot" loading="lazy" width="1254" height="1254"><span class="visual-caption">NUS ORBITAL / CAMPUS FOOD SHARING</span></div>';
    }
    if (project.id === 'world-cup') {
      return '<div class="project-visual visual-wc" aria-hidden="true"><div class="wc-teams">Form <span>→</span> Features <span>→</span> Forecast</div><div class="wc-preview-bars">' + [30, 45, 26, 62, 48, 85, 64, 95, 76, 100, 80, 66, 55, 76, 48, 59, 35, 46].map(function (height) { return '<i style="height:' + height + '%"></i>'; }).join('') + '</div><div class="wc-preview-label"><span>HISTORICAL RESULTS</span><span>38 MODEL FEATURES</span></div><span class="visual-caption">ILLUSTRATION / RANDOM FOREST PIPELINE</span></div>';
    }
    if (project.id === 'career-compass') {
      return '<div class="project-visual visual-career" aria-hidden="true"><div class="mini-window"><div class="mini-window-title"><span>CAREER COMPASS</span><span>↗</span></div><div class="mini-matrix"><span>SKILLS</span><span>CS</span><span>BT</span><span>MA</span><span>IS</span><span>DATA</span><i></i><i></i><i></i><i></i><span>CODE</span><i></i><i></i><i></i><i></i><span>MATH</span><i></i><i></i><i></i><i></i><span>ETHICS</span><i></i><i></i><i></i><i></i></div></div><span class="visual-caption">ILLUSTRATION / REQUIREMENTS × COURSEWORK</span></div>';
    }
    if (project.id === 'techjam') {
      return '<div class="project-visual visual-agent" aria-hidden="true"><div class="agent-visual-inner"><div class="agent-visual-title">AUTONOMOUS EXPERIMENT LOOP</div><div class="agent-flow"><strong>PROPOSE</strong><span>→</span><strong>EXECUTE</strong><span>→</span><strong>EVALUATE</strong></div><div class="agent-flow-return">└────── RECORD & REPEAT ──────┘</div></div><span class="visual-caption">KUAIRAND / RECOMMENDER SYSTEMS</span></div>';
    }
    return '<div class="project-visual visual-refound"><img src="./assets/refound.jpeg" width="799" height="533" alt="ReFound lost-and-found Telegram bot artwork" loading="lazy"></div>';
  }

  function renderProjects() {
    byId('project-grid').innerHTML = data.projects.map(function (project) {
      return '<article class="project-card' + (project.featured ? ' featured' : '') + '" data-project-card="' + project.id + '">' + projectVisual(project) +
        '<div class="project-copy"><div class="project-meta"><span>' + project.index + ' / ' + escape(project.category) + '</span><span>' + escape(project.date) + '</span></div><h3>' + escape(project.name) + '</h3><p>' + escape(project.summary) + '</p><div class="project-stack">' + project.stack.map(escape).join(' / ') +
        '</div><button class="card-open" type="button" data-project="' + project.id + '" aria-label="Explore ' + escape(project.name) + '">Explore project <span aria-hidden="true">↗</span></button></div></article>';
    }).join('');
  }

  function filterProjects(filter) {
    var visible = 0;
    data.projects.forEach(function (project) {
      var show = filter === 'all' || project.filters.indexOf(filter) !== -1;
      document.querySelector('[data-project-card="' + project.id + '"]').hidden = !show;
      if (show) visible++;
    });
    document.querySelectorAll('[data-filter]').forEach(function (button) { button.setAttribute('aria-pressed', String(button.dataset.filter === filter)); });
    byId('filter-status').textContent = visible + ' projects shown.';
    document.querySelector('.work-section .section-count').textContent = String(visible).padStart(2, '0') + ' PROJECTS';
  }

  function matchOptions(selected) {
    return data.matches.map(function (match, index) {
      return '<option value="' + index + '"' + (index === selected ? ' selected' : '') + '>' + escape(match.home + ' vs ' + match.away) + '</option>';
    }).join('');
  }

  function probabilityMarkup(match) {
    return [match.home, 'Draw', match.away].map(function (label, index) {
      var value = match.probabilities[index];
      return '<div class="probability-row ' + ['', 'draw', 'away'][index] + '"><span class="probability-label">' + escape(label) + '</span><span class="probability-value">' + value.toFixed(1) + '%</span><div class="probability-track" aria-hidden="true"><div class="probability-fill" style="width:' + value + '%"></div></div></div>';
    }).join('');
  }

  function updateHero() {
    var match = data.matches[Number(byId('hero-match').value)];
    byId('hero-prediction').innerHTML = probabilityMarkup(match) + '<div class="prediction-summary"><span>Saved score estimate</span><strong>' + match.prediction + '</strong></div>';
  }

  function caseSection(title, text, wide) {
    return '<section class="case-section' + (wide ? ' wide' : '') + '"><h3>' + escape(title) + '</h3><p>' + escape(text) + '</p></section>';
  }

  function openProject(id, trigger, fromHistory) {
    var project = data.projects.find(function (item) { return item.id === id; });
    if (!project) return;
    if (trigger) lastTrigger = trigger;
    activeProject = project;
    byId('dialog-index').textContent = project.index + ' / PROJECT NOTES';
    byId('dialog-content').innerHTML =
      '<div class="dialog-head"><p class="eyebrow muted">' + escape(project.category) + ' / ' + escape(project.date) + '</p><h2 id="dialog-title">' + escape(project.name) + '</h2><p class="dialog-description">' + escape(project.summary) +
      '</p><div class="dialog-tags">' + project.stack.map(function (tag) { return '<span>' + escape(tag) + '</span>'; }).join('') + '</div></div>' +
      '<div class="dialog-tabs" role="tablist" aria-label="Project detail views">' +
      '<button type="button" role="tab" id="case-tab-overview" data-case-tab="overview" aria-selected="true" aria-controls="case-panel-overview">Overview</button>' +
      '<button type="button" role="tab" id="case-tab-demo" data-case-tab="demo" aria-selected="false" tabindex="-1" aria-controls="case-panel-demo">Explore the idea</button>' +
      '<button type="button" role="tab" id="case-tab-engineering" data-case-tab="engineering" aria-selected="false" tabindex="-1" aria-controls="case-panel-engineering">Engineering</button></div>' +
      '<div class="dialog-panel" id="case-panel-overview" role="tabpanel" aria-labelledby="case-tab-overview"><div class="case-grid">' +
      caseSection('THE PROBLEM', project.problem) + caseSection(project.id === 'career-compass' ? 'PROJECT FOCUS' : 'MY CONTRIBUTION', project.contribution) +
      '<section class="case-section"><h3>WHAT IT DOES</h3><ul>' + project.features.map(function (feature) { return '<li>' + escape(feature) + '</li>'; }).join('') + '</ul></section>' +
      caseSection('WHAT I LEARNED', project.learning) + '</div><div class="case-footer"><button class="button button-dark" type="button" data-switch-demo>Explore the idea ↗</button>' +
      (project.repo ? '<a class="text-link" href="' + project.repo + '" target="_blank" rel="noopener noreferrer">Source code ↗</a>' : '') +
      '<span class="case-status">' + escape(project.role) + '<br>' + escape(project.status) + '</span></div></div>' +
      '<div class="dialog-panel" id="case-panel-demo" role="tabpanel" aria-labelledby="case-tab-demo" hidden></div>' +
      '<div class="dialog-panel" id="case-panel-engineering" role="tabpanel" aria-labelledby="case-tab-engineering" hidden><div class="architecture">' +
      project.architecture.map(function (item) { return '<div><span>' + escape(item[0].toUpperCase()) + '</span><h4>' + escape(item[1]) + '</h4><p>' + escape(item[2]) + '</p></div>'; }).join('') +
      '</div><p class="engineering-note">' + escape(project.engineeringNote) + '</p></div>';
    initProjectDemo(project.id);
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('modal-open');
    dialog.scrollTop = 0;
    dialog.querySelector('.dialog-close').focus({ preventScroll: true });
    if (!fromHistory && window.location.hash !== '#project/' + project.id) {
      history.pushState(null, '', '#project/' + project.id);
    }
  }

  function switchCaseTab(tab, focus) {
    dialog.querySelectorAll('[data-case-tab]').forEach(function (button) {
      var selected = button.dataset.caseTab === tab;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
      if (selected && focus) button.focus();
      byId('case-panel-' + button.dataset.caseTab).hidden = !selected;
    });
  }

  function closeProject() {
    if (dialog.open) dialog.close();
  }

  function initProjectDemo(id) {
    if (id === 'world-cup') return initWorldCup();
    if (id === 'nearbites') return initNearbites();
    if (id === 'career-compass') return initCareerCompass();
    if (id === 'techjam') return initResearchAgent();
    if (id === 'refound') return initReFound();
  }

  function initWorldCup() {
    byId('case-panel-demo').innerHTML =
      '<h3 class="demo-heading">Inspect the model’s outputs.</h3><p class="demo-note">Explore saved group-stage predictions, then examine how accuracy varied in the project’s separate annual validation runs.</p>' +
      '<div class="demo-two-columns"><div class="demo-card"><label class="field-label" for="demo-match">ARCHIVED GROUP-STAGE MATCH</label><select id="demo-match" class="demo-select">' + matchOptions(0) + '</select><div id="demo-probabilities" aria-live="polite"></div>' +
      '<label class="result-toggle"><input type="checkbox" id="show-actual"> Show recorded result</label><p class="chart-caption">Source: saved project predictions. Scores and outcomes are shown as recorded in the project.</p></div>' +
      '<div class="demo-card"><h4 class="demo-subheading">YEAR-BY-YEAR VALIDATION</h4><p class="microcopy">Outcome accuracy · 0–100% scale</p><div class="year-chart" role="group" aria-label="Select a validation year">' +
      data.years.map(function (year) { return '<button type="button" class="year-bar" data-year="' + year.year + '" style="height:' + year.accuracy + '%" aria-pressed="' + (year.year === 2025) + '" aria-label="' + year.year + ': ' + year.accuracy.toFixed(1) + '% accuracy"><span class="bar-value">' + year.accuracy.toFixed(1) + '</span><span class="year-label">' + String(year.year).slice(2) + '</span></button>'; }).join('') +
      '</div><div class="year-detail" id="year-detail" aria-live="polite"></div><p class="chart-caption">Each annual run trains on earlier years and evaluates on the selected year. Source: the project’s saved walk-forward results.</p></div></div>';
    function updateMatch() {
      var match = data.matches[Number(byId('demo-match').value)];
      var reveal = byId('show-actual').checked;
      byId('demo-probabilities').innerHTML = probabilityMarkup(match) +
        '<div class="demo-outcomes"><div><span>SAVED SCORE ESTIMATE</span><strong>' + match.prediction + '</strong></div><div><span>RECORDED RESULT</span><strong>' + (reveal ? match.actual : '—') + '</strong></div></div>';
    }
    function updateYear(yearNumber) {
      var year = data.years.find(function (row) { return row.year === yearNumber; });
      dialog.querySelectorAll('[data-year]').forEach(function (button) { button.setAttribute('aria-pressed', String(Number(button.dataset.year) === yearNumber)); });
      byId('year-detail').innerHTML = '<strong>' + year.year + ' · ' + year.accuracy.toFixed(1) + '% outcome accuracy</strong><br>' + year.train.toLocaleString('en-US') + ' training matches / ' + year.test.toLocaleString('en-US') + ' test matches<br>Macro F1: ' + year.f1.toFixed(3);
    }
    byId('demo-match').addEventListener('change', updateMatch);
    byId('show-actual').addEventListener('change', updateMatch);
    dialog.querySelectorAll('[data-year]').forEach(function (button) { button.addEventListener('click', function () { updateYear(Number(button.dataset.year)); }); });
    updateMatch();
    updateYear(2025);
  }

  function initNearbites() {
    var food = [
      { name: 'Vegetarian bentos', place: 'COM3', distance: 120, portions: 8, diet: ['Vegetarian'], category: 'Bentos' },
      { name: 'Fresh fruit & snacks', place: 'University Town', distance: 320, portions: 12, diet: ['Vegetarian'], category: 'Snacks' },
      { name: 'Halal lunch boxes', place: 'Central Library', distance: 220, portions: 6, diet: ['Halal'], category: 'Bentos' },
      { name: 'Assorted pastries', place: 'Engineering', distance: 440, portions: 10, diet: [], category: 'Snacks' }
    ];
    var diet = 'all';
    byId('case-panel-demo').innerHTML = '<h3 class="demo-heading">Find food that fits.</h3><p class="demo-note">Try the discovery rules with fictional campus listings. Change the dietary filter and distance range to see which listings remain. This is a portfolio demonstration.</p>' +
      '<div class="demo-controls" role="group" aria-label="Dietary filter"><button type="button" data-diet="all" aria-pressed="true">All food</button><button type="button" data-diet="Vegetarian" aria-pressed="false">Vegetarian</button><button type="button" data-diet="Halal" aria-pressed="false">Halal</button></div>' +
      '<label class="field-label" for="food-range">DISTANCE FROM EXAMPLE LOCATION</label><select id="food-range" class="demo-select"><option value="150">Within 150 metres</option><option value="250" selected>Within 250 metres</option><option value="500">Within 500 metres</option></select>' +
      '<div id="food-results" aria-live="polite"></div>';
    function update() {
      var range = Number(byId('food-range').value);
      var visible = food.filter(function (item) { return item.distance <= range && (diet === 'all' || item.diet.indexOf(diet) !== -1); });
      byId('food-results').innerHTML = '<p class="demo-count">' + visible.length + ' EXAMPLE LISTING' + (visible.length === 1 ? '' : 'S') + '</p><div class="food-list">' +
        (visible.length ? visible.sort(function (a, b) { return a.distance - b.distance; }).map(function (item) {
          return '<article class="food-card"><span class="eyebrow muted">' + item.category.toUpperCase() + '</span><h4>' + item.name + '</h4><div class="food-place">' + item.place + '</div>' + item.diet.map(function (tag) { return '<span class="food-tag">' + tag + '</span>'; }).join('') +
            '<div class="food-meta"><span>' + item.distance + ' m away</span><span>' + item.portions + ' sample portions</span></div></article>';
        }).join('') : '<p class="empty-state">No example listings match. Try a wider distance range or another dietary choice.</p>') + '</div>';
    }
    dialog.querySelectorAll('[data-diet]').forEach(function (button) { button.addEventListener('click', function () {
      diet = button.dataset.diet;
      dialog.querySelectorAll('[data-diet]').forEach(function (item) { item.setAttribute('aria-pressed', String(item === button)); });
      update();
    }); });
    byId('food-range').addEventListener('change', update);
    update();
  }

  function initCareerCompass() {
    var mappings = {
      analytics: [['BT1101', 'Business questions and analytical thinking'], ['BT2102', 'Working with data and communicating findings'], ['MA1522', 'Linear algebra foundations'], ['BT2101', 'Econometric modelling'], ['ST2334', 'Probability and statistical reasoning']],
      software: [['CS1010A', 'Programming foundations'], ['CS2030', 'Programming methodology and object-oriented development'], ['BT2102', 'Data management'], ['CP2106', 'Building an application through Orbital'], ['CS2040', 'Data structures and algorithms']],
      finance: [['MA1521', 'Calculus foundations'], ['MA1522', 'Linear algebra foundations'], ['BT2101', 'Econometric modelling'], ['QF1100', 'Quantitative finance foundations'], ['ST2334', 'Probability and statistics']]
    };
    byId('case-panel-demo').innerHTML = '<h3 class="demo-heading">Connect learning to a direction.</h3><p class="demo-note">Explore curated links between my actual coursework and three areas of interest. This illustrates the module-discovery idea; the full Career Compass application compares course descriptions with a supplied job description.</p>' +
      '<div class="demo-controls" role="group" aria-label="Explore coursework by interest"><button type="button" data-career="analytics" aria-pressed="true">Data analytics</button><button type="button" data-career="software" aria-pressed="false">Software</button><button type="button" data-career="finance" aria-pressed="false">Quant finance</button></div><div id="coverage-results" class="skill-coverage" aria-live="polite"></div>';
    function update(role) {
      byId('coverage-results').innerHTML = mappings[role].map(function (mapping) {
        var course, status;
        Object.keys(data.terms).forEach(function (key) {
          var term = data.terms[key];
          var found = term.courses.find(function (item) { return item.code === mapping[0]; });
          if (found) { course = found; status = term.status; }
        });
        return '<div class="coverage-row"><strong>' + course.code + '</strong><div>' + escape(course.name) + '<p>' + escape(mapping[1]) + ' · <b>' + status + '</b></p></div></div>';
      }).join('');
      dialog.querySelectorAll('[data-career]').forEach(function (button) { button.setAttribute('aria-pressed', String(button.dataset.career === role)); });
    }
    dialog.querySelectorAll('[data-career]').forEach(function (button) { button.addEventListener('click', function () { update(button.dataset.career); }); });
    update('analytics');
  }

  function initResearchAgent() {
    var step = 0;
    var labels = ['Propose', 'Check', 'Execute', 'Evaluate', 'Decide', 'Record'];
    byId('case-panel-demo').innerHTML = '<h3 class="demo-heading">Follow one experiment.</h3><p class="demo-note">Walk through the research loop. Choose a successful candidate or a failure scenario to see how the stages differ. These are illustrative scenarios based on the project’s control flow.</p>' +
      '<label class="field-label" for="research-scenario">CANDIDATE SCENARIO</label><select id="research-scenario" class="demo-select"><option value="success">Candidate completes and improves the score</option><option value="syntax">Candidate contains a syntax error</option><option value="timeout">Candidate exceeds the execution timeout</option></select>' +
      '<div class="research-steps" role="group" aria-label="Experiment stages">' + labels.map(function (label, index) { return '<button type="button" class="step-button" data-step="' + index + '" aria-pressed="' + (index === 0) + '">' + (index + 1) + '. ' + label + '</button>'; }).join('') +
      '</div><div class="research-stage" id="research-stage" aria-live="polite"></div><div class="research-navigation"><button type="button" id="research-previous">← Previous</button><button type="button" id="research-next">Next →</button></div>';
    function update() {
      var scenario = byId('research-scenario').value;
      var failure = scenario !== 'success';
      var entries = [
        ['Propose a hypothesis', 'The LLM receives the current pipeline and previous experiment history. It returns a hypothesis and a complete candidate pipeline.'],
        [scenario === 'syntax' ? 'Catch invalid Python before execution' : 'Check the candidate’s syntax', scenario === 'syntax' ? 'The syntax check rejects this candidate. The runner returns a structured error, so the orchestration can record the failure.' : 'The runner parses the candidate before starting it. A valid Python syntax tree allows the experiment to move to execution.'],
        [scenario === 'syntax' ? 'Skip execution' : scenario === 'timeout' ? 'Stop an overlong experiment' : 'Run the candidate', scenario === 'syntax' ? 'A syntax error prevents the candidate from being executed.' : scenario === 'timeout' ? 'The subprocess exceeds its time budget. The runner returns a timeout result and captures available output for diagnosis.' : 'The candidate runs in a separate working directory. Its output is captured, and a timeout limits how long the subprocess can run.'],
        [failure ? 'No usable candidate score' : 'Read the validation metrics', failure ? 'The failed run does not move forward as a scored improvement. Its error is carried into the experiment history.' : 'The loop reads the candidate’s metric file. GAUC and nDCG@5 measure the recommendation model’s ranking performance.'],
        [failure ? 'Preserve the previous best' : 'Keep the improved candidate', failure ? 'The failed candidate does not overwrite the current best pipeline. The loop can use the failure information when requesting another candidate.' : 'In this example, the score improves on the current best. The loop retains the candidate for subsequent experiments.'],
        ['Record and continue', 'The logger records the hypothesis, code changes, metrics or failure, decision, duration, and token usage. The next iteration can use that history.']
      ];
      byId('research-stage').innerHTML = '<span class="eyebrow muted">STAGE ' + String(step + 1).padStart(2, '0') + ' / 06</span><h4>' + entries[step][0] + '</h4><p>' + entries[step][1] + '</p>' + ((step === 1 || step === 2) ? '<span class="research-owner">MY FOCUS / CANDIDATE RUNNER</span>' : '');
      dialog.querySelectorAll('[data-step]').forEach(function (button) { button.setAttribute('aria-pressed', String(Number(button.dataset.step) === step)); });
      byId('research-previous').disabled = step === 0;
      byId('research-next').disabled = step === 5;
    }
    dialog.querySelectorAll('[data-step]').forEach(function (button) { button.addEventListener('click', function () { step = Number(button.dataset.step); update(); }); });
    byId('research-scenario').addEventListener('change', update);
    byId('research-previous').addEventListener('click', function () { step = Math.max(0, step - 1); update(); });
    byId('research-next').addEventListener('click', function () { step = Math.min(5, step + 1); update(); });
    update();
  }

  function initReFound() {
    byId('case-panel-demo').innerHTML = '<h3 class="demo-heading">What makes a promising match?</h3><p class="demo-note">Adjust example similarities for two reports in the same item category. This demonstration follows the bot’s weighted text-and-location scoring stage.</p>' +
      '<div class="demo-two-columns"><div class="demo-card matching-controls"><label for="match-certainty">How certain is the lost-item location?<select id="match-certainty"><option value="rough">Rough location</option><option value="exact">Exact location</option><option value="unknown">Unknown location</option></select></label>' +
      '<label for="match-description">Description similarity <output id="description-value" for="match-description">70%</output><input type="range" id="match-description" min="0" max="100" value="70"></label>' +
      '<label for="match-features">Distinctive features <output id="features-value" for="match-features">75%</output><input type="range" id="match-features" min="0" max="100" value="75"></label>' +
      '<label for="match-location">Location similarity <output id="location-value" for="match-location">80%</output><input type="range" id="match-location" min="0" max="100" value="80"></label>' +
      '<label><input type="checkbox" id="match-date" checked> Reports refer to the same date</label></div><div class="demo-card" id="matching-result" aria-live="polite"></div></div>';
    function update() {
      var certainty = byId('match-certainty').value;
      var weights = certainty === 'exact' ? [.25, .20, .10, .35, .10] : certainty === 'unknown' ? [.30, .35, .20, .05, .10] : [.30, .25, .15, .20, .10];
      var description = Number(byId('match-description').value) / 100;
      var features = Number(byId('match-features').value) / 100;
      var location = Number(byId('match-location').value) / 100;
      var descScore = description * weights[1];
      var featScore = features * weights[2];
      var parts = [weights[0], descScore > .05 ? descScore : 0, featScore > .03 ? featScore : 0, location > .3 ? location * weights[3] : 0, byId('match-date').checked ? weights[4] : 0];
      var total = Math.min(1, parts.reduce(function (a, b) { return a + b; }, 0));
      byId('description-value').value = Math.round(description * 100) + '%';
      byId('features-value').value = Math.round(features * 100) + '%';
      byId('location-value').value = Math.round(location * 100) + '%';
      byId('matching-result').innerHTML = '<h4 class="demo-subheading">EXAMPLE MATCH SCORE</h4><div class="match-score">' + Math.round(total * 100) + '<span style="font-size:18px;color:var(--muted)"> / 100</span></div>' +
        ['Same category', 'Description', 'Distinctive features', 'Location', 'Same date'].map(function (label, index) { return '<div class="weight-line"><span>' + label + '</span><span>' + (parts[index] * 100).toFixed(1) + ' points</span></div>'; }).join('') +
        '<p class="matching-disclaimer">A heuristic score from example inputs. Image comparison is a separate stage in the full bot. A high score suggests a candidate to inspect; it does not establish ownership.</p>';
    }
    ['match-certainty', 'match-description', 'match-features', 'match-location', 'match-date'].forEach(function (id) { byId(id).addEventListener('input', update); });
    update();
  }

  function renderTerm(key, focus) {
    var term = data.terms[key];
    document.querySelectorAll('[data-term]').forEach(function (button) {
      var selected = button.dataset.term === key;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
      if (selected && focus) button.focus();
    });
    byId('course-panel').setAttribute('aria-labelledby', 'term-' + key);
    byId('course-panel').innerHTML = '<div class="course-panel-heading"><span>' + term.status.toUpperCase() + '</span><span>' + term.units + ' UNITS / ' + String(term.courses.length).padStart(2, '0') + ' MODULES</span></div>' +
      term.courses.map(function (course) { return '<div class="course-row"><span class="course-code">' + course.code + '</span><span class="course-name">' + escape(course.name) + '</span><span class="course-units">' + course.units + ' units</span></div>'; }).join('') +
      (key === 'summer' ? '<p class="course-note">Orbital is where Nearbites began. <button type="button" data-project="nearbites">Explore the project ↗</button></p>' : '');
  }

  function handleTabKeys(event, selector, callback) {
    var target = event.target.closest(selector);
    if (!target) return;
    var keys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
    if (keys.indexOf(event.key) === -1) return;
    var buttons = Array.from(target.parentElement.querySelectorAll(selector));
    var index = buttons.indexOf(target);
    if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = buttons.length - 1;
    else index = (index + (event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length;
    event.preventDefault();
    callback(buttons[index]);
  }

  document.addEventListener('click', function (event) {
    var projectButton = event.target.closest('[data-project]');
    if (projectButton) openProject(projectButton.dataset.project, projectButton, false);
    var filterButton = event.target.closest('[data-filter]');
    if (filterButton) filterProjects(filterButton.dataset.filter);
    var termButton = event.target.closest('[data-term]');
    if (termButton) renderTerm(termButton.dataset.term, false);
    var caseButton = event.target.closest('[data-case-tab]');
    if (caseButton) switchCaseTab(caseButton.dataset.caseTab, false);
    if (event.target.closest('[data-switch-demo]')) { switchCaseTab('demo', true); dialog.scrollTop = 0; }
  });
  document.addEventListener('keydown', function (event) {
    handleTabKeys(event, '[data-term]', function (button) { renderTerm(button.dataset.term, true); });
    handleTabKeys(event, '[data-case-tab]', function (button) { switchCaseTab(button.dataset.caseTab, true); });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', closeProject);
  dialog.addEventListener('click', function (event) {
    if (event.target !== dialog) return;
    var rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeProject();
  });
  dialog.addEventListener('close', function () {
    document.body.classList.remove('modal-open');
    activeProject = null;
    if (window.location.hash.indexOf('#project/') === 0) history.replaceState(null, '', '#projects');
    if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus({ preventScroll: true });
  });
  window.addEventListener('hashchange', function () {
    var match = window.location.hash.match(/^#project\/([a-z-]+)$/);
    if (match) {
      if (!activeProject || activeProject.id !== match[1]) openProject(match[1], null, true);
    } else closeProject();
  });
  var menu = document.querySelector('.menu-toggle');
  menu.addEventListener('click', function () {
    var open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    byId('primary-nav').classList.toggle('open', open);
  });
  byId('primary-nav').addEventListener('click', function (event) {
    if (!event.target.closest('a')) return;
    menu.setAttribute('aria-expanded', 'false');
    byId('primary-nav').classList.remove('open');
  });
  byId('copy-email').addEventListener('click', async function () {
    var email = 'kabirdurgani@u.nus.edu';
    try {
      if (!navigator.clipboard) throw new Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(email);
      byId('copy-status').textContent = 'Email address copied.';
    } catch (_) {
      var field = document.createElement('textarea');
      field.value = email;
      field.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.appendChild(field);
      field.select();
      var copied = document.execCommand('copy');
      field.remove();
      byId('copy-status').textContent = copied ? 'Email address copied.' : 'Select and copy: ' + email;
      byId('copy-email').focus({ preventScroll: true });
    }
  });

  renderProjects();
  byId('hero-match').innerHTML = matchOptions(0);
  byId('hero-match').addEventListener('change', updateHero);
  updateHero();
  renderTerm('y2s1', false);
  byId('completed-units').textContent = Object.keys(data.terms).reduce(function (sum, key) { return sum + (data.terms[key].status === 'Completed' ? data.terms[key].units : 0); }, 0);
  var initialProject = window.location.hash.match(/^#project\/([a-z-]+)$/);
  if (initialProject) openProject(initialProject[1], null, true);
}());
