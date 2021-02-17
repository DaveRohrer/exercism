// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

//import { concat } from "core-js/fn/array";

const TOTAL_NUMBER_OF_NAMES =
    26 * // A-Z
    26 * // A-Z
    10 * // 0-9
    10 * // 0-9
    10; // 0-9

const POSSIBLE_DIGITS = [
    26,
    26,
    10,
    10,
    10
]

export class Robot {
    constructor() {
        if(!Robot.initializedNameList){
            Robot._generateNames();
            Robot.initializedNameList = true;
        }
        
       // do {

        //} (while )
        const randomIndex = randNum(TOTAL_NUMBER_OF_NAMES);
        this._name = `${Robot.validNames[randomIndex]}`;
    }

    get name() {
        return this._name;
    }


    // Unique name management
    static validNames = [];
    static usedNames = [];
    static initializedNameList = false;
    static releaseNames() {
        Robot.usedNames = [];
    };
    static _generateNames(name) {

        //
        const characters = [[], [], [], [], []];
        for (let i = 0; i < 26; i++) {
            characters[0].push(String.fromCharCode(65 + i));
            characters[1].push(String.fromCharCode(65 + i));
            if (i < 10) {
                characters[2].push(String.fromCharCode(48 + i));
                characters[3].push(String.fromCharCode(48 + i));
                characters[4].push(String.fromCharCode(48 + i));
            }
        }

        // Create the list of all possible names from the
        for (let d1 = 0; d1 < 26; d1++) {
            for (let d2 = 0; d2 < 26; d2++) {
                for (let d3 = 0; d3 < 10; d3++) {
                    for (let d4 = 0; d4 < 10; d4++) {
                        for (let d5 = 0; d5 < 10; d5++) {
                            const nameToAdd = `${characters[0][d1]}${characters[1][d2]}${characters[2][d3]}${characters[3][d4]}${characters[4][d5]}`
                            Robot.validNames.push(nameToAdd);
                        }
                    }
                }
            }
        }
        // if (true) { //if we need to set up the bool array for the first time
        //     for (let d1 = 0; d1 < 26; d1++) {
        //         for (let d2 = 0; d2 < 26; d2++) {
        //             for (let d3 = 0; d3 < 10; d3++) {
        //                 for (let d4 = 0; d4 < 10; d4++) {
        //                     for (let d5 = 0; d5 < 10; d5++) {
                                
        //                         Robot.usedNames.push(false);
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }

        // Shuffle the names up really well
        for (let i = 0; i < TOTAL_NUMBER_OF_NAMES * 2; i++) {
            const swapA = randNum(Robot.validNames.length);
            const swapB = randNum(Robot.validNames.length);
            if (swapA !== swapB) {
                const tempName = Robot.validNames[swapA];
                Robot.validNames[swapA] = Robot.validNames[swapB];
                Robot.validNames[swapB] = tempName;
            }
        }
        console.log(Robot.validNames);
    }
}

function randNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
}



