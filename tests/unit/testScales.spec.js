import { expect } from 'chai'
import Scales from "../../src/scales.js";

it('Test major scale', () => {

    let scales = new Scales();

    let result = scales.getMajorScale("C");
    expect(result).to.have.lengthOf(7);
    expect(result).to.eql(["C", "D", "E", "F", "G", "A", "B"]);

})

it('Test minor scale', () => {

    let scales = new Scales();

    let result = scales.getMinorScale("A");
    expect(result).to.have.lengthOf(7);
    expect(result).to.eql(["A", "B", "C", "D", "E", "F", "G"]);

})