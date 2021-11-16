import Notes from "./notes";

export default class Scales extends Notes {
    constructor() {
        super();
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