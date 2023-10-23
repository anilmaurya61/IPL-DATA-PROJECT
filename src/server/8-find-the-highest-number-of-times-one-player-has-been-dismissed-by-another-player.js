function getDismissalRecords(deliveries) {
    const dismissalRecords = [];
    deliveries.forEach((deliver) => {
        if (deliver.player_dismissed) {
            dismissalRecords.push({ 'dismissedBy': deliver.bowler, 'dismissed': deliver.player_dismissed })
        }
    });
    return dismissalRecords;
}

function calculateDismissalsCount(dismissalRecords) {
    const dismissalsCount = {};

    dismissalRecords.forEach(record => {
        const { dismissed, dismissedBy } = record;

        if (!dismissalsCount[dismissedBy]) {
            dismissalsCount[dismissedBy] = {};
        }

        if (!dismissalsCount[dismissedBy][dismissed]) {
            dismissalsCount[dismissedBy][dismissed] = 1;
        } else {
            dismissalsCount[dismissedBy][dismissed]++;
        }
    });
    return dismissalsCount;
}

function findHighestDismissals(deliveries) {
    const dismissalRecords = getDismissalRecords(deliveries);
    const dismissalsCount = calculateDismissalsCount(dismissalRecords);
    
    let maxDismissals = 0;
    let highestDismissals = [];
  
    for (const dismissedBy in dismissalsCount) {
      for (const dismissed in dismissalsCount[dismissedBy]) {
        const count = dismissalsCount[dismissedBy][dismissed];
  
        if (count > maxDismissals) {
          maxDismissals = count;
          highestDismissals = [{ dismissedBy, dismissed, count }];
        }else if(count == maxDismissals){
            highestDismissals.push({ dismissedBy, dismissed, count})
        }
      }
    }
    return highestDismissals;
}

module.exports = findHighestDismissals;