function calculateTotalRunAndDeliveries(deliveries) {
    let totalRunAndDeliveries = [];
    deliveries.forEach((deliver) => {
        if (deliveries[deliver.is_super_over] != 0) {

            if (totalRunAndDeliveries[deliver.bowler]) {
                totalRunAndDeliveries[deliver.bowler]['totalRuns'] = totalRunAndDeliveries[deliver.bowler]['totalRuns'] + Number(deliver.total_runs);
            }
            else {
                totalRunAndDeliveries[deliver.bowler] = {};
                totalRunAndDeliveries[deliver.bowler]['totalRuns'] = Number(deliver.total_runs);

                totalRunAndDeliveries[deliver.bowler]['totalFairDeliveries'] = 0
            }

            if (!(Number(deliver.wide_runs) || Number(deliver.noball_runs))) {
                totalRunAndDeliveries[deliver.bowler]['totalFairDeliveries']++;
            }

        }
    })
    return totalRunAndDeliveries;
}

function calculateEconomySuperOverBowler(totalRunAndDeliveries) {
    let economicalBowlerList = [];

    for (let bowler in totalRunAndDeliveries) {
        const totalRuns = Number(totalRunAndDeliveries[bowler]['totalRuns']);
        const totalDeliveries = Number(totalRunAndDeliveries[bowler]['totalFairDeliveries']);
        if (totalDeliveries > 6) {
            const runsPerOver = totalRuns / (totalDeliveries / 6);
            const economyRate = Number(runsPerOver.toFixed(2));

            economicalBowlerList.push({
                name: bowler,
                economyRate: economyRate,
            });
        }
    };
    return economicalBowlerList.sort((a, b) => {
        const A = a.economyRate;
        const B = b.economyRate;
        if (A < B) {
            return -1;
        }
        else {
            return 1;
        }
    })
}

function findBestEconomySuperOverBowler(deliveries) {
    
    const totalRunAndDeliveries = calculateTotalRunAndDeliveries(deliveries);

    const economySuperOverBowler = calculateEconomySuperOverBowler(totalRunAndDeliveries);

    return economySuperOverBowler.slice(0, 1);
}

module.exports = findBestEconomySuperOverBowler;