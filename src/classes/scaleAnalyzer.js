/* eslint-disable no-dupe-class-members */

import Scales from "./scales";

export default class ScaleAnalyzer extends Scales {
    constructor() {
        super();
        this.returnvalue = [];
        this.chords;

        this.commonChords = [];
        this.ambiguity = 5;
    }

    findScaleFor(chords) {
        this.returnvalue = [];
        this.chords = chords;

        /*
        chords.forEach(chord => {
            this.#compare(chord, false);
        });
        this.#findAllScales(this.commonChords);

        if (this.returnvalue.length === 0) {
            console.log("No results, ambigious");
            this.ambiguity--;
            chords.forEach(chord => {
                this.#compare(chord, false);
            });
            this.#findAllScales(this.commonChords);
        }*/

        do {
            this.ambiguity--;
            console.log("Ambiguity: " + this.ambiguity)
            chords.forEach(chord => {
                this.#compare(chord, false);
            });
            this.#findAllScales(this.commonChords);
            
        } while (this.returnvalue.length === 0);

        return this.returnvalue;
    }

    #compare(chord, pentatonic) {
        let scale;
        if (pentatonic) {
            scale = this.getPentatonicScale(chord);
        } else {
            scale = this.getScale(chord);
        }
        let oldScale = [...scale];
        let scaleChords = this.#convertScaleToChords(chord, scale);
        let matches = this.#computeMatches(scaleChords);

        if (pentatonic) {
            if (matches >= 2) {
                this.#pushCommonChords(scaleChords);
                let newData = {
                name : chord + " pentatonic",
                notes : oldScale
                };
                if (!this.returnvalue.find(key => key.name === chord + " pentatonic")) {
                    this.returnvalue.push(newData);
                }
            }
        } else {
            //console.log(matches);
            if (matches === this.ambiguity) {
                console.log(chord + " matches: " + matches);
                this.#pushCommonChords(scaleChords);
                let newData = {
                    name : chord,
                    notes : oldScale
                };
                if (!this.returnvalue.find(key => key.name === chord)) {
                    this.returnvalue.push(newData);
                }
                
            }
        }


    }

    #convertScaleToChords(chord, scale) {

        if (scale.length === 7) { // Major or minor scale
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
        } else if (scale.length === 5) { // Pentatonic scale
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
        }

        return scale;
    }

    #computeMatches(scale) {
        let matches = 0;
        scale.forEach(element => {
            if (this.chords.includes(element)) {
                matches++;
            }
        });
        return matches;
    }

    #pushCommonChords(chordArray) {
        chordArray.forEach(chord => {
            if (!this.commonChords.includes(chord)) {
                this.commonChords.push(chord);
            }
        });
    }

    #findAllScales(commonChords) {
        console.log("Common chords: " + commonChords);
        commonChords.forEach(chord => {
            this.#compare(chord, true);
        });
    }
}