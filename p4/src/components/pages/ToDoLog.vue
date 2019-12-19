<template>
  <div id="featured">
    <div class="todo-block">
      <h2>To-do list:</h2>
      <to-do-new></to-do-new>
      <to-do-list v-for="todo in todos" :key="todo.id" :id="todo.id"></to-do-list>
    </div>
  </div>
</template>

<script>
import ToDoList from "./../ToDoList.vue";
import ToDoNew from "./../ToDoNew.vue";
const axios = require("axios");

export default {
  name: "ToDoLog",
  components: { ToDoList, ToDoNew },
  data: function() {
    return {
      todos: null,
      newDo: []
    };
  },
  mounted() {
    axios
      .get("https://my-json-server.typicode.com/conbainbridge/e28-p3-api/todos")
      .then(response => (this.todos = response.data));
  },
  methods: {
    addToDo: function(todo) {
      localStorage.setItem("todo", todo);
    }
  }
};
</script>

<style scoped>
.todo-block {
  background-color: #483d8b;
  color: white;
  padding: 15px;
  padding: 15px;
  margin: 15px;
}
</style>