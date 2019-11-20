<template>
  <div id="featured">
    <div class="todo-block">
      <h2>To-do:</h2>
      <to-do-list v-for="todo in todos" :key="todo.id" :id="todo.id"></to-do-list>
    </div>
  </div>
</template>

<script>
import ToDoList from "./../ToDoList.vue";
const axios = require("axios");

export default {
  name: "ToDoLog",
  components: { ToDoList },
  data: function() {
    return {
      todos: null
    };
  },
  mounted() {
    axios
      .get("https://my-json-server.typicode.com/conbainbridge/e28-p3-api/todos")
      .then(response => (this.todos = response.data));
  }
};
</script>

<style scoped>
.todo-block {
  background-color: #483d8b;
  color: white;
  padding: 15px;
}
</style>