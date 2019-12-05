<template>
  <div id="all">
    <div class="leftDiv">
      <h2>Add a new note:</h2>
      <div class="centered">
        Title:
        <br />
        <input type="text" v-model="newTitle" />
        <br />
        <br />Note:
        <br />
        <textarea rows="4" cols="50" v-model="newNote" />
        <br />
        <button @click="addNote(newTitle, newNote)">Save note</button>
        <note-new></note-new>
        <br />
        <br />
      </div>
    </div>
    <div class="rightDiv">
      <h2>Previous notes:</h2>
      <note-slip v-for="note in notes" :key="note.id" :id="note.id"></note-slip>
    </div>
  </div>
</template>

<script>
import NoteSlip from "./../NoteSlip.vue";
import NoteNew from "./../NoteNew.vue";
const axios = require("axios");

export default {
  name: "NoteLog",
  components: { NoteSlip, NoteNew },
  data: function() {
    return {
      notes: null,
      newNote: [],
      newTitle: []
    };
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/conbainbridge/e28-p3-api/notes/"
      )
      .then(response => (this.notes = response.data));
  },
  methods: {
    addNote: function(title, note) {
      localStorage.setItem("title", title);
      localStorage.setItem("note", note);
    }
  }
};
</script>

<style scoped>
@import "./../../assets/css/styles.css";
</style>