import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://sistema-receitas-back.herokuapp.com/',
});