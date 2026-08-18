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
        { name: "Arsenal", logo: "🔴" },
        { name: "Chelsea", logo: "🔵" },
        { name: "Liverpool", logo: "🔴" }
      ]
    },

    B: {
      name: "Group 2",
      teams: [
        { name: "Barcelona", logo: "🔵" },
        { name: "Real Madrid", logo: "⚪" },
        { name: "Atletico Madrid", logo: "🔴" }
      ]
    },

    C: {
      name: "Group 3",
      teams: [
        { name: "Bayern Munich", logo: "🔴" },
        { name: "Dortmund", logo: "🟡" },
        { name: "Leverkusen", logo: "🔴" }
      ]
    },

    D: {
      name: "Group 4",
      teams: [
        { name: "Inter Milan", logo: "🔵" },
        { name: "AC Milan", logo: "🔴" },
        { name: "Juventus", logo: "⚪" }
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
    { group: "A", home: "Arsenal", away: "Chelsea", homeScore: 3, awayScore: 1 },
    { group: "B", home: "Barcelona", away: "Atletico Madrid", homeScore: 4, awayScore: 0 },
    { group: "C", home: "Bayern Munich", away: "Dortmund", homeScore: 2, awayScore: 2 },
    { group: "D", home: "Inter Milan", away: "Juventus", homeScore: 1, awayScore: 0 }
  ]
};
