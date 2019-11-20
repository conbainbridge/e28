<template>
  <div id="app">
    <div class="header">
      <img alt="LiStack logo" src="./assets/logo.png" height="100px" />
    </div>

    <nav>
      <ul>
        <li v-for="link in links" :key="link">
          <router-link exact :to="{name: link}">{{ link }}</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import notes from "./notes.js";

export default {
  name: "app",
  components: {},
  data: function() {
    return {
      notes: notes,
      links: ["home", "notes", "todo"]
    };
  }
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
