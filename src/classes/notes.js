export default class Notes {

    constructor() {
        this.index = 0;
        this.array = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    }

    setStartingNote(input) {
        let result = null;
        input = input.charAt(0).toUpperCase() + input.slice(1); // Sets first letter to uppercase

        if (input.length == 2) {
            let inputSliced = input.slice(0, 1);
            let inputEnd = input.slice(1, 2);
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

        this.index = result; // Sets index to correct starting note
        return this.index;
    }

    verifyIndex() {
        if (this.index > 11) {
            this.index = this.index % 12;
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
    getCurrentNote() {
        return this.array[this.index];
    }
}