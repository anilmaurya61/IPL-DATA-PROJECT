const getMatchesPerYear = require('./src/server/1-matches-per-year.js')
const numOfMatchesWonPerTeamPerYear = require('./src/server/2-matches-won-per-team-per-year.js')
const calExtraRunConceded = require('./src/server/3-extra-run-conceded-per-team-2016.js')
const top10MostEconomicalBowlers = require('./src/server/4-Top-10-economical-bowlers-year-2015.js')
const getNumberOfTimesTeamWonTheTossAndMatch = require('./src/server/5-number-of-times-team-won-the-toss-and-match.js')
const getTopPlayerOfTheMatch = require('./src/server/6-player-who-has-won-the-highest-number-of-Player-of-the-Match-awards .js')
const calculateStrikeRatePerSeason = require('./src/server/7-find-the-strike-rate-of-a-batsman-for-each-season.js')
const findBestEconomySuperOverBowler = require('./src/server/9-find-the-bowler-with-the-best-economy-in-super-overs.js')
const findHighestDismissals = require('./src/server/8-find-the-highest-number-of-times-one-player-has-been-dismissed-by-another-player.js')
const getMatchIdByYear = require('./src/utils/Helpers.js')
const csv = require('csv-parser');
const fs = require('fs');


const matches = [];
fs.createReadStream('./src/data/matches.csv')
    .pipe(csv({}))
    .on('data', (data) => matches.push(data))
    .on('end', () => {
        
        const filePath = './src/public/output';
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath, { recursive: true });
        }

        // 1-matches-per-year
        let data = getMatchesPerYear(matches);
        fs.writeFileSync(filePath + '/matches-per-year.json', JSON.stringify(data, null, 2));

        // 2-matches-won-per-team-per-year
        data = numOfMatchesWonPerTeamPerYear(matches);
        fs.writeFileSync(filePath + '/matches-won-per-team-per-year.json', JSON.stringify(data, null, 2));

        // 5-number-of-times-team-won-the-toss-and-match
        data = getNumberOfTimesTeamWonTheTossAndMatch(matches);
        fs.writeFileSync(filePath + '/number-of-times-team-won-the-toss-and-match.json', JSON.stringify(data, null, 2));

        // 6-player-who-has-won-the-highest-number-of-Player-of-the-Match-awards 
        data = getTopPlayerOfTheMatch(matches);
        fs.writeFileSync(filePath + '/player-who-has-won-the-highest-number-of-Player-of-the-Match-awards.json', JSON.stringify(data, null, 2));

        const deliveries = [];
        fs.createReadStream('./src/data/deliveries.csv')
            .pipe(csv({}))
            .on('data', (data) => deliveries.push(data))
            .on('end', () => {

                // 3-extra-run-conceded-per-team-2016
                const extraRunConceded = calExtraRunConceded(deliveries, matches);
                fs.writeFileSync(filePath + '/extra-run-conceded-per-team-2016.json', JSON.stringify(extraRunConceded, null, 2));

                // 4-Top-10-economical-bowlers-year-2015
                const economicalBowler= top10MostEconomicalBowlers(deliveries, matches);
                fs.writeFileSync(filePath + '/top-10-economical-bowlers-year-2015.json', JSON.stringify(economicalBowler, null, 2));
                
                // 7-find-the-strike-rate-of-a-batsman-for-each-season
                const strikeRatePerSeason = calculateStrikeRatePerSeason(deliveries, matches);
                fs.writeFileSync(filePath + '/find-the-strike-rate-of-a-batsman-for-each-season.json', JSON.stringify(strikeRatePerSeason, null, 2));

                // 8-find-the-highest-number-of-times-one-player-has-been-dismissed-by-another-player
                const highestDismissals = findHighestDismissals(deliveries);
                fs.writeFileSync(filePath + '/find-the-highest-number-of-times-one-player-has-been-dismissed-by-another-player.json', JSON.stringify(highestDismissals, null, 2));

                // 9-find-the-bowler-with-the-best-economy-in-super-overs
                const bestEconomySuperOverBowler = findBestEconomySuperOverBowler(deliveries);
                fs.writeFileSync(filePath + '/find-the-bowler-with-the-best-economy-in-super-overs.json', JSON.stringify(bestEconomySuperOverBowler, null, 2));
            });
    });

