import Vue from 'vue';
import Vuex from 'vuex';
import workTime from './modules/workTime'

Vue.use(Vuex);

export default () => new Vuex.Store({
  modules: [
    workTime
  ]
})
