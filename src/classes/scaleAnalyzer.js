import Scales from "./scales";

export default class ScaleAnalyzer extends Scales {
    constructor() {
        super();
        this.returnvalue = [];
        this.chords;

        this.commonChords = [];
    }

    findScaleFor(chords) {
        this.returnvalue = [];
        this.chords = chords;

        chords.forEach(chord => {
            this.findMajorMinorScales(chord);
        });
        //console.log("Checking for more scales: " + this.commonChords);
        
        this.findAllScales(this.commonChords);
        return this.returnvalue;
    }

    findMajorMinorScales(chord) {
        let scale = this.getScale(chord);
        let oldScale = [...scale]; // Change scale degrees into chords
        if (chord.slice(-1) === "m") {
            // Minor scale
            scale[0] = scale[0] + "m";
            scale[1] = scale[1] + "m";
            scale[3] = scale[3] + "m";
            scale[4] = scale[4] + "m";
        } else {
            // Major scale
            scale[1] = scale[1] + "m";
            scale[2] = scale[2] + "m";
            scale[5] = scale[5] + "m";
            scale[6] = scale[6] + "m";
        }

        //console.log(scale);
        
        // Check if the array of chords is similar to "chords"
        let matches = this.computeMatches(scale);

        //console.log("Matches: " + matches);

        if (matches === this.chords.length) {
            //console.log("Adding " + chord + " scale to result");
            this.pushCommonChords(scale);

            this.returnvalue.push({
                name : chord,
                notes : oldScale
            });
        }
    }

    comparePentatonicScale(chord) {
        let scale = this.getPentatonicScale(chord);
        let oldScale = [...scale]; // Change scale degrees into chords

        if (chord.slice(-1) === "m") {
            // Minor scale
            scale[0] = scale[0] + "m";
            scale[2] = scale[2] + "m";
            scale[3] = scale[3] + "m";
        } else {
            // Major scale
            scale[1] = scale[1] + "m";
            scale[2] = scale[2] + "m";
            scale[4] = scale[4] + "m";
        }

        console.log(scale);
        
        // Check if the array of chords is similar to "chords"
        let matches = this.computeMatches(scale);

        console.log("Matches: " + matches);
        // chord === scale[0]
        if (matches === this.chords.length || matches >= 2) {
            console.log("Adding " + chord + " pentatonic scale to result");
            this.pushCommonChords(scale);

            this.returnvalue.push({
                name : chord + " pentatonic",
                notes : oldScale
            });
        }
    }

    computeMatches(scale) {
        let matches = 0;
        scale.forEach(element => {
            if (this.chords.includes(element)) {
                matches++;
            }
        });
        return matches;
    }

    pushCommonChords(chordArray) {
        chordArray.forEach(chord => {
            if (!this.commonChords.includes(chord)) {
                this.commonChords.push(chord);
            }
        });
    }

    findAllScales(commonChords) {
        commonChords.forEach(chord => {
            this.comparePentatonicScale(chord);
        });
    }
}