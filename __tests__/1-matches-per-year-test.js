const getMatchesPerYear = require("../src/server/1-matches-per-year.js");


test("played_matches_per_year", () => {

  const sampleData = [
    {
      id: "1",
      season: "2008",
      city: "Chennai",
    },
    {
      id: "2",
      season: "2009",
      city: "Hyderabad",
    },
    {
      id: "3",
      season: "2010",
      city: "Chandigarh",
    },
    {
      id: "4",
      season: "2009",
      city: "Mumbai",
    },
    {
      id: "5",
      season: "2010",
      city: "Chennai",
    },
    {
      id: "6",
      season: "2011",
      city: "Hyderabad",
    },
    {
      id: "7",
      season: "2009",
      city: "Chandigarh",
    },
    {
      id: "8",
      season: "2011",
      city: "Mumbai",
    },
    {
      id: "9",
      season: "2013",
      city: "Chennai",
    },
    {
      id: "10",
      season: "2010",
      city: "Hyderabad",
    },
    {
      id: "11",
      season: "2013",
      city: "Chandigarh",
    },
    {
      id: "12",
      season: "2009",
      city: "Mumbai",
    },
  ];
  const resultData = { 2008: 1, 2009: 4, 2010: 3, 2011: 2, 2013: 2 };
  expect(getMatchesPerYear(sampleData)).toEqual(resultData);
});
