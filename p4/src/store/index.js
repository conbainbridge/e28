import Vue from 'vue'
import Vuex from 'vuex'

import * as app from './../app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        noteData: null,
        todoData: null
    },
    mutations: {
        //note data
        setNoteData(state, payload) {
            state.noteData = payload;
        },
        addNoteData(state, payload) {
            _.merge(state.noteData, payload);
        },
        setTodoData(state, payload) {
            state.todoData = payload;
        },
        addTodoData(state, payload) {
            _.merge(state.todoData, payload)
        }
    },
    actions: {
        setNoteData(context) {
            app.axios.get('https://listack.firebaseio.com/notes.json').then(response => {
                context.commit('setNoteData', response.data)
            });
        }
    }
})