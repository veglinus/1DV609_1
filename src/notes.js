export default class Notes {

    constructor() {
        this.index = 0;
        this.array = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    }

    setStartingNote(input) {
        let result = null;

        if (input.length == 2) {
            let inputSliced = input.slice(0, 1);
            let inputEnd = input.slice(-1);
            let offset = 0;
            
    
            // Compensates for sharps or flats
            if (inputEnd == "#") {
            offset++;
            } else if (inputEnd == "b") {
            offset--;
            }
    
            result = this.array.indexOf(inputSliced);
            result += offset;
        } else {
            result = this.array.indexOf(input);
        }

        if (result > 11) {
            result = result % 11;
        }

        this.index = result; // Sets index to correct starting note
        return this.index;
    }

    verifyIndex() {
        if (this.index > 11) {
            this.index = this.index % 11;
        }
        return;
    }

    stepWhole() {
        this.index = this.index + 2;
        this.verifyIndex();
        return this.array[this.index];
    }
    stepHalf() {
        this.index = this.index + 1;
        this.verifyIndex();
        return this.array[this.index];
    }
    getIndex() {
        return this.index;
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