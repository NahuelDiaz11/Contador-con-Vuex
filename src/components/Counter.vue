<template>
  <h1>Contador en Vuex</h1>
  <h2>Acceso directo: {{ $store.state.counter.count }}</h2>

  <h2>Acceso directo computado: {{ countComputed }}</h2>

  <h2>Acceso desde mapState: {{ countComputed }}</h2>
  <button @click="incrementCounter">+1</button>

  <button @click="incrementCinco">+5</button>

  <button @click="incrementRandomInt" :disabled="isLoading">Random</button>

  <h2>Acceso desde mapState: {{ lastMutation }}</h2>
</template>

<script>

import { mapState, mapActions } from "vuex"

export default {



  computed:{
  
    
    countComputed(){
      return this.$store.state.counter.count
    },

    ...mapState('counter', ['count', 'lastMutation', 'isLoading'])
    // ...mapState({
    //   count: state => state.count,
    //   lastMutation: state => state.lastMutation
    // }),
    // ...mapState(['isLoading'])

  },

  methods: {
    incrementCounter(){
      this.$store.commit('counter/increment')
    },
    incrementCinco(){
      this.$store.commit('counter/incrementBy', 5)
    },
    ...mapActions( 'counter', ['incrementRandomInt']),

    

  },

 

  

}
</script>

