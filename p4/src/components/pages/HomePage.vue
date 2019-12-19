<template>
  <div>
    <h2>Here are some notes and to-do items previously saved on the "server!" 😉</h2>
    <div class="leftDiv">
      <h2>Notes:</h2>
      <note-slip v-for="note in notes" :key="note.title" :id="note.title" :note="note"></note-slip>
    </div>
    <div class="rightDiv">
      <h2>To-do items:</h2>
      <div class="todo-block">
        <to-do-list v-for="todo in todos" :key="todo.id" :id="todo.id"></to-do-list>
      </div>
    </div>
  </div>
</template>

<script>
import NoteSlip from "./../NoteSlip.vue";
import ToDoList from "./../ToDoList.vue";
const axios = require("axios");

export default {
  name: "HomePage",
  components: { NoteSlip, ToDoList },
  data: function() {
    return {
      todos: null
    };
  },
  mounted() {
    axios
      .get("https://my-json-server.typicode.com/conbainbridge/e28-p3-api/todos")
      .then(response => (this.todos = response.data));
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
.todo-block {
  background-color: #483d8b;
  color: white;
  padding: 15px;
  padding: 15px;
  margin: 15px;
}
</style>