<template>
  <div id="featured">
    <h2>Notes:</h2>
    <note-slip v-for="note in notes" :key="note.id" :id="note.id"></note-slip>
  </div>
</template>

<script>
import NoteSlip from "./../NoteSlip.vue";
const axios = require("axios");

export default {
  name: "NoteLog",
  components: { NoteSlip },
  data: function() {
    return {
      notes: null
    };
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/conbainbridge/e28-p3-api/notes/"
      )
      .then(response => (this.notes = response.data));
  }
};
</script>

<style scoped>
h2 {
  color: white;
  text-align: center;
}
</style>