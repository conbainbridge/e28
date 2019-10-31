<template>
  <div>
    <hr>
    <p>
      <div :class="{ win: results == 'win', lose: results == 'lose', draw: results == 'draw' }">Round #: {{ number }}</div>
      <div>Results: {{ results }}</div>
      <div>{{ hands }}</div>
    </p>
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
    results: {
      type: String,
      default: "stuff"
    },
    hands: {
      type: String,
      default: "stuff"
    }
  },
  template: "#round-detail"
};
</script>

<style>
</style>