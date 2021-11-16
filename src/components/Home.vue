<template>
  <div class="home">
    <h1>1DV609 - Assignemnt 1 Part 2</h1>

    <p id="error" v-if="error">{{error}}</p>

  </div>
</template>

<script>


export default {
  name: 'Home',
  created () {
    this.getPeople()
  },
    data: function() {
        return {
            error: "",
        }
    },
    methods: {

      getPeople: function() {
        /*
          axios.get("http://localhost:3000/users").then((response) => {
              if (response != null) {
                  this.people = response.data;
              } else {
                  console.log(response);
              }
          })*/
      },

    }
}
</script>