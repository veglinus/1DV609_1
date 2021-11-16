import { expect } from 'chai'
import Scales from "../../src/classes/scales.js";

let aMinorScale = ["A", "B", "C", "D", "E", "F", "G"];
let cMajorScale = ["C", "D", "E", "F", "G", "A", "B"]

it('Test major scale', () => {
    let scales = new Scales();
    let result = scales.getMajorScale("C");
    expect(result).to.have.lengthOf(7);
    expect(result).to.eql(cMajorScale);

})

it('Test minor scale', () => {
    let scales = new Scales();
    let result = scales.getMinorScale("A");
    expect(result).to.have.lengthOf(7);
    expect(result).to.eql(aMinorScale);

})

it('Test major pentatonic scale', () => {
    let scales = new Scales();
    let result = scales.getMajorPentatonicScale("C");
    expect(result).to.have.lengthOf(5);
    expect(result).to.eql(["C", "D", "E", "G", "A"]);

})

it('Test minor pentatonic scale', () => {
    let scales = new Scales();
    let result = scales.getMinorPentatonicScale("A");
    expect(result).to.have.lengthOf(5);
    expect(result).to.eql(["A", "C", "D", "E", "G"]);
})

it("Test getScale", () => {
    let scales = new Scales();

    let result = scales.getScale("Am");
    expect(result).to.eql(aMinorScale);

    let result2 = scales.getScale("C");
    expect(result2).to.eql(cMajorScale);
});