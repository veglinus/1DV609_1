import { expect } from 'chai'
import ScalesAnalyzer from "../../src/classes/scaleAnalyzer.js";

it('Find major, minor and pentatonic scales from chords', () => {
    let scales = new ScalesAnalyzer();

    let result = scales.findScaleFor(["Am", "F", "C", "G"]);

    expect(result).to.eql(
        [
            {
                "name" : "Am",
                "notes" : ["A", "B", "C", "D", "E", "F", "G"]
            },
            {
                "name" : "C",
                "notes" : ["C", "D", "E", "F", "G", "A", "B"]
            },
            {
                "name" : "Am pentatonic",
                "notes" : ["A", "C", "D", "E", "G"]
            },
            {
                "name" : "C pentatonic",
                "notes" : ["C", "D", "E", "G", "A"]
            },
            {
                "name" : "Dm pentatonic",
                "notes" : ["D", "F", "G", "A", "C"]
            },
            {
                "name" : "Em pentatonic",
                "notes" : ["E", "G", "A", "B", "D"]
            },
            {
                "name" : "F pentatonic",
                "notes" : ["F", "G", "A", "C", "D"]
            },
            {
                "name" : "G pentatonic",
                "notes" : ["G", "A", "B", "D", "E"]
            }
        ]
    );

})
