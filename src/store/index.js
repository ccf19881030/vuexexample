
import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    parentText: '父组件原始文本',
    childText:"子组件原始文本"
}

const mutations = {
    changeParentText(state, str){
        state.parentText = str;
    },
    changeChildText(state, str){
        state.childText = str;
    }
}

const store = new Vuex.Store({
    state: state,
    mutations: mutations
})

export default store;
