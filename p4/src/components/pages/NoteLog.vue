<template>
  <div>
    <div>
      <h2>Add a new note:</h2>
      <note-new></note-new>
    </div>
  </div>
</template>

<script>
import NoteNew from "./../NoteNew.vue";

export default {
  name: "NoteLog",
  components: { NoteNew },
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