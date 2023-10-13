function getseasonTopPlayerOfTheMatch(matches) {
    let seasonPlayerOfTheMatch = {};
    matches.forEach((match) => {
        if (seasonPlayerOfTheMatch[match.season]) {
            if (seasonPlayerOfTheMatch[match.season][match.player_of_match]) {
                seasonPlayerOfTheMatch[match.season][match.player_of_match]++;
            } else {
                seasonPlayerOfTheMatch[match.season][match.player_of_match] = 1;
            }
        } else {
            seasonPlayerOfTheMatch[match.season] = {};
            seasonPlayerOfTheMatch[match.season][match.player_of_match] = 1;
        }
    });

    let seasonTopPlayerOfTheMatch = {};
    for(let playerOfTheMatch in seasonPlayerOfTheMatch){
        let max = 0;
        for(let key in seasonPlayerOfTheMatch[playerOfTheMatch]){ 
            if(Number(seasonPlayerOfTheMatch[playerOfTheMatch][key]) > Number(max)){
                max = Number(seasonPlayerOfTheMatch[playerOfTheMatch][key]);
            }
        }
        
        for(let key in seasonPlayerOfTheMatch[playerOfTheMatch]){ 
            console.log(key);
            if(Number(seasonPlayerOfTheMatch[playerOfTheMatch][key]) == max){
                if(seasonTopPlayerOfTheMatch[playerOfTheMatch]){
                    seasonTopPlayerOfTheMatch[playerOfTheMatch] = { name : key};
                }
                else{
                    seasonTopPlayerOfTheMatch[playerOfTheMatch] = {};
                    seasonTopPlayerOfTheMatch[playerOfTheMatch] = {name : key, };
                }
            }
        }
    }
    console.log(seasonTopPlayerOfTheMatch);
    console.log(seasonPlayerOfTheMatch);
    return seasonPlayerOfTheMatch;
}

module.exports = getseasonTopPlayerOfTheMatch;