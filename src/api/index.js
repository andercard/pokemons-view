import axios from 'axios';

const URL = 'https://pokeapi.co/api/v2/'

const API = axios.create({
  baseURL: URL,
  headers: {
    'accept-language': 'es',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-request-origin': 'cliente web'
  }
})

export default API
