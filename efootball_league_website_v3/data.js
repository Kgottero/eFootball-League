/*
  ============================
  EASY EDITING FILE
  ============================

  You only need to edit this file.

  1. Change the competition name/season below.
  2. Add or remove teams in the groups.
  3. Add match results to the results array.

  Points are calculated automatically:
  Win = 3 points
  Draw = 1 point
  Loss = 0 points

  You can use any team names and emoji as logos.
*/

const leagueData = {
  competition: {
    name: "eFootball League",
    season: "2026 Season",
    subtitle: "Live standings across four groups.",
    qualificationSpots: 2
  },

  groups: {
    A: {
      name: "Group 1",
      teams: [
        { name: "Chelsea", logo: "" },
        { name: "Liverpool", logo: "" },
        { name: "Manchester City", logo: "🔴" }
      ]
    },

    B: {
      name: "Group 2",
      teams: [
        { name: "Arsenal", logo: "" },
        { name: "Brentford", logo: "" },
        { name: "Manchester United", logo: "🔴" }
      ]
    },

    C: {
      name: "Group 3",
      teams: [
        { name: "Fulham", logo: "" },
        { name: "Crystal Palace", logo: "" },
        { name: "Tottenham", logo: "🔴" }
      ]
    },

    D: {
      name: "Group 4",
      teams: [
        { name: "Brighton", logo: "" },
        { name: "Newcastle United", logo: "" },
        { name: "Aston Villa", logo: "🔴" }
      ]
    }
  },

  /*
    Add results here.

    group: "A", "B", "C" or "D"
    home: exact team name
    away: exact team name
    homeScore / awayScore: numbers
  */
  results: [
    { group: "A", home: "Chelsea", away: "Liverpool", homeScore: 0, awayScore: 0 },
    { group: "C", home: "Crystal Palace", away: "Fulham", homeScore: 2, awayScore: 4 },
    { group: "C", home: "Crystal Palace", away: "Tottenham", homeScore: 3, awayScore: 0 },
    { group: "D", home: "Aston Villa", away: "Brighton", homeScore: 0, awayScore: 5 }
  ]
};

