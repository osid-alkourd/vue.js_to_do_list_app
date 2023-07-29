<template>
  <div class="flex items-center justify-center mt-20" >
    <div >
      <Input v-model="element_value"> </Input>
      <AddElementButton @add-element-event="addElement" />
    </div>
   </div>
    <ContentBody
     
      :list="list"       
      @delete-item="deleteElement"
    />
</template>

<script>
import AddElementButton from "./button/AddElementButton.vue";
import DeleteElementButton from "./button/DeleteElementButton.vue";
import Input from "./form_inputs/Input.vue";
import ContentBody from "./content/ContentBody.vue";

export default {
  data() {
    return {
      list: [],
      element_value: "", // to bind the enterd value
      //storage_item: ""
    };
  },
  components: {
    AddElementButton,
    DeleteElementButton,
    Input,
    ContentBody,
  },
  methods: {
    //add element from array
    addElement() {
      let id = Math.floor(Math.random() * 100);
      let obj = { ID: id, element: this.element_value };
      //this.list.push(obj);
      this.list = [...this.list, obj]
     // this.storage_item = localStorage.setItem('list' , JSON.stringify(obj));

    },
    

    // delete element from array
    deleteElement(item) {
      this.list = this.list.filter((element) => element.ID !== item.ID);
      //this.storage_item = localStorage.setItem('list' , JSON.stringify(this.list));

    },

  },
  watch: {
  list: {
    handler() {
      localStorage.setItem('list',JSON.stringify(this.list))
    },
    deep: true
  }
} ,
  mounted(){
      if(localStorage.getItem("list"))
          this.list = JSON.parse(localStorage.getItem('list'))

  }
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