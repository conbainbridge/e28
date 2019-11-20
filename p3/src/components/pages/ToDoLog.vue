<template>
  <div id="featured">
    <div class="todo-block">
      <h2>To-do:</h2>
      <to-do-list v-for="todo in todos" :key="todo.id"></to-do-list>
    </div>
  </div>
</template>

<script>
import ToDoList from "./../ToDoList.vue";
import { todos } from "./../../todos.js";

export default {
  name: "ToDoLog",
  components: { ToDoList },
  data: function() {
    return {
      todos: todos
    };
  }
};
</script>

<style scoped>
.todo-block {
  background-color: #483d8b;
  color: white;
  padding: 5px 10px;
}
</style>