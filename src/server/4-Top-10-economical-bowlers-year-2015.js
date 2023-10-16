const getMatchIdByYear = require('../utils/Helpers')

function top10MostEconomicalBowlers(deliveries, matches) {
    const matchId = getMatchIdByYear(matches,2015)
    let runsConcededAndBallsBowledByBowler = {};
    matchId.forEach((id) => {
        deliveries.forEach((delivery) => {
            if (delivery.match_id == id) {

                if (runsConcededAndBallsBowledByBowler[delivery.bowler]) {
                    runsConcededAndBallsBowledByBowler[delivery.bowler]['totalRuns'] = runsConcededAndBallsBowledByBowler[delivery.bowler]['totalRuns'] + Number(delivery.total_runs);
                }
                else {
                    runsConcededAndBallsBowledByBowler[delivery.bowler] = {};
                    runsConcededAndBallsBowledByBowler[delivery.bowler]['totalRuns'] = Number(delivery.total_runs);

                    runsConcededAndBallsBowledByBowler[delivery.bowler]['totalFairDeliveries'] = 0
                }

                if (!(Number(delivery.wide_runs) || Number(delivery.noball_runs))) {
                    runsConcededAndBallsBowledByBowler[delivery.bowler]['totalFairDeliveries']++;
                }
            }
        })
    });

    let economicalBowlerList = [];

    for (let bowler in runsConcededAndBallsBowledByBowler) {
        const totalRuns = Number(runsConcededAndBallsBowledByBowler[bowler]['totalRuns']);
        const totalDeliveries = Number(runsConcededAndBallsBowledByBowler[bowler]['totalFairDeliveries']);

        const runsPerOver = totalRuns / (totalDeliveries / 6);
        const economyRate = Number(runsPerOver.toFixed(2));

        economicalBowlerList.push({
            name: bowler,
            economyRate: economyRate,
        });
    };

    economicalBowlerList.sort((a, b) => {
        const A = a.economyRate;
        const B = b.economyRate;
        if (A < B) {
            return -1;
        }
        else {
            return 1;
        }
    })
    return economicalBowlerList.slice(0, 10);
}

module.exports = top10MostEconomicalBowlers;