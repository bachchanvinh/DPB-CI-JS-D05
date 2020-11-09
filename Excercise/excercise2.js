// 6. Magic Sigil Generator
function sigilize(str) {
    str = str.toUpperCase()
    array = str.split("")
    let vowel = ["A", "E", "I", "O", "U"]
    for (let i = 0; i < array.length; i++) {
        if (array[i] == " ") {
            array.splice(i, 1)
            i--
        }
        for (let j = 0; j < vowel.length; j++) {
            if (array[i] == vowel[j]) {
                array.splice(i, 1)
                i--
            }
        }
        if (array.indexOf(array[i], i + 1) > -1) {
            array.splice(i, 1)
            i--
        }
    }
    str = array.join("")
    console.log(str)
}
//   sigilize('I have a job I enjoy and it pays well')

//-------------------------------------------------------------------------
//7. Digital Egomania: the Self-Describing Numbers
function isSelfDescribing(num) {
    console.log("Number:", num)
    if (num.toString().length % 2 != 0) { return console.log("Odd quantity of digits, it can't be splitted") }
    let array = []
    for (let i = num.toString().length - 1; i > -1; i--) {
        let numsplit
        numsplit = num % 10
        array.splice(0, 0, numsplit)
        num = Math.floor(num / 10)
    }
    let count = 1
    let objCount = {}
    let flag = false
    for (i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (objCount[array[i]] == undefined) {
                if (array[i] == array[j]) {
                    count++
                    flag = true
                }
            }
        }
        if (flag) {
            objCount[array[i]] = count
        }
        count = 1
        flag = false
    }
    let check = true
    for (i = 0; i < array.length; i += 2) {
        if (objCount[array[i + 1]] == undefined) {
            if (array[i] != 1) { check = false }
        }
        else {
            if (objCount[array[i + 1]] != array[i]) {
                check = false
            }
        }
    }
    if (check) { console.log(true) }
    else console.log(false)
}
//   isSelfDescribing (10123331)

//-------------------------------------------------------------------------
//8. Check Magic Square
function isMagicSquare(array) {
    let numcheck = 0
    for (let i = 0; i < array[0].length; i++) {
        numcheck += array[0][i]
    }
    let numsum = 0
    //horizontal
    for (i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            numsum += array[i][j]
        }
        if (numsum != numcheck) { return console.log(false) }
        numsum = 0
    }
    //vertical
    for (i = 0; i < array[0].length; i++) {
        for (let j = 0; j < array.length; j++) {
            numsum += array[j][i]
        }
        if (numsum != numcheck) { return console.log(false) }
        numsum = 0
    }
    //cross1
    for (i = 0; i < array.length; i++) {
        numsum += array[i][i]
    }
    if (numsum != numcheck) { return console.log(false) }
    numsum = 0
    //cross2
    let j = array[0].length - 1
    for (i = 0; i < array.length; i++) {
        numsum += array[i][j]
        j--
    }
    if (numsum != numcheck) { return console.log(false) }

    return console.log(true)
}
let arrayex = [
    [16, 3, 2, 13],
    [5, 10, 11, 8],
    [9, 6, 7, 12],
    [4, 15, 14, 1],
]
// isMagicSquare(arrayex)

//-------------------------------------------------------------------------
// 9. The Fiscal Code
const months = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "H",
    7: "L",
    8: "M",
    9: "P",
    10: "R",
    11: "S",
    12: "T"
}
const vowel = ["A", "E", "I", "O", "U"]
let inForm = {
    name: "Mickey",
    surname: "Mouse",
    gender: "M",
    dob: "16/1/1928"
}
function fiscalCode(obj) {
    return surName(convertToLetter(obj.surname)) + name(convertToLetter(obj.name)) + yOfBirth(obj.dob) + months[letterMoth(obj.dob)] + gender(obj.gender, obj.dob)
}
function convertToLetter(value) {
    value = value.toUpperCase()
    let vowelValue = []
    let arr1 = []
    for (let i = 0; i < value.length; i++) {
        if (vowel.indexOf(value[i]) == -1) {
            arr1.push(value[i])
        }
        else if (vowel.indexOf(value[i]) > -1) {
            vowelValue.push(value[i])
        }
    }
    return {
        "arr1": arr1,
        "vowelValue": vowelValue
    }
}

function surName(obj) {
    if (obj.arr1.length > 2) {
        return obj.arr1[0] + obj.arr1[1] + obj.arr1[2]
    }
    else if (obj.arr1.length == 2) {
        return obj.arr1[0] + obj.arr1[1] + obj.vowelValue[0]
    }
    return obj.arr1[0] + obj.vowelValue[0] + "X"
}

function name(obj) {
    if (obj.arr1.length > 3) {
        return obj.arr1[0] + obj.arr1[2] + obj.arr1[3]
    }
    else if (obj.arr1.length == 3) {
        return obj.arr1[0] + obj.arr1[1] + obj.arr1[2]
    }
    else if (obj.arr1.length == 2) {
        return obj.arr1[0] + obj.arr1[1] + obj.vowelValue[0]
    }
    return obj.arr1[0] + obj.vowelValue[0] + "X"
}
function yOfBirth(value) {
    return value[value.length - 2] + value[value.length - 1]
}

function letterMoth(value) {
    for (let i = 0; i < value.length; i++) {
        if (value[i] == "/" && value[i + 2] == "/") {
            return value[i + 1]
        }
        else if (value[i] == "/" && value[i + 3] == "/") {
            return value[i + 1] + value[i + 2]
        }
    }
}

function gender(gender, dob) {
    let bd = ""
    for (let i = 0; i < 3; i++) {
        console.log(i)
        if (dob[2] == "/") {
            bd = bd + dob[0] + dob[1]
            break
        }
        else if (dob[1] == "/") {
            bd = bd + dob[0]
            break
        }
    }
    if (gender == "M") {
        if (bd < 10) {
            return "0" + bd
        }
        else return bd
    }
    else return Number(bd) + 40
}
// console.log (fiscalCode(inForm))

//-------------------------------------------------------------------------

//10. Number of Boomerangs
let array = [9, 5, 9, 5, 1, 1, 1]
function countBoomerangs(arr) {
    let count = 0
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] == arr[i + 2] && arr[i] != arr[i + 1]) {
            count++
        }
    }
    console.log(count)
}
// countBoomerangs(array)