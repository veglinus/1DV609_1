import Notes from "./notes";

export default class Chords extends Notes {
    constructor() {
        super();
    }

    getNotesForChord(input) {
        let startNote = input.slice(0, 1);
        if (input.length > 1) {
            let inputEnd = input.slice(-1);
            inputEnd = inputEnd.toLowerCase();

            if (inputEnd === "m") {
                return this.getMinorChord(startNote);
            }
        } else {
            return this.getMajorChord(startNote);
        }
    }

    getMajorChord(input) {
        let result = [];

        result.push(input);
        this.stepWhole();
        result.push(this.stepWhole());
        this.stepWhole();
        result.push(this.stepHalf());

        return result;
    }

    getMinorChord(input) {
        let result = [];

        result.push(input);
        this.stepWhole();
        result.push(this.stepHalf());
        /*
        this.stepWhole();
        result.push(this.stepWhole());
        */

        return result;
    }

}