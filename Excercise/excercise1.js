//1. Distance to Nearest Vowel
function checkVowel(array) {
    let vowel = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toLowerCase()
        if (vowel.indexOf(array[i]) > -1) {
            array.splice(i, 1, 0)
        }
    }
}

function checkNearestText(array) {
    for (let i = 0; i < array.length; i++) {
        let index1 = array.indexOf(0, i)
        if (index1 != 0) {
            array[i] = Math.abs(index1 - i)
        }
    }
    let revarray = []
    for (i = array.length - 1; i > -1; i--) {
        revarray.push(array[i])
    }
    array = []
    for (let i = 0; i < revarray.length; i++) {
        let index1 = revarray.indexOf(0, i)
        if (index1 > 0 && revarray[i] > index1 - i) {
            revarray[i] = Math.abs(index1 - i)
        }
    }
    for (i = revarray.length - 1; i > -1; i--) {
        array.push(revarray[i])
    }
    return array
}

function distanceToNearestVowel(strg) {
    let arr = strg.split("")
    checkVowel(arr)
    checkNearestText(arr)
    return checkNearestText(arr)
}
// console.log(distanceToNearestVowel("Abbcdabcd"))
//-------------------------------------------------------------------

//2. Odd Square Patch
function oddSquarePatch(inputarr) {
    let array = inputarr
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].map(x => {
            if (x % 2 == 0) {
                return x = 0
            }
            else {
                return x = 1
            }
        })
    }
    let count = 0
    let arrcheckj = []
    let flagroot = true
    while (flagroot) {
        let flagcheck = false
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i].map(x => {
                if (x == 1) {
                    return flagcheck = true
                }
            })
        }
        if (flagcheck) {
            count++
            flagcheck = false
        }
        else break

        for (i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array[i].length - 1; j++) {
                if (array[i][j] == 1 && array[i][j + 1] == 1 && array[i + 1][j] == 1 && array[i + 1][j + 1] == 1) {
                    arrcheckj.push(1)
                }
                else arrcheckj.push(0)
            }
            array[i] = arrcheckj
            arrcheckj = []
            // console.log(arrcheckj)
        }
        array.splice(array.length - 1, 1)
    }
    console.log(count)

}
const test2 = [
    [2, 3, 3, 9],
    [4, 5, 5, 7],
    [3, 5, 1, 7]
]

// oddSquarePatch(test2)
//-------------------------------------------------------------------
//3. Junction or Self?
function junctionOrSelf(num) {
    junction(num)
    if (junction(num).length == 0) {
        return console.log("Self")
    }
    else { console.log(junction(num)) }
}
function junction(num) {
    let res = []
    for (let i = 1; i < num; i++) {
        let numcheck = i
        let k = i
        while (k > 0) {
            numcheck += k % 10
            k = Math.floor(k / 10)
        }
        if (numcheck == num) {
            res.push(i)
        }
    }
    return res
}

//   junctionOrSelf (7)
//-------------------------------------------------------------------
// 4. Morse Code Decoded
let morseToDots = {
    ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F",
    "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..": "L",
    "--": "M", "-.": "N", "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R",
    "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X",
    "-.--": "Y", "--..": "Z", "-----": "0", ".----": "1", "..---": "2",
    "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7",
    "---..": "8", "----.": "9", "-.-.--": "!", "   ": " ", "..--..": "?",
    ".-.-.-": ".", ".----.": "\"", "---...": ":", "--..--": ", ", " ": ""
}

function decodeMorse(str) {
    let arr = str.split(" ")
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != "") {
            arr[i] = morseToDots[arr[i]]
        }
        else arr[i] = " "
    }
    let res = arr.join("")
    console.log(res)
}

//   decodeMorse ("-.-. .... .- .-.. .-.. . -. --. .")
//-------------------------------------------------------------------
// 5. Creating a Picture Frame
function getFrame(wid, hei, str) {
    let res = []
    let wide = str
    let wide2 = str
    let arrwid = []
    let arrhei = []
    let n = 0
    if (wid < 3) { return console.log('invalid') }
    while (n < wid - 1) {
        wide += str
        if (n == wid - 2) {
            wide2 += str
        }
        else wide2 += " "
        n++
    }
    arrwid.push(wide)
    arrhei.push(wide2)
    res.push(arrwid)
    for (let i = 1; i < hei - 1; i++) {
        res.push(arrhei)
    }
    res.push(arrwid)
    console.log(res)
}
//   getFrame(6,5,"@")
//-------------------------------------------------------------------