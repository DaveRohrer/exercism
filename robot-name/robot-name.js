// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

//import { concat } from "core-js/fn/array";

const TOTAL_NUMBER_OF_NAMES =
    26 * // A-Z
    26 * // A-Z
    10 * // 0-9
    10 * // 0-9
    10; // 0-9

export class Robot {

    constructor() {
        if (!Robot._initializedNameManagment) {
            Robot._initializeNameManagment();
        }
        this.reset();
    }

    get name() {
        return this._name;
    }

    reset() {
        this._name = Robot._nameBank[Robot._nextAvailableName];
        Robot._nextAvailableName++;
    }

    // Unique name management
    static _nameBank = [];
    static _nextAvailableName = 0;
    static _initializedNameManagment = false;

    static releaseNames() {
        Robot._nextAvailableName = 0;
    };

    static _initializeNameManagment() {
        Robot._createNameBank();
        Robot._shuffleNameBank();
        Robot._initializedNameManagment = true;
    }

    static _createNameBank() {
        const validCharacters = Robot._generateValidCharacers();
        for (let d1 = 0; d1 < 26; d1++) {
            for (let d2 = 0; d2 < 26; d2++) {
                for (let d3 = 0; d3 < 10; d3++) {
                    for (let d4 = 0; d4 < 10; d4++) {
                        for (let d5 = 0; d5 < 10; d5++) {
                            const nameToAdd = `${validCharacters[0][d1]}` +
                                `${validCharacters[1][d2]}${validCharacters[2][d3]}` +
                                `${validCharacters[3][d4]}${validCharacters[4][d5]}`;
                            Robot._nameBank.push(nameToAdd);
                        }
                    }
                }
            }
        }
    }

    static _generateValidCharacers() {
        const validCharacters = [[], [], [], [], []];
        for (let i = 0; i < 26; i++) {
            validCharacters[0].push(String.fromCharCode(65 + i));
            validCharacters[1].push(String.fromCharCode(65 + i));
            if (i < 10) {
                validCharacters[2].push(String.fromCharCode(48 + i));
                validCharacters[3].push(String.fromCharCode(48 + i));
                validCharacters[4].push(String.fromCharCode(48 + i));
            }
        }
        return validCharacters;
    }

    static _shuffleNameBank() {
        for (let i = 0; i < TOTAL_NUMBER_OF_NAMES * 2; i++) {
            const swapA = randNum(Robot._nameBank.length);
            const swapB = randNum(Robot._nameBank.length);
            const tempName = Robot._nameBank[swapA];
            Robot._nameBank[swapA] = Robot._nameBank[swapB];
            Robot._nameBank[swapB] = tempName;
        }
    }
}

function randNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
}