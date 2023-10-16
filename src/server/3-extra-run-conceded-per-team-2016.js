const getMatchIdByYear = require('../utils/Helpers')

function calExtraRunConceded(deliveries, matches){
    const matchId = getMatchIdByYear(matches,2016);
    const extraRunConceded = {};
    matchId.forEach((id) =>{
        deliveries.forEach((delivery) =>{
            if(delivery.match_id == id){
                if(extraRunConceded[delivery.bowling_team]){
                    extraRunConceded[delivery.bowling_team] = extraRunConceded[delivery.bowling_team] + Number(delivery.extra_runs);
                }
                else{
                    extraRunConceded[delivery.bowling_team] = Number(delivery.extra_runs);
                }
            }
        })
    })
    return extraRunConceded;
}
module.exports =  calExtraRunConceded; 