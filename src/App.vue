<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      {{getCount}}
    </div>
    <div @click="incrementCount()" class="incr">increment</div>
    <div @click="decrimentCount()" class="dcr">decriment</div>
    <div @click="incrementBy(10)" class="dcr">incrementBy 10</div>
  </div>
</template>

<script>
import { mapGetters,mapActions,mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    
  },
  computed:{
    ...mapGetters(['getCount']),
    ...mapState({
       copyCount:state=>state.count
   })
},

  methods:{
    ...mapActions(['incrementCount','decrimentCount','incrementBy'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.incr{
  padding: 20px;
  color: green;
  cursor: pointer;
  user-select: none;
  width: 100px;
}
.dcr{
  padding: 20px;
  color: rgb(223, 33, 0);
  cursor: pointer;
  user-select: none; 
    width: 100px;

}
</style>
