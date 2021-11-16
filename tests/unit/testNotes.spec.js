import { expect } from 'chai'

/*
import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home'
*/

import Notes from "../../src/classes/notes.js";

it('Gets correct index from notes', () => {

    let notesObject = new Notes();

    let result1 = notesObject.setStartingNote("C#");
    expect(result1).to.equal(1);

    let result2 = notesObject.setStartingNote("B");
    expect(result2).to.equal(11);

})

it('Stepping whole steps in array', () => {

    let obj = new Notes();

    obj.setStartingNote("C");
    obj.stepWhole();
    obj.stepHalf();

    let resultIndex = obj.getIndex();
    expect(resultIndex).to.equal(3);

})

it('Wrapping around of index', () => {

    let obj = new Notes();

    obj.setStartingNote("B");
    obj.stepHalf();
    let resultIndex = obj.getIndex();
    expect(resultIndex).to.equal(0);

})

it("Wrapping around of index, larger", () => {
    let obj2 = new Notes();
    obj2.setStartingNote("A#");
    obj2.stepWhole();
    obj2.stepWhole();
    obj2.stepWhole();
    obj2.stepWhole();
    obj2.stepWhole();

    obj2.stepWhole();
    obj2.stepWhole();
    obj2.stepWhole();

    let result2 = obj2.getIndex();
    expect(result2).to.equal(2);
})