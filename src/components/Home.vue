<template>
  <div class="home">
    <h1>1DV609 - Assignemnt 1 Part 2</h1>

    <p id="error" v-if="error">{{error}}</p>

    <label for="note">Insert a chord to get the relevant scale:</label>
    <input type="text" name="note" id="note" v-model="note">


    <br><br>
    <button v-on:click="test(note)">Get scale</button>

  </div>
</template>

<script>
//import { getScaleStartingPosition } from "../functions.js";
import Notes from "../../src/notes.js";

export default {

  name: 'Home',
    data: function() {
        return {
            error: "",
            result: "",
            note: ""
        }
    },
    methods: {
      test: function(param) {
        let notes = new Notes();
        let result = notes.setStartingNote(param);
        console.log(result);
      }


    }
}
</script>