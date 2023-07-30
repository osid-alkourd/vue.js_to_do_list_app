<template>
  <div class="flex justify-center mt-20">
    <table id="items">
      <thead>
        <tr>
          <th>ID</th>
          <th>Value</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in list"
          :key="item.ID"
          :id="item.ID"
          :ref="`item_${item.ID}`"
          @dblclick="changeColor(item.ID)"
         
        >
          <td>{{ item.ID }}</td>
          <td>{{ item.element }}</td>
          <td>
            <DeleteElementButton
              @click="deleteElement(item)"
            >
              x
            </DeleteElementButton>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import DeleteElementButton from "../button/DeleteElementButton.vue";
import { mapState , mapMutations  } from "vuex";

export default {
  data() {
    return {
      isGreen: false,
    };
  },

  components: {
    DeleteElementButton,
  },
  methods: {
    changeColor(id) {
      this.isGreen = !this.isGreen;
      //console.log(this.$refs);
      this.isGreen
        ? (this.$refs["item_" + id].style.background = "green")
        : (this.$refs["item_" + id].style.background = "white");
      // if(this.isGreen){
      //   document.getElementById(id).style.background  = "green"
      // }else{
      //   document.getElementById(id).style.background  = "white"

      // }
     
    }, 
     ...mapMutations([
        'deleteElement' 
     ])
  },
  computed: {
     ...mapState([
      'list'
  ])
  }
};
</script>

<style>
 #items {
   border-collapse: collapse;
   font-family: Arial, Helvetica, sans-serif;
   width: 50%;
 }

#items td, #items th {
  border: 1px solid #ddd;
  padding: 8px;
}
#items tr:hover {background-color: #ddd;}

/* #items th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;  
  color: white;
} */
#items th {
  text-align: left;
}

</style>