const getMatchIdByYear = require('../utils/Helpers')

function top10MostEconomicalBowlers(deliveries, matches) {

    const matchId = getMatchIdByYear(matches, 2015);

    const runsConcededAndBallsBowledByBowler = deliveries.reduce((totalRunsAndFairDeliveries, delivery) => {
        if (matchId.includes(delivery.match_id)) {
            const bowler = delivery.bowler;

            if (!totalRunsAndFairDeliveries[bowler]) {
                totalRunsAndFairDeliveries[bowler] = {
                    totalRuns: 0,
                    totalFairDeliveries: 0
                };
            }

            totalRunsAndFairDeliveries[bowler].totalRuns += Number(delivery.total_runs);

            if (!(Number(delivery.wide_runs) || Number(delivery.noball_runs))) {
                totalRunsAndFairDeliveries[bowler].totalFairDeliveries++;
            }
        }
        return totalRunsAndFairDeliveries;
    }, {});


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
    let top10MostEconomicalBowlers = {};
    economicalBowlerList.slice(0, 10).forEach((item)=>{
        top10MostEconomicalBowlers[item.name] = item.economyRate;
    })
    return top10MostEconomicalBowlers;
}

module.exports = top10MostEconomicalBowlers;