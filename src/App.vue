<template>
  <Form />
  <div :style="{color:colorCode }">count : {{ count }}</div>
  <div class="mt-1.5">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
      @click="increase"
    >
      increase
    </button>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded ml-2"
      @click="decrease"
    >
      decrease
    </button>
  </div>
  <div class="mt-12">
    <input
      type="text"
      placeholder="Enter the color code"
      class="border-black border-2"
      v-model="colorCode"
    />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
//import { mapMutations } from 'vuex'

import Form from "./components/Form.vue";
import Input from "./components/form_inputs/Input.vue";
export default {
  computed: {
    // ...mapState(['counter']), // this mean this.count = store.state.counter
    ...mapState({
      count: "counter",
    }),
    colorCode: {
      get() {
        return this.$store.state.colorCode
      },
      set(newValue){
        this.$store.commit('changeColor',newValue)
      }
    },
  },
  methods: {
    // ...mapMutations([
    //   "increaseCounter", // map `this.increment()` to `this.$store.commit('increment')`
    // ]),
    // ...mapMutations({
    //   add: 'increaseCounter'
    // }) ,
    ...mapActions({
      increase: "increaseCounter",
      decrease: "decreaseCounter",
    }),
  },
  components: {
    Form,
  },
};
Input;
</script>

<style>
</style>
