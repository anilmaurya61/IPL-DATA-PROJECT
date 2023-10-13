function getEconomicalBowler(deliveries, matchId) {
    let bowler = [];
    matchId.forEach((id) => {
        deliveries.forEach((entry) => {
            if (entry.match_id == id) {

                if (bowler[entry.bowler]) {
                    bowler[entry.bowler]['totalRuns'] = bowler[entry.bowler]['totalRuns'] + Number(entry.total_runs);
                }
                else {
                    bowler[entry.bowler] = {};
                    bowler[entry.bowler]['totalRuns'] = Number(entry.total_runs);

                    bowler[entry.bowler]['totalFairDeliveries'] = 0
                }

                if (!(Number(entry.wide_runs) || Number(entry.noball_runs))) {
                    bowler[entry.bowler]['totalFairDeliveries']++;
                }
            }
        })
    });

    let economicalBowlerList = [];

    for (let key in bowler) {
        let economyRate = Number((Number(bowler[key]['totalRuns']) / (Number(bowler[key]['totalFairDeliveries']) / 6)).toFixed(2));

        economicalBowlerList.push({
            name: key,
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
    // console.log(economicalBowlerList.slice(0, 10));
    return economicalBowlerList.slice(0, 10);
}



module.exports = getEconomicalBowler;