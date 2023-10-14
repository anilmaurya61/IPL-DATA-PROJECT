function getMatchIdOfSeasons(matches){
    let  matchId = {};
    matches.forEach((match) =>{
        if(matchId[match.season]){
            matchId[match.season].push(match.id);
        }
        else{
            matchId[match.season] = [match.id];
        }
    })
    return matchId;
}

function calTotalRunAndDeliveries(deliveries, id) {
    let totalRunAndDeliveries = {};

    deliveries.forEach((deliver) => {
        if (deliver.match_id == id) {
            if (totalRunAndDeliveries[deliver.batsman]) {
                totalRunAndDeliveries[deliver.batsman]['totalRuns'] += Number(deliver.total_runs);
                totalRunAndDeliveries[deliver.batsman]['totalDeliveries'] += 1;
            } else {
                totalRunAndDeliveries[deliver.batsman] = { totalRuns: Number(deliver.total_runs), totalDeliveries: 1 };
            }
        }
    });
    return totalRunAndDeliveries;
}

function calBatmanStrikeRates(totalRunAndDeliveries){
    let batsmanStrikeRates = {};
    for(let key in totalRunAndDeliveries){
        const totalRuns = Number(totalRunAndDeliveries[key]['totalRuns']);
        const totalDeliveries = Number(totalRunAndDeliveries[key]['totalDeliveries']);
        const strikeRate = ((totalRuns / totalDeliveries)*100).toFixed(2);
        batsmanStrikeRates[key] = strikeRate;
    }
    return batsmanStrikeRates; 
}

function calculateStrikeRatePerSeason(deliveries, matches) {
    let batsmanStrikeRatesPerSeason = {};
    const matchId = getMatchIdOfSeasons(matches);
    for(let season in matchId){
        let batsmanStrikeRates = {};
        for(let id in matchId[season]){
            const totalRunAndDeliveries = calTotalRunAndDeliveries(deliveries, matchId[season][id]);
            batsmanStrikeRates = calBatmanStrikeRates(totalRunAndDeliveries);
        }
        batsmanStrikeRatesPerSeason[season] = batsmanStrikeRates;
    }
    return batsmanStrikeRatesPerSeason;
}

module.exports = calculateStrikeRatePerSeason;