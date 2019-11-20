<template>
  <div id="featured">
    <h2>Notes:</h2>
    <note-slip v-for="note in notes" :key="note.id"></note-slip>
  </div>
</template>

<script>
import NoteSlip from "./../NoteSlip.vue";
import { notes } from "./../../notes.js";

export default {
  name: "NoteLog",
  components: { NoteSlip },
  data: function() {
    return {
      notes: notes
    };
  }
};
</script>

<style scoped>
h2 {
  color: white;
  text-align: center;
}
</style>