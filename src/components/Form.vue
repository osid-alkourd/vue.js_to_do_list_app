<template>
  <div class="flex items-center justify-center mt-20">
    <div>
      <Input> </Input>
      <AddElementButton @click="addElement" />
    </div>
  </div>
  <ContentBody/>
</template>

<script>
import AddElementButton from "./button/AddElementButton.vue";
import DeleteElementButton from "./button/DeleteElementButton.vue";
import Input from "./form_inputs/Input.vue";
import ContentBody from "./content/ContentBody.vue";
import { mapState , mapMutations  } from "vuex";

export default {
  computed: {
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
     ...mapState([
      'element_value' ,
      'list'
  ]) , 
    
  },

  components: {
    AddElementButton,
    DeleteElementButton,
    Input,
    ContentBody,
  },
  methods: {
     ...mapMutations([
        'addElement' ,
        'deleteElement' 
     ])
  },
  watch: {
    list: {
      handler() {
        localStorage.setItem("list", JSON.stringify(this.list));
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.getItem("list"))
      this.list = JSON.parse(localStorage.getItem("list"));
  },
};
</script>

<style>
.list {
  max-width: 60%;
  text-align: center;
  margin: 100px auto;
}
/* .mt {
  margin-top: 100px;
} 
*/
</style>