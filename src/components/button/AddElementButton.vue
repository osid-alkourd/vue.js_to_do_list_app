<template>
  <button
    class="bg-blue-500 text-white font-bold py-0.5 px-4 border border-blue-700 rounded ml-px"
    @click="addEvent"
  >
    add
  </button>
</template>

<script>
export default {
  methods: {
    addEvent() {
      this.$emit("addElementEvent");
    },
  },
};
</script>

<style>
.ml-px{
  margin-left: 10px;
}
</style>