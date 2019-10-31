<template>
  <div v-bind:class="{ winner : winner == 'Player'}">
    <ul>
      <li>Round #: {{ number }}</li>
      <li>Winner: {{ winner }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    number: {
      type: Number,
      default: 0
    },
    winner: {
      type: String,
      default: ""
    }
  },
  template: "#round-detail"
};
</script>

<style>
</style>