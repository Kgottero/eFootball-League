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
        { name: "Chelsea", logo: "Images/Chelsea logo.png" },
        { name: "Liverpool", logo: "Images/Liverpool logo.png" },
        { name: "Manchester City", logo: "Images/manchester-city-logo-footylogos.png" }
      ]
    },

    B: {
      name: "Group 2",
      teams: [
        { name: "Arsenal", logo: "Images/arsenal-logo-footylogos.png" },
        { name: "Brentford", logo: "Images/brentford-logo-footylogos.png" },
        { name: "Manchester United", logo: "Images/Manchester United logo.png" }
      ]
    },

    C: {
      name: "Group 3",
      teams: [
        { name: "Fulham", logo: "Images/Fulham logo.png" },
        { name: "Crystal Palace", logo: "Images/Crystal Palace logo.png" },
        { name: "Tottenham", logo: "Images/Tottenham logo.png" }
      ]
    },

    D: {
      name: "Group 4",
      teams: [
        { name: "Brighton", logo: "Images/brighton-and-hove-albion-logo-footylogos.png" },
        { name: "Newcastle United", logo: "Images/Newcastle United logo.png" },
        { name: "Aston Villa", logo: "Images/aston-villa-logo-footylogos.png" }
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
    { group: "C", home: "Crystal Palace", away: "Fulham", homeScore: 2, awayScore: 4 },
    { group: "C", home: "Crystal Palace", away: "Tottenham", homeScore: 3, awayScore: 0 },
    { group: "D", home: "Aston Villa", away: "Brighton", homeScore: 0, awayScore: 5 },
    { group: "B", home: "Arsenal", away: "Brentford", homeScore: 0, awayScore: 3 }
  ]
};

