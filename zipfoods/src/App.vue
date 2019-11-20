<template>
  <div id="app">
    <img id="logo" alt="ZipFoods logo" src="./assets/images/zipfoods-logo.png" />

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
import { products } from "./products.js";

export default {
  name: "app",
  components: {},
  data: function() {
    return {
      products: products,
      links: ["home", "products", "categories"]
    };
  },
  mounted() {
    let userObj = {
      firstName: "Jamal",
      lastName: "Jones",
      email: "jjones@gmail.com"
    };
    localStorage.setItem("user", JSON.stringify(userObj));
    userObj = JSON.parse(localStorage.getItem("user"));
    console.log(userObj.firstName);
  }
};
</script>

<style lang="scss">
@import "./assets/css/zipfoods.scss";
</style>