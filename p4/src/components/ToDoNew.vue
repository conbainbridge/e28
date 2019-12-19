<template>
  <div>
    <div class="centered">
      <input type="text" v-model="newDo" />
      <br />
      <button @click="addToDo(newDo)">Save new item</button>
      <button @click="addNewDo()">Add item</button>
      <br />
    </div>
    <div v-if="newAdded == true">
      <div class="todonew-style" v-if="todo">
        <input type="checkbox" :value="todo.todo" />
        {{ todo.todo }}
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import * as app from "./../app.js";

export default {
  name: "ToDoNew",
  props: ["id"],
  data: function() {
    return {
      todo: null,
      newAdded: false
    };
  },
  mounted() {
    if (localStorage.todo) {
      this.todo = localStorage.todo;
    }
  },
  methods: {
    addNewDo: function(todo) {
      let todocount = new app.TodoCount();
      todocount.add(todo);
      app.store.todoCount = todocount.count();
      this.addAlert = true;
      setTimeout(() => (this.addAlert = false), 2000);

      this.$store.commit("updateTodoCount", 1);

      this.newAdded = true;
      this.todo = localStorage;
    }
  }
};
</script>

<style scoped>
.todonew-style {
  color: white;
  border-style: dashed;
  border-color: #5b0138;
  padding: 15px;
  margin: 15px;
}
</style>