import { expect } from 'chai'

/*
import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home'
*/

import Notes from "../../src/notes.js";


it('Gets correct index from notes', () => {

    let notesObject = new Notes();

    let result1 = notesObject.setStartingNote("C#");
    expect(result1).to.equal(1);

    let result2 = notesObject.setStartingNote("B");
    expect(result2).to.equal(11);

})

it('Stepping whole steps in array', () => {

    let notesObject = new Notes();

    notesObject.setStartingNote("C#");
    notesObject.stepWhole;
    notesObject.stepHalf;

    let result1 = notesObject.getIndex();
    expect(result1).to.equal(5);

})

it('Get major scale', () => {

    let notesObject = new Notes();

    let result1 = notesObject.getMajorScale("C");
    expect(result1).to.have.lengthOf(7);
    expect(result1).to.eql(["C", "D", "E", "F", "G", "A", "B"]);

})