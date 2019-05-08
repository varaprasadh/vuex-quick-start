/* eslint-disable no-unused-vars */

const state={
   count:0
}
const getters={
   getCount:(state)=>state.count
}
const actions={
   incrementCount:(store)=>{
       //increment count by mutating
       store.commit('incrementCount');
   },
   decrimentCount:(store)=>{
       store.commit('decrimentCount');
   },
   incrementBy:(store,amount)=>{
       store.commit('incrementBy',amount);
   }
};
const mutations={
  incrementCount:(state)=>{
      state.count++;
  },
  decrimentCount:(state)=>{
      state.count--;
  },
  incrementBy:(state,amount)=>{
      state.count+=amount;
  }
};
export default {
    state,
    getters,
    actions,
    mutations
};

