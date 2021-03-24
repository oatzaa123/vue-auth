import Vue from 'vue'
import Vuex from 'vuex'
import moduleAuth from './auth/moduleAuth'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth: moduleAuth,
    },
    strict: process.env.NODE_ENV !== 'production',
})
