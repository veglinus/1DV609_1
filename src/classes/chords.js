import Notes from "./notes";

export default class Chords extends Notes {
    constructor() {
        super();
    }

    getNotesForChord(input) {
        //let startNote = input.slice(0, 1);
        if (input.length > 1) {
            let inputEnd = input.slice(-1);
            inputEnd = inputEnd.toLowerCase();

            if (inputEnd === "m") {
                let inputNote = input.slice(0, 2);
                return this.getMinorChord(inputNote);
            } else {
                return this.getMajorChord(input);
            }
        } else {
            return this.getMajorChord(input);
        }
    }

    getMajorChord(input) {
        let result = [];

        this.setStartingNote(input);

        result.push(this.getCurrentNote());
        this.stepWhole();
        result.push(this.stepWhole());
        this.stepWhole();
        result.push(this.stepHalf());

        return result;
    }

    getMinorChord(input) {
        let result = [];

        this.setStartingNote(input);

        result.push(this.getCurrentNote());
        this.stepWhole();
        result.push(this.stepHalf());
        this.stepWhole();
        result.push(this.stepWhole());

        return result;
    }

}