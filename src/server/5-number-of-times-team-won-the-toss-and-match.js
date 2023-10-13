function getNumberOfTimesTeamWonTheTossAndMatch(matches){

    let numberOfTimesTeamWonTheTossAndMatch = [];
    matches.forEach((match) =>{
        if(match.toss_winner == match.winner) {
            if(numberOfTimesTeamWonTheTossAndMatch[match.toss_winner]){
                numberOfTimesTeamWonTheTossAndMatch[match.toss_winner]++;
            }else{
                numberOfTimesTeamWonTheTossAndMatch[match.toss_winner] = 1;
            }
        }
    })
    return numberOfTimesTeamWonTheTossAndMatch;
}

module.exports = numberOfTimesTeamWonTheTossAndMatch; 