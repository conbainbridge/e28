export { default as NoteCount } from './NoteCount';
export { default as TodoCount } from './TodoCount';

export const axios = require('axios');

export const config = {
    api: process.env.VUE_APP_API_URL
}

export let store = {
    noteCount: 0,
    todoCount: 0

}