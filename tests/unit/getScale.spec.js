import { expect } from 'chai'

/*
import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home'
*/

import { getScaleStartingPosition } from "../../src/functions.js";


it('Gets correct index from notes', () => {

    getScaleStartingPosition("C").then(function(data) {
        expect(data).to.equal(0)
    });

    getScaleStartingPosition("B").then(function(data) {
        expect(data).to.equal(11)
    });

    getScaleStartingPosition("B").then(function(data) {
        expect(data).to.equal(11)
    });
})