import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        list: [] , 
        element_value: "" ,
       
    },
    mutations: {
       addElement(state) {
        let id = Math.floor(Math.random() * 100);
        //state.element_value = value
        let obj = { ID: id, element: state.element_value };
        state.list = [...state.list, obj]
        //console.log(obj)
       } , 

       deleteElement(state , item) {
        state.list = state.list.filter((element) => element.ID !== item.ID);
      },
      changeValue(state , value){
        state.element_value = value
      }



    },
    actions: {
       
    }
})