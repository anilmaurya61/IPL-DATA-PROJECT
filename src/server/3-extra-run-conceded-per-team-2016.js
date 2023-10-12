function getExtraRunConceded(matches){
    const matchId = [];
    matches.forEach((match) =>{
        if(match.season == 2016){
            matchId.push(match.id);
        }
    })
    // console.log(matchId);
    return matchId;
}

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
module.exports = {getExtraRunConceded, calExtraRunConceded}; 