<template>
  <input
    class="border-2 border-black"
    type="text"
    v-model="value"
  />
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  // props: ["modelValue"],
  // emits: ["update:modelValue"],
  // data() {
  //   return {
  //     element: "",
  //   };
  // },
  computed: {
    ...mapState(["element_value"]),
    value: {
      get() {
        return this.$store.state.element_value
      },
      /* We add a setter */
      set(value) {
        this.$store.commit('changeValue', value)
        //$this.$store.state.element_value = value
      }
    } , 
  },
  methods: {
     ...mapMutations([
        'addElement' ,
     ])
  },
};
</script>

<style>
/* input {
  margin-right: 5px;
  width: 150px;
} */
</style>