<template>
  <div id="app">
    <img alt="LiStack logo" src="./assets/logo.png" />
    <p>LiStack - organizing life into to-do lists and notes</p>
    <note-slip></note-slip>
  </div>
</template>

<script>
import NoteSlip from "./components/NoteSlip.vue";

export default {
  name: "app",
  components: { NoteSlip }
};
</script>

<style>
</style>
