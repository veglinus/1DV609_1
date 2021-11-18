import Notes from "./notes";

export default class Scales extends Notes {
    constructor() {
        super();
    }

    getScale(input) {
        //let startNote = input.slice(0, 1);
        if (input.length > 1) {
            let inputEnd = input.slice(-1);
            inputEnd = inputEnd.toLowerCase();

            if (inputEnd === "m") {
                let expectFlatorSharp = input.slice(1, 2);
                if (expectFlatorSharp === "#" || expectFlatorSharp === "b") {
                    return this.getMinorScale(input.slice(0, 2));
                } else {
                    return this.getMinorScale(input.slice(0, 1));
                }
                
            } else {
                return this.getMajorScale(input);
            }
        } else {
            return this.getMajorScale(input);
        }
    }

    getPentatonicScale(input) {
        //let startNote = input.slice(0, 1);
        if (input.length > 1) {
            let inputEnd = input.slice(-1);
            inputEnd = inputEnd.toLowerCase();

            if (inputEnd === "m") {
                let expectFlatorSharp = input.slice(1, 2);
                if (expectFlatorSharp === "#" || expectFlatorSharp === "b") {
                    return this.getMinorPentatonicScale(input.slice(0, 2));
                } else {
                    return this.getMinorPentatonicScale(input.slice(0, 1));
                }
                
            } else {
                return this.getMajorPentatonicScale(input);
            }
        } else {
            return this.getMajorPentatonicScale(input);
        }
    }

    getMajorScale(input) {
        let result = [];
        this.setStartingNote(input);

        // C major example
        result.push(input); // C
        result.push(this.stepWhole()); // D
        result.push(this.stepWhole()); // E
        result.push(this.stepHalf()); // F
        result.push(this.stepWhole()); // G
        result.push(this.stepWhole()); // A
        result.push(this.stepWhole()); // B
        return result;
    }

    getMinorScale(input) {
        let result = [];
        this.setStartingNote(input);

        // A minor example
        result.push(input); // A
        result.push(this.stepWhole()); // B
        result.push(this.stepHalf()); // C
        result.push(this.stepWhole()); // D
        result.push(this.stepWhole()); // E
        result.push(this.stepHalf()); // F
        result.push(this.stepWhole()); // G
        return result;
    }

    getMinorPentatonicScale(input) {
        let result = [];
        this.setStartingNote(input);

        // A minor example
        result.push(input); // A
        this.stepWhole(); // B
        result.push(this.stepHalf()); // C
        result.push(this.stepWhole()); // D
        result.push(this.stepWhole()); // E
        this.stepHalf(); // F
        result.push(this.stepWhole()); // G
        return result;
    }

    getMajorPentatonicScale(input) {
        let result = [];
        this.setStartingNote(input);

        // C major example
        result.push(input); // C
        result.push(this.stepWhole()); // D
        result.push(this.stepWhole()); // E
        this.stepHalf();
        result.push(this.stepWhole()); // G
        result.push(this.stepWhole()); // A
        return result;
    }
}