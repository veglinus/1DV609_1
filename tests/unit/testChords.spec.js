import { expect } from 'chai'

/*
import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home'
*/

import Chords from "../../src/classes/chords.js";

it('Get notes of major chord', () => {
    let chords = new Chords();
    let result1 = chords.getNotesForChord("C");
    expect(result1).to.eql(["C3", "E3", "G3"]);
})


it('Get notes of minor chord', () => {
    let chords = new Chords();
    let result2 = chords.getNotesForChord("Am");
    expect(result2).to.eql(["A3", "C3", "E3"]);
})

it('Get notes of sharp major chord', () => {
    let chords = new Chords();
    let result1 = chords.getNotesForChord("F#");
    expect(result1).to.eql(["F#3", "A#3", "C#3"]);
})

it('Get notes of sharp minor chord', () => {
    let chords = new Chords();
    let result1 = chords.getNotesForChord("F#m");
    expect(result1).to.eql(["F#3", "A3", "C#3"]);
})