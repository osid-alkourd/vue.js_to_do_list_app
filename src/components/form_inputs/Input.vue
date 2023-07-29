<template>
  <input
    class="border-2 border-black "
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  // data() {
  //   return {
  //     element: "",
  //   };
  // },
};
</script>

<style>
/* input {
  margin-right: 5px;
  width: 150px;
} */
</style>