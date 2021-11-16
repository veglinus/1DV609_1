import { expect } from 'chai'
import Scales from "../../src/scales.js";

it('Get major scale', () => {

    let scales = new Scales();

    let result = scales.getMajorScale("C");
    expect(result).to.have.lengthOf(7);
    expect(result).to.eql(["C", "D", "E", "F", "G", "A", "B"]);

})