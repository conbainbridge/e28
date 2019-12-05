<template>
  <div>
    <button @click="addNewDo()">Add item</button>
    <br />
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
    addNewDo: function() {
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