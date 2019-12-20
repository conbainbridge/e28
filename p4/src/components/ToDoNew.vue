<template>
  <div>
    <div class="centered">
      Add one custom item:
      <br />
      <input type="text" v-model="newDo" data-test="todo-input" />
      <br />
      <button @click="newTodo" data-test="add-todo">Save item</button>
      <br />
    </div>
    <div v-if="newAdded == true">
      <div class="todonew-style" v-if="newDo">
        <input type="checkbox" :value="newDo" />
        {{ newDo }}
        <br />
      </div>
    </div>
    <div v-if="newGet">
      <div class="todonew-style">
        <input type="checkbox" :value="newGet" />
        {{ newGet }}
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoNew",
  props: ["id"],
  data: function() {
    return {
      newDo: null,
      newAdded: false,
      newGet: localStorage.getItem("Todo")
    };
  },
  methods: {
    newTodo: function() {
      (this.newAdded = true), localStorage.setItem("Todo", this.newDo);
    }
  },
  mounted() {
    if (localStorage.todo) {
      this.todo = localStorage.todo;
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