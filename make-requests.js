const axios = require('axios')

const API_URL = 'https://mbgy9nfi0f.execute-api.us-east-1.amazonaws.com/dev/article/167c76e1-330a-4915-9500-7b38a41e8808'

console.log('Starting to make requests')

const get = () => axios.get(API_URL)
  .then(response => {
    console.log('Request success', response.status)
    get()
  })
  .catch(error => {
    console.log('Request failed', error.response.status)
    get()
  })

get()
