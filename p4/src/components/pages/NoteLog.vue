<template>
  <div>
    <div class="leftDiv">
      <h2>Add a new note:</h2>
      <note-new></note-new>
    </div>
    <div class="rightDiv">
      <h2>Previous notes:</h2>
      <note-slip v-for="note in notes" :key="note.title" :id="note.title" :note="note"></note-slip>
    </div>
  </div>
</template>

<script>
import NoteSlip from "./../NoteSlip.vue";
import NoteNew from "./../NoteNew.vue";

export default {
  name: "NoteLog",
  components: { NoteSlip, NoteNew },
  data: function() {
    return {};
  },
  computed: {
    notes: function() {
      return this.$store.state.noteData;
    }
  }
};
</script>

<style scoped>
@import "./../../assets/css/styles.css";
</style>