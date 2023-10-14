const calExtraRunConceded = require('../src/server/3-extra-run-conceded-per-team-2016')
const getMatchIdByYear = require('../src/utils/Helpers.js')

test("extra run conceded per team", () => {

    const sampleDataMatches = [
        {
            id: "1",
            season: "2008",
            winner: "Kolkata Knight Riders",
        },
        {
            id: "2",
            season: "2016",
            winner: "Mumbai Indians",
        },
        {
            id: "3",
            season: "2010",
            winner: "Mumbai Indians",
        },
        {
            id: "4",
            season: "2016",
            winner: "Rajasthan Royals",
        },
        {
            id: "5",
            season: "2010",
            winner: "Royal Challengers Bangalore",
        },
        {
            id: "6",
            season: "2016",
            winner: "Rajasthan Royals",
        },
        {
            id: "7",
            season: "2009",
            winner: "Kolkata Knight Riders",
        },
        {
            id: "8",
            season: "2016",
            winner: "Royal Challengers Bangalore",
        },
        {
            id: "9",
            season: "2013",
            winner: "Rajasthan Royals",
        },
        {
            id: "10",
            season: "2010",
            winner: "Royal Challengers Bangalore",
        },
    ];

    const sampleDataDeliveries = [
        {
            match_id: "1",
            extra_runs: 2,
            bowling_team: "Kolkata Knight Riders",
        },
        {
            match_id: "2",
            extra_runs: 0,
            bowling_team: "Mumbai Indians",
        },
        {
            match_id: "3",
            extra_runs: 1,
            bowling_team: "Mumbai Indians",
        },
        {
            match_id: "4",
            extra_runs: 3,
            bowling_team: "Rajasthan Royals",
        },
        {
            match_id: "5",
            extra_runs: 0,
            bowling_team: "Royal Challengers Bangalore",
        },
        {
            match_id: "6",
            extra_runs: 1,
            bowling_team: "Rajasthan Royals",
        },
        {
            match_id: "7",
            extra_runs: 3,
            bowling_team: "Kolkata Knight Rmatch_iders",
        },
        {
            match_id: "8",
            extra_runs: 0,
            bowling_team: "Royal Challengers Bangalore",
        },
        {
            match_id: "9",
            extra_runs: 2,
            bowling_team: "Rajasthan Royals",
        },
        {
            match_id: "10",
            extra_runs: 0,
            bowling_team: "Royal Challengers Bangalore",
        },
    ];

    const resultData = {
        "Rajasthan Royals": 4,
        "Mumbai Indians": 0,
        "Royal Challengers Bangalore": 0,
      };
    const matchId = getMatchIdByYear(sampleDataMatches,2016);
    expect(calExtraRunConceded(sampleDataDeliveries, matchId)).toEqual(resultData);
});
