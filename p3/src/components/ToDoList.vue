<template>
  <div class="todo-style">
    <div class="todo-title">{{ title}}</div>
    <ul class="todo-list">
      <li id="initial-item">
        <textarea rows="1" cols="50">
            What's on your to-do list?
        </textarea>
      </li>
    </ul>
    <div class="timestamp-style">{{ timestamp }}</div>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  props: ["timestamp", "title"]
};
</script>

<style scoped>
</style>