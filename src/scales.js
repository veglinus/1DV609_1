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
}