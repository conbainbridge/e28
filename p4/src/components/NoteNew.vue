<template>
  <div id="new-note">
    <div class="centered">
      Unique title:
      <br />
      <form @submit.prevent="submitNote">
        <input type="text" v-model="note.title" />
        <br />
        <br />Note:
        <br />
        <textarea rows="4" cols="50" v-model="note.note" />
        <br />
        <button data-test="add-note" type="submit">Save note</button>
        <br />
      </form>
      <br />
    </div>
  </div>
</template>

<script>
import * as app from "./../app.js";

let note = {
  title: "",
  note: ""
};

export default {
  name: "NoteNew",
  data: function() {
    return {
      note: note
    };
  },
  methods: {
    submitNote: function() {
      app.axios
        .post("https://listack.firebaseio.com/notes.json", this.note)
        .then(response => {
          let key = response.data.name;

          this.$store.commit("addNoteData", {
            [key]: this.note
          });
        });

      this.$store.commit("updateNoteCount", 1);
    }
  }
};
</script>

<style scoped>
.new-slip-style {
  background-color: #5b0138;
  color: white;
  border-style: dashed;
  border-color: #201a43;
  padding: 15px;
  margin: 15px;
}
.slip-title {
  font-size: 24px;
  text-align: center;
}
</style>