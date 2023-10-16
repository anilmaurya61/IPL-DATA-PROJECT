function getTopPlayerOfTheMatch(matches) {
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
    for (let season in seasonPlayerOfTheMatch) {
        let max = 0;
        for (let playerOfTheMatch in seasonPlayerOfTheMatch[season]) {
            if (Number(seasonPlayerOfTheMatch[season][playerOfTheMatch]) > Number(max)) {
                max = Number(seasonPlayerOfTheMatch[season][playerOfTheMatch]);
            }
        }

        for (let playerOfTheMatch in seasonPlayerOfTheMatch[season]) {
            if (Number(seasonPlayerOfTheMatch[season][playerOfTheMatch]) == max) {
                if (!seasonTopPlayerOfTheMatch[season]) {
                    seasonTopPlayerOfTheMatch[season] = []; 
                }
                seasonTopPlayerOfTheMatch[season].push(playerOfTheMatch); 
            }
        }
    }
    return seasonTopPlayerOfTheMatch;
}

module.exports = getTopPlayerOfTheMatch;