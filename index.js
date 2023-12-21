let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    const lowerString = string.toLowerCase();
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === lowerString
    })
}
console.log(findMatching(drivers, 'Sammy'));

function fuzzyMatch(drivers, query) {
    return drivers.filter(function(driver) {
        return driver.startsWith(query)
    })
}
console.log(fuzzyMatch(drivers, 'Sa'));

drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(drivers, string) {
    let matchDriver = [];
    for (let driver of drivers) {
        if (driver.name === string) {
            matchDriver.push(driver);
        }
    }
    return matchDriver;
}
console.log(matchName(drivers, 'Bobby'));