import Vue from 'vue';
import Vuex from 'vuex';
import centralStore from './modules/centralStore.js';

Vue.use(Vuex);

export default new Vuex.Store({
 
    modules:{
        centralStore 
    }
});
