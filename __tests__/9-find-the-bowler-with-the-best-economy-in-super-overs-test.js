const findBestEconomySuperOverBowler = require('../src/server/8-find-the-highest-number-of-times-one-player-has-been-dismissed-by-another-player')

test("bowler with highest economy", () => {

    const sampleDataDeliveries = [
        {
            match_id: 1,
            extra_runs: 2,
            bowling_team: "Kolkata Knight Riders",
            bowler: "TS Mills",
            player_dismissed: "DA Warner",
            is_super_over: 1,
            total_runs: 3,
            total_runs: 3,
            wide_runs: 3,
            noball_runs: 0,
        },
        {
            match_id: 2,
            extra_runs: 0,
            bowling_team: "Mumbai Indians",
            bowler: "A Choudhary",
            player_dismissed: "MS Dhoni",
            is_super_over: 0,
            total_runs: 0,
            wide_runs: 0,
            noball_runs: 0,
        },
        {
            match_id: 3,
            extra_runs: 1,
            bowling_team: "Mumbai Indians",
            bowler: "TS Mills",
            player_dismissed: "DA Warner",
            is_super_over: 1,
            total_runs: 2,
            wide_runs: 0,
            noball_runs: 2,
        },
        {
            match_id: 4,
            extra_runs: 3,
            bowling_team: "Rajasthan Royals",
            bowler: "A Choudhary",
            player_dismissed: "TS Mills",
            is_super_over: 0,
            total_runs: 2,
            wide_runs: 2,
            noball_runs: 0,
        },
        {
            match_id: 5,
            extra_runs: 0,
            bowling_team: "Royal Challengers Bangalore",
            bowler: "A Choudhary",
            player_dismissed: "DA Warner",
            is_super_over: 1,
            total_runs: 6,
            wide_runs: 0,
            noball_runs: 0,
        },
    ];
    const resultData = {
        "count": 2,
        "dismissed": "DA Warner",
        "dismissedBy": "TS Mills",
      };
    expect(findBestEconomySuperOverBowler(sampleDataDeliveries)).toEqual(resultData);
});