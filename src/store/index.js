import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showDownload : true,
    city:{},
  
  },
  mutations: {
    UPDATE_DOWN_STATE(state,boole){
      state.showDownload = boole ;
    },
    UPDATE_CITY(state,city){
      state.city = city;
      
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getCityName(state){
      return state.city.name;
    }
  }
})
