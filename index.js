// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers,name){
    
  return drivers.filter(driver=>driver.toLowerCase()===name.toLowerCase())
}
console.log(findMatching(drivers,'Bobby'))
console.log(findMatching(drivers,'bobby'))
console.log(findMatching(drivers,'Susan'))


function fuzzyMatch(drivers,name){
    return drivers.filter(driver=>driver.toLowerCase().startsWith(name.toLowerCase()))
}
console.log(fuzzyMatch(drivers,'Sa'))
console.log(fuzzyMatch(drivers,'y'))
console.log(fuzzyMatch(drivers,'mm'))

function matchName(drivers,name){
    return drivers.filter(driver=>driver.name===name)
}
console.log(matchName(drivers,'Bobby'))