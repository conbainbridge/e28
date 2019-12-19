<template>
  <div id="app">
    <div class="header">
      <img alt="LiStack logo" src="./assets/logo.png" height="100px" />
    </div>

    <nav>
      <ul>
        <li v-for="link in links" :key="link">
          <router-link exact :to="{name: link}">
            {{ link }}
            <span data-test="notescount" v-if="link == 'notes'">({{ noteCount }})</span>
            <span data-test="todocount" v-if="link == 'todo'">({{ todoCount }})</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import * as app from "./app.js";

export default {
  name: "app",
  components: {},
  data: function() {
    return {
      links: ["home", "notes", "todo"]
      // sharedState: app.store
    };
  },
  computed: {
    noteCount: function() {
      return this.$store.state.noteCount;
    },
    todoCount: function() {
      return this.$store.state.todoCount;
    }
  },
  mounted() {
    this.notecount = new app.NoteCount();
    this.todocount = new app.TodoCount();

    this.$store.commit("setNoteCount", this.notecount.count());
    this.$store.commit("setTodoCount", this.todocount.count());

    this.$store.dispatch("setNoteData");
  }
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
