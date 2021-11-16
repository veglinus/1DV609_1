<template>
  <div class="home">
    <h1>1DV609 - Assignemnt 1 Part 2</h1>

    <p id="error" v-if="error">{{error}}</p>

    <label for="note">Insert a chord to get the relevant scale:</label>
    <input type="text" name="note" id="note" v-model="note">

    <br><br>
    <button v-on:click="getData(note)">Get scale</button>

    <br><br>
    <ul id="notes" v-if="currentScale">
      <li v-for="item in currentScale" :key="item">{{item}}</li>
    </ul>

  </div>
</template>

<script>
//import Notes from "../../src/notes.js";
import Scales from "../../src/scales.js";

export default {

  name: 'Home',
    data: function() {
        return {
            error: "",
            note: "",
            currentScale: "",
        }
    },
    methods: {
      getData: function(input) {
        let scale = new Scales();
        let result = scale.getScale(input);
        this.currentScale = result;
        console.log(result);
      },
    }
}
</script>