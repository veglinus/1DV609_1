<template>
  <div class="home">
    <h1>1DV609 - Assignemnt 1 Part 2</h1>

    <p id="error" v-if="error">{{error}}</p>

    <h2>Input chords:</h2>
    <div id="chordInput">
      <input type="text" name="chord1" id="chord1" v-model="chord1">
      <input type="text" name="chord2" id="chord2" v-model="chord2">
      <input type="text" name="chord3" id="chord3" v-model="chord3">
      <input type="text" name="chord4" id="chord4" v-model="chord4">
    </div>

    <br><br>
    <div id="settings">
      <label for="bpm">BPM: </label>
      <input type="number" name="bpm" id="bpm" v-model="bpm">
      <br>

      <label for="hihat">Hihat:</label>
      <input type="checkbox" name="hihat" id="hihat" v-model="hihat">

      <label for="snare">Snare:</label>
      <input type="checkbox" name="snare" id="snare" v-model="snare">

      <label for="kick">Kick:</label>
      <input type="checkbox" name="kick" id="kick" v-model="kick">
    </div>


    <br><br>
    <p v-if="currentScale">Current scale notes:</p>
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
let seq;

export default {
  created () {
    this.prepare()
  },
  name: 'Home',
    data: function() {
        return {
            error: "",
            note: "",
            bpm: 100,
            currentScale: "",
            nextScale: "",
            chord1: "Am",
            chord2: "F",
            chord3: "C",
            chord4: "G",
            chordArrray: [],
            snare: true,
            kick: true,
            hihat: true,
        }
    },
    methods: {
      prepare: function() {

      },

      play: function() {
        let arr = this.populateChordArray();
        let hihatInput = this.hihat;
        let kickInput = this.kick;
        let snareInput = this.snare;
        let bpmInput = this.bpm;

        this.getCurrentScale(this.chord1);
        
        console.log("Initializing sequencer" + "First chord is: " + arr[0]);

        seq = new Tone.Sequence(function(time, idx) {
          if (hihatInput) {
            hihat.start();
          }

          if (kickInput) {
            if ([0, 4, 8, 12].indexOf(idx) >= 0) {
              kick.start();
            }
          }

          if (snareInput) {
            if ([2, 6, 10, 14].indexOf(idx) >= 0) {
              snare.start();
            }
          }

          if (idx == 0) {
            polySynth.triggerAttackRelease(arr[0], "4n");
          }
          if (idx == 4) {
            polySynth.triggerAttackRelease(arr[1], "4n");
          }
          if (idx == 8) {
            polySynth.triggerAttackRelease(arr[2], "4n");
          }
          if (idx == 12) {
            polySynth.triggerAttackRelease(arr[3], "4n");
          }

        }, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], "8n");

        //const context = new Tone.Context({ latencyHint: "interactive" });
        //Tone.setContext(context);

        if (Tone.context.state !== 'running') {
          Tone.context.resume();
        }

        console.log("Playing!");
        
        Tone.Transport.bpm.value = bpmInput;
        Tone.Transport.start();
        seq.start();

        
      },

      stop: function() {
        Tone.Transport.stop();
        polySynth.releaseAll();
        seq.stop();
        seq.clear();
        seq.dispose();
      },

      populateChordArray: function() {
        let chords = new Chords();
        this.chordArrray = [];

        this.chordArrray.push(chords.getNotesForChord(this.chord1));
        this.chordArrray.push(chords.getNotesForChord(this.chord2));
        this.chordArrray.push(chords.getNotesForChord(this.chord3));
        this.chordArrray.push(chords.getNotesForChord(this.chord4));

        console.log("Done populating");
        return this.chordArrray;
      },

      getCurrentScale: function(input) {
        let scale = new Scales();
        let result = scale.getScale(input);
        this.currentScale = result;
        console.log(result);
      },
    }
}
</script>