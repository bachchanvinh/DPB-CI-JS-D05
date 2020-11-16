
//6. Digitaldrome
function digitaldrome(num) {
    let isSequence = true
    let array = num.toString().split("")
    let arraycheck = []
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < array[i + 1]) {
            arraycheck.push(true)
        }
        else if (array[i] == array[i + 1]) {
            arraycheck.push("equal")
        }
        else arraycheck.push(false)
    }
    if (arraycheck.indexOf(false) > -1) {
        isSequence = false
    }
    if (isSequence) {
        if (arraycheck.indexOf(true) == -1) {
            return 'Repdrome1'
        }
        else if (arraycheck.indexOf("equal") > -1) {
            return "Plaindrome"
        }
        return "Metadrome"
    }

    else {
        isSequence = true
        arraycheck = []
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                arraycheck.push(true)
            }
            else if (array[i] == array[i + 1]) {
                arraycheck.push("equal")
            }
            else arraycheck.push(false)
        }
        if (arraycheck.indexOf(false) > -1) {
            return "Nondrome"
        }
        if (isSequence) {
            if (arraycheck.indexOf(true) == -1) {
                return 'Repdrome1'
            }
            else if (arraycheck.indexOf("equal") > -1) {
                return "Nialpdrome"
            }
            return "Katadrome"
        }
    }

}


//   console.log(digitaldrome(54323))
//-------------------------------------------------------------------------------------------

//7.Poker Flush?  
function checkFlush(onboard, onhand) {
    let abbboard = []
    let abbhand = []
    abb(onboard, 5, abbboard)
    abb(onhand, 2, abbhand)
    let count = 0
    let flag = false
    for (let i = 0; i < 2; i++) {
        if (abbhand[i] === abbhand[i + 1]) {
            count++
            i++
        }
        for (let j = 0; j < 5; j++) {
            if (abbhand[i] === abbboard[j]) {
                count++
            }
        }
        if (count >= 4) { return true }
        count = 0

    }
    return false
}

function abb(array, length, newarray) {
    for (let i = 0; i < length; i++) {
        newarray.push(array[i][array[i].length - 1])
    }
}

//   console.log(checkFlush(["3_D", "10_D", "10_D", "10_D", "10_S"], ["3_D", "4_D"]))

//-------------------------------------------------------------------------------------------

//8 Dice Gambling
function rolls(array) {
    let res = [array[0]]
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] == 6) {
            res.push(array[i] * 2)
        }
        else if (array[i - 1] == 1) {
            res.push(0)
        }
        else res.push(array[i])
    }
    let result = 0
    for (i = 0; i < res.length; i++) {
        result += res[i]
    }
    return result
}
//   console.log(rolls([6, 1, 1,6,1,1,1]))
//-------------------------------------------------------------------------------------------
//10 Sexagenary Cycle

const stem = ["Wood", "Wood", "Fire", "Fire", "Earth", "Earth", "Metal", "Metal", "Water", "Water"]

const branch = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep", "Monkey", "Rooster", "Dog", "Pig"]
function sexagenary(yr) {
    let check = yr - 1984
    console.log(res(check, 10, stem) + " " + res(check, 12, branch))
}

function res(check, length, data) {
    let ste = check % length
    if (ste >= 0) {
        return data[ste]
    }
    else return data[length + ste]
}

//   sexagenary (1974)