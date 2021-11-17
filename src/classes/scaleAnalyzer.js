import Scales from "./scales";

export default class ScaleAnalyzer extends Scales {
    constructor() {
        super();
    }

    findScaleFor(chords) {
        let returnvalue = [];

        chords.forEach(chord => {
            //console.log("For: " + chord)
            // Create a scale for the chord
            let scale = this.getScale(chord);
            //let oldScale = scale;
        
            // Change scale degrees into chords
            let oldScale = [...scale];
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
            let matches = 0;
            scale.forEach(element => {
                if (chords.includes(element)) {
                    matches++;
                }
            });
            //console.log("Matches: " + matches);

            if (matches === chords.length) {
                //console.log("Adding scale to result");

                returnvalue.push({
                    name : chord,
                    notes : oldScale
                });
            }
        });

        return returnvalue;
    }
}