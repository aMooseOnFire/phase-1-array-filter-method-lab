


function findMatching(drivers, name) {
    let names = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
    return names
}

function fuzzyMatch(drivers, letters) {
    let names = drivers.filter(driver => driver.startsWith(letters))
    return names
}

function matchName(drivers, driverName) {
    let names = drivers.filter(driver => driver.name === driverName)
    return names
}