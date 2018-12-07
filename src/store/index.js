import Vuex from 'vuex'
import Vue from 'vue'
import dammei from './modules/dammei'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        dammei,
    }
})
