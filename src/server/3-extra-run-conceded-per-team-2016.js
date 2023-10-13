function calExtraRunConceded(deliveries, matchId){
    const extraRunConceded = {};
    matchId.forEach((id) =>{
        deliveries.forEach((entry) =>{
            if(entry.match_id == id){
                if(extraRunConceded[entry.bowling_team]){
                    extraRunConceded[entry.bowling_team] = extraRunConceded[entry.bowling_team] + Number(entry.extra_runs);
                }
                else{
                    extraRunConceded[entry.bowling_team] = Number(entry.extra_runs);
                }
            }
        })
    })
    return extraRunConceded;
}
module.exports =  calExtraRunConceded; 