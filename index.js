// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    const newArray = array.slice(0,2)
    return newArray;
}

const returnLastTwoDrivers = function (array) {
    const lastArray = array.slice(2)
    return lastArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (number) {
    return function(fare) {
        return number * fare
    }
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

const selectDifferentDrivers = function (arrayOfDrivers, driversFunction) {
    if (driversFunction === returnFirstTwoDrivers)  {
        return arrayOfDrivers.slice(0,2)
    } else if (driversFunction === returnLastTwoDrivers) {
        return arrayOfDrivers.slice(2)
    }
    }