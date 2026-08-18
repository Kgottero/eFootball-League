let activeGroup = "A";

function getGroupStats(groupKey) {
  const group = leagueData.groups[groupKey];
  const stats = {};

  group.teams.forEach(team => {
    stats[team.name] = {
      ...team,
      played: 0, wins: 0, draws: 0, losses: 0,
      gf: 0, ga: 0, points: 0
    };
  });

  leagueData.results
    .filter(r => r.group === groupKey)
    .forEach(r => {
      const home = stats[r.home];
      const away = stats[r.away];
      if (!home || !away) return;

      home.played++;
      away.played++;
      home.gf += r.homeScore;
      home.ga += r.awayScore;
      away.gf += r.awayScore;
      away.ga += r.homeScore;

      if (r.homeScore > r.awayScore) {
        home.wins++; home.points += 3; away.losses++;
      } else if (r.homeScore < r.awayScore) {
        away.wins++; away.points += 3; home.losses++;
      } else {
        home.draws++; away.draws++;
        home.points++; away.points++;
      }
    });

  return Object.values(stats).map(t => ({
    ...t,
    gd: t.gf - t.ga
  })).sort((a, b) =>
    b.points - a.points ||
    b.gd - a.gd ||
    b.gf - a.gf ||
    a.name.localeCompare(b.name)
  );
}

function renderTabs() {
  const tabs = document.getElementById("groupTabs");
  tabs.innerHTML = Object.keys(leagueData.groups).map(key => `
    <button class="tab ${key === activeGroup ? "active" : ""}" onclick="selectGroup('${key}')">
      Group ${groupNumber(key)}
    </button>
  `).join("");
}

function selectGroup(groupKey) {
  activeGroup = groupKey;
  render();
}

function renderStandings() {
  const group = leagueData.groups[activeGroup];
  const stats = getGroupStats(activeGroup);

  document.getElementById("groupEyebrow").textContent = `GROUP ${groupNumber(activeGroup)}`;
  document.getElementById("groupTitle").textContent = group.name;

  document.getElementById("standingsBody").innerHTML = stats.map((team, i) => `
    <tr class="${i < leagueData.competition.qualificationSpots ? "qualified" : ""}">
      <td class="position">${i + 1}</td>
      <td>
        <div class="team">
          <span class="team-logo">
  ${team.logo
    ? `<img src="${team.logo}" alt="${escapeHtml(team.name)} logo">`
    : "⚽"}
</span>
          ${escapeHtml(team.name)}
        </div>
      </td>
      <td>${team.played}</td>
      <td>${team.wins}</td>
      <td>${team.losses}</td>
      <td class="${team.gd > 0 ? "positive" : team.gd < 0 ? "negative" : ""}">
        ${team.gd > 0 ? "+" : ""}${team.gd}
      </td>
      <td class="pts">${team.points}</td>
    </tr>
  `).join("");
}

function renderResults() {
  const recent = [...leagueData.results].reverse().slice(0, 4);
  document.getElementById("resultsList").innerHTML = recent.length
    ? recent.map(r => `
      <div class="result">
        <div>
          <div class="match-teams">${escapeHtml(r.home)} vs ${escapeHtml(r.away)}</div>
          <div class="match-date">Group ${groupNumber(r.group)}</div>
        </div>
        <div class="score">${r.homeScore} - ${r.awayScore}</div>
      </div>
    `).join("")
    : `<div class="result"><span>No results yet.</span></div>`;
}

function renderLeaders() {
  document.getElementById("leadersList").innerHTML =
    Object.keys(leagueData.groups).map(key => {
      const leader = getGroupStats(key)[0];
      return `
        <div class="leader">
          <div>
            <div class="leader-name">
  <span class="team-logo">
    ${leader.logo
      ? `<img src="${leader.logo}" alt="${escapeHtml(leader.name)} logo">`
      : "⚽"}
  </span>
  ${escapeHtml(leader.name)}
</div>
            <div class="leader-meta">Group ${groupNumber(key)} · ${leader.played} played · ${leader.points} pts</div>
          </div>
          <div class="rank">#1</div>
        </div>
      `;
    }).join("");
}

function renderHeader() {
  document.getElementById("competitionName").textContent = leagueData.competition.name;
  document.getElementById("heroTitle").textContent = leagueData.competition.name;
  document.getElementById("heroSubtitle").textContent = leagueData.competition.subtitle;
  document.getElementById("seasonLabel").textContent = leagueData.competition.season;

  const totalTeams = Object.values(leagueData.groups)
    .reduce((sum, g) => sum + g.teams.length, 0);

  document.getElementById("teamCount").textContent = totalTeams;
  document.getElementById("matchCount").textContent = leagueData.results.length;
  document.getElementById("groupCount").textContent = Object.keys(leagueData.groups).length;
  document.getElementById("lastUpdated").textContent =
    new Date().toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}

function groupNumber(key) {
  return { A: 1, B: 2, C: 3, D: 4 }[key] || key;
}

function render() {
  renderHeader();
  renderTabs();
  renderStandings();
  renderResults();
  renderLeaders();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#039;"
  }[char]));
}

render();

