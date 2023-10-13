function getMatchIdByYear(matches, year){
    const matchId = [];
    matches.forEach((match) =>{
        if(match.season == year){
            matchId.push(match.id);
        }
    })
    return matchId;
}

module.exports = getMatchIdByYear;