const numOfMatchesWonPerTeamPerYear = require("../src/server/2-matches-won-per-team-per-year");


test("matches won per team per year", () => {

    const sampleData = [
        {
            id: "1",
            season: "2008",
            winner: "Kolkata Knight Riders",
        },
        {
            id: "2",
            season: "2009",
            winner: "Mumbai Indians",
        },
        {
            id: "3",
            season: "2010",
            winner: "Mumbai Indians",
        },
        {
            id: "4",
            season: "2009",
            winner: "Rajasthan Royals",
        },
        {
            id: "5",
            season: "2010",
            winner: "Royal Challengers Bangalore",
        },
        {
            id: "6",
            season: "2011",
            winner: "Rajasthan Royals",
        },
        {
            id: "7",
            season: "2009",
            winner: "Kolkata Knight Riders",
        },
        {
            id: "8",
            season: "2011",
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
        {
            id: "11",
            season: "2013",
            winner: "Royal Challengers Bangalore",
        },
        {
            id: "12",
            season: "2009",
            winner: "Kolkata Knight Riders",
        },
    ];
    const resultData = {
        "2008": {
            "Kolkata Knight Riders": 1,
        },
        "2009": {
            "Mumbai Indians": 1,
            "Kolkata Knight Riders": 2,
            "Rajasthan Royals": 1,
        },
        "2010": {
            "Royal Challengers Bangalore": 2,
            "Mumbai Indians": 1,
        },
        "2011": {
            "Royal Challengers Bangalore": 1,
            "Rajasthan Royals": 1,
        },
        "2013": {
            "Royal Challengers Bangalore": 1,
            "Rajasthan Royals": 1,
        },
    };
    expect(numOfMatchesWonPerTeamPerYear(sampleData)).toEqual(resultData);
});