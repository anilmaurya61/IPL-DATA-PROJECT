const getMatchesPerYear = require('./src/server/1-matches-per-year.js');
const numOfMatchesWonPerTeamPerYear = require('./src/server/2-matches-won-per-team-per-year.js');
const csv = require('csv-parser');
const fs = require('fs');


    const results = [];
    fs.createReadStream('./src/data/matches.csv')
        .pipe(csv({}))
        .on('data', (data) => results.push(data))
        .on('end', () => {
            let data = getMatchesPerYear(results);
            const filePath = './src/public/output';
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true });
            }
            fs.writeFileSync(filePath + '/matches-per-year.json', JSON.stringify(data, null, 2));


            data = numOfMatchesWonPerTeamPerYear(results);
            console.log(data);
            fs.writeFileSync(filePath + '/matches-won-per-team-per-year.json', JSON.stringify(data, null, 2));



        });




