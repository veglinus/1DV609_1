<template>
  <div class="home">
    <h1>1DV609 - Assignemnt 1 Part 2</h1>

    <p id="error" v-if="error">{{error}}</p>

    <!--
    <label for="note">Insert a chord to get the relevant scale:</label>
    <input type="text" name="note" id="note" v-model="note"> 

    <br><br>
    <button v-on:click="getData(note)">Get scale</button>-->

    <input type="text" name="chord1" id="chord1" v-model="chord1">
    <input type="text" name="chord2" id="chord2" v-model="chord2">
    <input type="text" name="chord3" id="chord3" v-model="chord3">
    <input type="text" name="chord4" id="chord4" v-model="chord4">


    <input type="number" name="bpm" id="bpm" v-model="bpm">

    <br><br>
    <ul id="notes" v-if="currentScale">
      <li v-for="item in currentScale" :key="item">{{item}}</li>
    </ul>


    <br><br>
    <button v-on:click="play()">PLAY</button>
    <button v-on:click="stop()">STOP</button>

  </div>
</template>

<script>
import Chords from "../classes/chords.js";
import Scales from "../classes/scales.js";
import * as Tone from 'tone';

const kick = new Tone.Player("https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/kick.mp3").toDestination();
const snare = new Tone.Player("https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/snare.mp3").toDestination();
const hihat =  new Tone.Player("https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/hh.mp3").toDestination();
const polySynth = new Tone.PolySynth().toDestination();

let seq = new Tone.Sequence(function(time, idx) {
  hihat.start();

  if ([0, 4, 8, 12].indexOf(idx) >= 0) {
    kick.start();
  }
  if ([2, 6, 10, 14].indexOf(idx) >= 0) {
    snare.start();
  }

  if (idx == 0) {
    polySynth.triggerAttackRelease(["C3", "E3", "G3"], "4n");
  }
  if (idx == 4) {
    polySynth.triggerAttackRelease(["G3", "B3", "D3"], "4n");
  }
  if (idx == 8) {
    polySynth.triggerAttackRelease(["A3", "C3", "E3"], "4n");
  }
  if (idx == 12) {
    polySynth.triggerAttackRelease(["F3", "A3", "C3"], "4n");
  }


}, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], "8n");

export default {
  created () {
    this.prepare()
  },
  name: 'Home',
    data: function() {
        return {
            error: "",
            note: "",
            bpm: 120,
            currentScale: "",
            seq: null,
            chord1: null,
            chord2: null,
            chord3: null,
            chord4: null,
            chordArrray: [],
        }
    },
    methods: {
      prepare: function() {
        console.log("test");
        const context = new Tone.Context({ latencyHint: "interactive" });
        Tone.setContext(context);
      },

      play: function() {
        let chords = new Chords();
        this.chordArrray.push(chords.getNotesForChord(this.chord1));
        this.chordArrray.push(chords.getNotesForChord(this.chord2));
        this.chordArrray.push(chords.getNotesForChord(this.chord3));
        this.chordArrray.push(chords.getNotesForChord(this.chord4));

        console.log(this.chordArrray);

        Tone.Transport.bpm.value = this.bpm;
        Tone.Transport.start();
        seq.start();
      },

      stop: function() {
        Tone.Transport.stop();
        seq.stop();
      },

      getData: function(input) {
        let scale = new Scales();
        let result = scale.getScale(input);
        this.currentScale = result;
        console.log(result);
      },
    }
}
</script>