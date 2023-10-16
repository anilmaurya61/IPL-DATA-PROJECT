const findBestEconomySuperOverBowler = require("../src/server/9-find-the-bowler-with-the-best-economy-in-super-overs");

test("bowler with highest economy", () => {
  const sampleDataDeliveries = [
    {
      match_id: 1,
      bowler: "TS Mills",
      is_super_over: 1,
      total_runs: 3,
      wide_runs: 3,
      noball_runs: 0,
    },
    {
      match_id: 2,
      bowler: "A Choudhary",
      is_super_over: 0,
      total_runs: 0,
      wide_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 3,
      bowler: "TS Mills",
      is_super_over: 1,
      total_runs: 2,
      wide_runs: 0,
      noball_runs: 2,
    },
    {
      match_id: 2,
      bowler: "A Choudhary",
      is_super_over: 0,
      total_runs: 2,
      wide_runs: 2,
      noball_runs: 0,
    },
    {
      match_id: 5,
      bowler: "A Choudhary",
      is_super_over: 1,
      total_runs: 6,
      wide_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 6,
      bowler: "A Choudhary",
      is_super_over: 1,
      total_runs: 2,
      wide_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 7,
      bowler: "A Choudhary",
      is_super_over: 1,
      total_runs: 3,
      wide_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 8,
      bowler: "A Choudhary",
      is_super_over: 1,
      total_runs: 2,
      wide_runs: 1,
      noball_runs: 1,
    },
    {
      match_id: 9,
      bowler: "A Choudhary",
      is_super_over: 1,
      total_runs: 1,
      wide_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 10,
      bowler: "A Choudhary",
      is_super_over: 1,
      total_runs: 1,
      wide_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 11,
      bowler: "A Choudhary",
      is_super_over: 1,
      total_runs: 2,
      wide_runs: 0,
      noball_runs: 0,
    },
  ];
  const resultData = [{"economyRate": 16.29, "name": "A Choudhary"}];
  expect(findBestEconomySuperOverBowler(sampleDataDeliveries)).toEqual(
    resultData
  );
});