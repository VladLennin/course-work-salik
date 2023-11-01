import axios from 'axios'
export const API_URL =  "http://localhost:8080"
console.log(API_URL)

const $api = axios.create({
    baseURL: API_URL,
})
export default $api;