<template>
  <div>
    <div class="slip-style" v-if="notes">
      <div class="slip-title">{{ notes.title }}</div>
      <hr />
      <div class="slip-notes">{{ notes.note }}</div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "NoteSlip",
  props: ["id"],
  data: function() {
    return {
      notes: null
    };
  },
  mounted() {
    this.notes = axios
      .get(
        "https://my-json-server.typicode.com/conbainbridge/e28-p3-api/notes/" +
          this.id
      )
      .then(response => (this.notes = response.data));
  }
};
</script>

<style scoped>
.slip-style {
  background-color: #483d8b;
  color: white;
  border-style: dashed;
  border-color: #201a43;
  padding: 15px;
  margin: 15px;
}
.slip-title {
  font-size: 24px;
  text-align: center;
}
.delete-button {
  float: right;
  background-color: #201a43;
  color: grey;
}
.delete-button:hover {
  background-color: blue;
  color: white;
}
</style>