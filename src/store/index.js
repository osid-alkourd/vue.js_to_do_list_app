import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        counter: 0 , 
        colorCode: "black"
    },
    mutations: {
        increaseCounter(state, number) {
            state.counter += number
        },
        decreaseCounter(state, number) {
            state.counter -= number
        } , 
        changeColor(state, newColor){
            state.colorCode = newColor
        }
    },
    actions: {
        increaseCounter({ commit }) {
            // console.log("dispatch")
            axios('https://www.randomnumberapi.com/api/v1.0/random?min=1&max=10').then((response) => {
               // console.log(response.data[0])
                let number = response.data[0]
                commit('increaseCounter', number)
            })

        },
        decreaseCounter({ commit }) {
            axios('https://www.randomnumberapi.com/api/v1.0/random?min=1&max=10').then(response => {
                let number = response.data[0]
                commit('decreaseCounter',number)
            })
        }
    }
})