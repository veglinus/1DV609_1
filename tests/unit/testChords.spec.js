import { expect } from 'chai'

/*
import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home'
*/

import Chords from "../../src/chords.js";

it('Get notes of major chord', () => {
    let chords = new Chords();
    let result1 = chords.getNotesForChord("C");
    expect(result1).to.eql(["C", "E", "G"]);
})

it('Get notes of minor chord', () => {
    let chords = new Chords();
    let result2 = chords.getNotesForChord("Am");
    expect(result2).to.eql(["A", "C", "E"]);
})