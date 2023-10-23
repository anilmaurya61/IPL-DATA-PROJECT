async function readJsonFile(fileName) {
    try {
        const response = await fetch(`./output/${fileName}`);
        const data = await response.json();

        return data;
    } catch (err) {
        console.error(err);
    }
}

async function createChartMatchesPerYear(matchesPerYear) {
    const chart = Highcharts.chart('matches-per-year', {
        chart: {
            type: 'column',
            zoomType: 'xy',
        },
        title: {
            text: '1. Matches Per Year'
        },
        xAxis: {
            title:{
                text:'Seasons'
            },
            categories: Object.keys(matchesPerYear),
        },
        yAxis: {
            title: {
                text: 'No of Matches'
            }
        },
        series: [{
            name: 'Seasons',
            data: Object.values(matchesPerYear),
        }]
    });
}

async function createChartMatchesOnePerTeamPerYear(matchesOnePerTeamPerYear) {
    const years = Object.keys(matchesOnePerTeamPerYear);
    const allTeams = [];
  
    for (const year in matchesOnePerTeamPerYear) {
      for (const team in matchesOnePerTeamPerYear[year]) {
        if (!allTeams.includes(team)) {
          allTeams.push(team);
        }
      }
    }
  
    const transformedData = allTeams.map((teamName) => ({
      name: teamName,
      data: years.map((year) => (matchesOnePerTeamPerYear[year][teamName] || 0)),
    }));
  
    console.log(transformedData);

    Highcharts.chart('matches-one-per-team-per-year', {
        chart: {
            type: 'column',
            zoomType: 'xy',
        },
        title: {
            text: '2. Matches One Per Team Per Year',
        },
        xAxis: {
            title:{
                text:'Seasons'
            },
            categories: Object.keys(matchesOnePerTeamPerYear),
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Count'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: transformedData,
    });
}

async function createChartExtraRunConcededPerTeam(extraRunConcededPerTeam) {
    const chart = Highcharts.chart('extra-run-conceded-per-team-per-year', {
        chart: {
            type: 'column',
            zoomType: 'xy',
        },
        title: {
            text: '3. Extra Runs Conceded Per Team Per Year',
        },
        xAxis: {
            title:{
                text:'Team Names'
            },
            categories: Object.keys(extraRunConcededPerTeam),
        },
        yAxis: {
            title: {
                text: 'Extra Runs Conceded Per Team'
            }
        },
        series: [{
            name: 'Team Names',
            data: Object.values(extraRunConcededPerTeam),
        }]
    });
}

async function createChartTop10MostEconomicalBowlers(top10MostEconomicalBowlers) {
    const chart = Highcharts.chart('top-10-economical-bowlers', {
        chart: {
            type: 'column',
            zoomType: 'xy',
        },
        title: {
            text: '4. Top 10 Economical Bowlers 2015',
        },
        xAxis: {
            title:{
                text:'Bowler Names'
            },
            categories: Object.keys(top10MostEconomicalBowlers),
        },
        yAxis: {
            title: {
                text: 'Economy Rate'
            }
        },
        series: [{
            name: 'Bowler Names',
            data: Object.values(top10MostEconomicalBowlers),
        }]
    });
}


async function createChartTeamWonTheTossAndMatch(teamWonTheTossAndMatch) {
    const chart = Highcharts.chart('number-of-times-team-won-the-toss-and-match', {
        chart: {
            type: 'column',
            zoomType: 'xy',
        },
        title: {
            text: '5. Number of Times team Won the Toss and Won The Match',
        },
        xAxis: {
            title:{
                text:'Team Names'
            },
            categories: Object.keys(teamWonTheTossAndMatch),
        },
        yAxis: {
            title: {
                text: 'Count'
            }
        },
        series: [{
            name: 'Team Names',
            data: Object.values(teamWonTheTossAndMatch),
        }]
    });
}

async function createChartTopPlayerOfTheMatch(topPlayerOfTheMatch) {
    let PlayerOfTheMatchBySeason = {};
    for (let season in topPlayerOfTheMatch) {
        let players = topPlayerOfTheMatch[season];
        for (let i = 0; i < players.length; i++) {
            PlayerOfTheMatchBySeason[players[i]] = parseInt(season);
        }
    }
    Highcharts.chart('player-who-has-won-the-highest-number-of-Player-of-the-Match-awards', {
        chart: {
            type: 'column',
            zoomType: 'xy'
        },
        title: {
            text: '6. Player Who Has Won The Highest Number Of Player of The Match Awards',
        },
        xAxis: {
            title:{
                text:'Player Names'
            },
            categories: Object.keys(PlayerOfTheMatchBySeason)
        },
        yAxis: {
            min: 2000,
            title: {
                text: 'Season'
            }
        },
        series: [{
            name: 'Player Names',
            data: Object.values(PlayerOfTheMatchBySeason)
        }]
    });
}

async function createChartStrikeRatesOfBatsman(strikeRatesOfBatsman) {
    const years = Object.keys(strikeRatesOfBatsman);
    const allTeams = [];
  
    for (const year in strikeRatesOfBatsman) {
      for (const team in strikeRatesOfBatsman[year]) {
        if (!allTeams.includes(team)) {
          allTeams.push(team);
        }
      }
    }
  
    const transformedData = allTeams.map((teamName) => ({
      name: teamName,
      data: years.map((year) => (Number(strikeRatesOfBatsman[year][teamName]) || 0)),
    }));
    console.log(transformedData);
    Highcharts.chart('find-the-strike-rate-of-a-batsman-for-each-season', {
        chart: {
            type: 'bar',
            zoomType: 'xy'
        },
        title: {
            text: '7. Strike Rate Of a Batsman For Each Season',
        },
        xAxis: {
            categories: Object.keys(strikeRatesOfBatsman),
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Stike Rate of a Batsman'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: transformedData,
    });
}

async function createChartPlayerDismissedByBowler(playerDismissedByBowler) {
    let playerNames = playerDismissedByBowler.map((player) => {
        return player.dismissed + " - " + player.dismissedBy;
    })
    let count = playerDismissedByBowler.map((player) => player.count)
    const chart = Highcharts.chart('find-the-highest-number-of-times-one-player-has-been-dismissed-by-another-player', {
        chart: {
            type: 'column',
            zoomType: 'xy',
        },
        title: {
            text: '8. Highest number of times the player has been dismissed by another player',
        },
        xAxis: {
            categories: playerNames,
        },
        yAxis: {
            title: {
                text: 'Count'
            }
        },
        series: [{
            name: 'Player Dismissed - Dismissed by',
            data: count,
        }]
    });
}

async function createChartBowlerWithBestEconomyInSuperOvers(bowlerWithBestEconomyInSuperOvers) {
    var names = bowlerWithBestEconomyInSuperOvers.map(function (item) {
        return item.name;
    });

    var economyRates = bowlerWithBestEconomyInSuperOvers.map(function (item) {
        return item.economyRate;
    });
    const chart = Highcharts.chart('find-the-bowler-with-the-best-economy-in-super-overs', {
        chart: {
            type: 'column',
            zoomType: 'xy',
        },
        title: {
            text: '9. Bowler with the best economy in super Overs',
        },
        xAxis: {
            categories: [names],
        },
        yAxis: {
            title: {
                text: 'Economy Rates'
            }
        },
        series: [{
            name: 'Bowler Names',
            data: [economyRates]
        }]
    });
}

async function init() {
    const matchesPerYear = await readJsonFile('matches-per-year.json');
    createChartMatchesPerYear(matchesPerYear);
    const matchesOnePerTeamPerYear = await readJsonFile('matches-won-per-team-per-year.json');
    createChartMatchesOnePerTeamPerYear(matchesOnePerTeamPerYear);
    const extraRunConcededPerTeam = await readJsonFile('extra-run-conceded-per-team-2016.json');
    createChartExtraRunConcededPerTeam(extraRunConcededPerTeam);
    const top10MostEconomicalBowlers = await readJsonFile('top-10-economical-bowlers-year-2015.json');
    createChartTop10MostEconomicalBowlers(top10MostEconomicalBowlers);
    const teamWonTheTossAndMatch = await readJsonFile('number-of-times-team-won-the-toss-and-match.json');
    createChartTeamWonTheTossAndMatch(teamWonTheTossAndMatch);
    const topPlayerOfTheMatch = await readJsonFile('player-who-has-won-the-highest-number-of-Player-of-the-Match-awards.json');
    createChartTopPlayerOfTheMatch(topPlayerOfTheMatch);
    const playerDismissedByBowler = await readJsonFile('find-the-highest-number-of-times-one-player-has-been-dismissed-by-another-player.json');
    createChartPlayerDismissedByBowler(playerDismissedByBowler);
    const strikeRatesOfBatsman = await readJsonFile('find-the-strike-rate-of-a-batsman-for-each-season.json');
    createChartStrikeRatesOfBatsman(strikeRatesOfBatsman);
    const bowlerWithBestEconomyInSuperOvers = await readJsonFile('find-the-bowler-with-the-best-economy-in-super-overs.json');
    createChartBowlerWithBestEconomyInSuperOvers(bowlerWithBestEconomyInSuperOvers);
}

document.addEventListener('DOMContentLoaded', init);
