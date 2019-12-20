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
        <li>
          <div>
            <div v-if="!nameSubmitted && !localName">
              <input type="text" v-model="yourName" />&nbsp;
              <button @click="submitName">Save name</button>
            </div>
            <div v-if="nameSubmitted" class="your-name">{{yourName}}'s Listack</div>
            <div v-if="localName" class="your-name">{{localName}}'s Listack</div>
          </div>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
// import * as app from "./app.js";

export default {
  name: "app",
  components: {},
  data: function() {
    return {
      links: ["home", "add note", "add todo"],
      nameSubmitted: false,
      localName: localStorage.getItem("name"),
      yourName: null
      // sharedState: app.store
    };
  },
  methods: {
    submitName: function() {
      (this.nameSubmitted = true), localStorage.setItem("name", this.yourName);
    }
  },
  mounted() {
    this.$store.dispatch("setNoteData");
  }
};
</script>

<style>
@import "./assets/css/styles.css";
.your-name {
  font-size: 16px;
  font-style: italic;
  color: yellow;
}
</style>
