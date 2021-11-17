import { expect } from 'chai'
import ScalesAnalyzer from "../../src/classes/scaleAnalyzer.js";

it('Find a scale from chords', () => {
    let scales = new ScalesAnalyzer();

    let result = scales.findScaleFor(["Am", "F", "C", "G"]);

    expect(result).to.eql(["Am", "Bm", "C", "Dm", "Em", "F", "G"]);

})
