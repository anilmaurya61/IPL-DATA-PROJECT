const getTopPlayerOfTheMatch = require('../src/server/6-player-who-has-won-the-highest-number-of-Player-of-the-Match-awards ')


test("player who won the highest number of match awards", () => {

    const sampleData = [
        {
            id: "1",
            season: "2008",
            winner: "Kolkata Knight Riders",
            player_of_match: "Yuvraj Singh",
        },
        {
            id: "2",
            season: "2009",
            winner: "Mumbai Indians",
            player_of_match: "Rashid Khan",
        },
        {
            id: "3",
            season: "2010",
            winner: "Mumbai Indians",
            player_of_match: "SPD Smith",
        },
        {
            id: "4",
            season: "2009",
            winner: "Rajasthan Royals",
            player_of_match: "Rashid Khan",
        },
        {
            id: "5",
            season: "2010",
            winner: "Royal Challengers Bangalore",
            player_of_match: "Rashid Khan",
        },
        {
            id: "6",
            season: "2011",
            winner: "Rajasthan Royals",
            player_of_match: "Rashid Khan",
        },
        {
            id: "7",
            season: "2009",
            winner: "Kolkata Knight Riders",
            player_of_match: "Rashid Khan",
        },
        {
            id: "8",
            season: "2011",
            winner: "Royal Challengers Bangalore",
            player_of_match: "GJ Maxwell",
        },
        {
            id: "9",
            season: "2013",
            winner: "Rajasthan Royals",
            player_of_match: "SPD Smith",
        },
        {
            id: "10",
            season: "2010",
            winner: "Royal Challengers Bangalore",
            player_of_match: "GJ Maxwell",
        },
        {
            id: "11",
            season: "2013",
            winner: "Royal Challengers Bangalore",
            player_of_match: "SPD Smith",
        },
        {
            id: "12",
            season: "2009",
            winner: "Kolkata Knight Riders",
            player_of_match: "GJ Maxwell",
        },
    ];
    const resultData = {
        "2008": ["Yuvraj Singh"],
        "2009": ["Rashid Khan"],
        "2010": ["SPD Smith", "Rashid Khan", "GJ Maxwell"],
        "2011": ["Rashid Khan", "GJ Maxwell"],
        "2013": ["SPD Smith"]
    }
    
    expect(getTopPlayerOfTheMatch(sampleData)).toEqual(resultData);
});