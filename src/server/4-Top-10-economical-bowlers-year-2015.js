function getEconomicalBowler(deliveries, matchId){
    let bowler = {};
    matchId.forEach((id)=>{
        deliveries.forEach((entry)=>{
            if(entry.match_id == id){
                if(bowler[entry.bowler]){
                    bowler[ball]++;
                    bowler[total_runs] = bowler[total_runs] + Number(entry.total_runs);
                }
                else{
                    bowler['bowler'] = entry.bowler;
                    bowler['total_runs'] = Number(entry.total_runs);
                    bowler['ball'] = 1;

                }
            }
        })
    });
}

module.exports = getEconomicalBowler;