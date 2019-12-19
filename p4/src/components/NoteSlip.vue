<template>
  <div>
    <div class="slip-style">
      <div class="slip-title">{{ note.title }}</div>
      <hr />
      <div class="slip-notes">{{ note.note }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteSlip",
  props: ["note"]
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
</style>