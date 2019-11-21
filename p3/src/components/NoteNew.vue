<template>
  <div>
    <div v-if="note">
      <button @click="addNew()">Add note</button>
      <br />
      <div v-if="newNote == true">
        <div class="new-slip-style" v-if="note">
          <div class="slip-title">{{ note.title }}</div>
          <hr />
          <div class="slip-notes">{{ note.note }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteNew",
  props: ["id"],
  data: function() {
    return {
      note: null,
      newNote: false
    };
  },
  mounted() {
    if (localStorage.note) {
      this.title = localStorage.title;
      this.note = localStorage.note;
    }
  },
  methods: {
    addNew: function() {
      this.newNote = true;
      this.note = localStorage;
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