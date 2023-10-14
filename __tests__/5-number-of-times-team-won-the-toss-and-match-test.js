const getNumberOfTimesTeamWonTheTossAndMatch = require('../src/server/5-number-of-times-team-won-the-toss-and-match')


test("number-of-times-team-won-the-toss-and-match", () => {

    const sampleData = [
        {
            id: "1",
            season: "2008",
            toss_winner:"Kolkata Knight Riders",
            winner: "Kolkata Knight Riders",
        },
        {
            id: "2",
            season: "2009",
            toss_winner:"Kolkata Knight Riders",
            winner: "Mumbai Indians",
        },
        {
            id: "3",
            season: "2010",
            toss_winner:"Mumbai Indians",
            winner: "Mumbai Indians",
        },
        {
            id: "4",
            season: "2009",
            toss_winner:"Kolkata Knight Riders",
            winner: "Rajasthan Royals",
        },
        {
            id: "5",
            season: "2010",
            toss_winner:"Kolkata Knight Riders",
            winner: "Royal Challengers Bangalore",
        },
        {
            id: "6",
            season: "2011",
            toss_winner:"Kolkata Knight Riders",
            winner: "Rajasthan Royals",
        },
        {
            id: "7",
            season: "2009",
            toss_winner:"Kolkata Knight Riders",
            winner: "Kolkata Knight Riders",
        },
        {
            id: "8",
            season: "2011",
            toss_winner:"Royal Challengers Bangalore",
            winner: "Royal Challengers Bangalore",
        },
        {
            id: "9",
            season: "2013",
            toss_winner:"Rajasthan Royals",
            winner: "Rajasthan Royals",
        },
        {
            id: "10",
            season: "2010",
            toss_winner:"Kolkata Knight Riders",
            winner: "Royal Challengers Bangalore",
        },
        {
            id: "11",
            season: "2013",
            toss_winner:"Royal Challengers Bangalore",
            winner: "Royal Challengers Bangalore",
        },
        {
            id: "12",
            season: "2009",
            toss_winner:"Kolkata Knight Riders",
            winner: "Kolkata Knight Riders",
        },
    ];
    const resultData = {
        "Kolkata Knight Riders": 3,
        "Mumbai Indians": 1,
        "Rajasthan Royals": 1,
        "Royal Challengers Bangalore": 2,
      }
    expect(getNumberOfTimesTeamWonTheTossAndMatch(sampleData)).toEqual(resultData);
});