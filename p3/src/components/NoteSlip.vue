<template>
  <div>
    <div v-for="tester in testers" :key="tester.title" :title="tester.title" class="slip-style">
      <div class="slip-title">{{ tester.title }}</div>
      <button class="delete-button">X</button>
      <hr />
      <div class="slip-notes">{{ tester.notes }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteSlip",
  data: function() {
    return {
      testers: [
        {
          title: "Note #1",
          id: "note1",
          notes: "These are the notes."
        },
        {
          title: "Note #2",
          id: "note2",
          notes: "Oh look, even more notes! But what do they mean?"
        }
      ]
    };
  },
  props: ["title", "notes"]
};
</script>

<style scoped>
.slip-style {
  background-color: slategrey;
  border-style: dashed;
  border-color: darkblue;
  padding: 15px;
  margin: 15px;
}
.slip-title {
  font-size: 24px;
  text-align: center;
}
.delete-button {
  float: right;
  background-color: darkblue;
  color: grey;
}
.delete-button:hover {
  background-color: blue;
  color: white;
}
</style>