<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
.section {
  display: inline-block;
  margin-left: 1%;
  margin-right: 1%;
}

#chordInput {
  display: flex;
  justify-content: center;

  margin-left: 20%;
  margin-right: 20%;
}

table {
  margin-left: auto;
  margin-right: auto;
}

input[type=text] {

  min-width: 12%;
  padding-top: 2%;
  padding-bottom: 2%;

  text-align: center;
  font-size: 4em;

  margin-left: 1%;
  margin-right: 1%;

  border: 2px solid #CCCCCC;
  border-radius: 10px;

}

input[type=number] {
  width: 30px;
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#error {
  font-weight: bolder;
  color: red;
}
.center {
  margin-left: auto;
  margin-right: auto;
}

table {
  text-align: left;
}

th, td {
  padding: 5px 10px;
}

button {
  margin-left: 1%;
  margin-right: 1%;
}

@media only screen and (max-width: 800px) {

#chordInput {
  margin-left: 2%;
  margin-right: 2%;
}

}

/*
tr:nth-child(odd) {
  background: rgb(224, 224, 224);
}
*/
</style>
