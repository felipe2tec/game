import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    hash:'1c495f75a8a08406cde3fd1785f747f2',
    queues:'',
    departaments:'',
    test:false,
    showMoreInfo:false,
    moreInfoTo:false,
    showTrunks:false,
    trunks:[],
    moreInfoToCall:'',
    infoCall:''
  }
})

export default store
