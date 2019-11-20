<template>
  <div class="todo-style" v-if="todos">
    <input type="checkbox" :value="todos.todo" />
    {{ todos.todo }}
    <br />
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "ToDoList",
  props: ["id"],
  data: function() {
    return {
      todos: null
    };
  },
  mounted() {
    this.todos = axios
      .get(
        "https://my-json-server.typicode.com/conbainbridge/e28-p3-api/todos/" +
          this.id
      )
      .then(response => (this.todos = response.data));
  }
};
</script>

<style scoped>
</style>