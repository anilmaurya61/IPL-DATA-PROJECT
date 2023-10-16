const top10MostEconomicalBowlers = require('../src/server/4-Top-10-economical-bowlers-year-2015')


test("economical bowlers year 2015", () => {

    const sampleDataMatches = [
        {
            id: "1",
            season: "2008",
            winner: "Kolkata Knight Riders",
        },
        {
            id: "2",
            season: "2015",
            winner: "Mumbai Indians",
        },
        {
            id: "3",
            season: "2010",
            winner: "Mumbai Indians",
        },
        {
            id: "4",
            season: "2015",
            winner: "Rajasthan Royals",
        },
        {
            id: "5",
            season: "2010",
            winner: "Royal Challengers Bangalore",
        },
    ];

    const sampleDataDeliveries = [
        {
            match_id: "1",
            extra_runs: 2,
            bowling_team: "Kolkata Knight Riders",
            bowler: "TS Mills",
            total_runs: 3,
            wide_runs: 3,
            noball_runs: 0,
        },
        {
            match_id: "2",
            extra_runs: 0,
            bowling_team: "Mumbai Indians",
            bowler: "A Choudhary",
            total_runs: 0,
            wide_runs: 0,
            noball_runs: 0,
        },
        {
            match_id: "3",
            extra_runs: 1,
            bowling_team: "Mumbai Indians",
            bowler: "TS Mills",
            total_runs: 2,
            wide_runs: 0,
            noball_runs: 2,
        },
        {
            match_id: "4",
            extra_runs: 3,
            bowling_team: "Rajasthan Royals",
            bowler: "A Choudhary",
            total_runs: 2,
            wide_runs: 2,
            noball_runs: 0,
        },
        {
            match_id: "5",
            extra_runs: 0,
            bowling_team: "Royal Challengers Bangalore",
            bowler: "A Choudhary",
            total_runs: 6,
            wide_runs: 0,
            noball_runs: 0,
        },
    ];

    const resultData =[{"economyRate": 12, "name": "A Choudhary"}]
    expect(top10MostEconomicalBowlers(sampleDataDeliveries, sampleDataMatches)).toEqual(resultData);
});
