function getMatchesPerYear(matches){
    const matchesPerYear = {};

    matches.forEach((match) => {
        if (matchesPerYear.hasOwnProperty(match.season)) {
            matchesPerYear[match.season]++;
        } else {
            matchesPerYear[match.season] = 1;
        }
    });
        // console.log(matchesPerYear);
    return matchesPerYear;
}

module.exports = getMatchesPerYear;