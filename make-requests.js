const axios = require('axios')

const API_URL = 'https://fvy2jgkmf4.execute-api.us-east-1.amazonaws.com/dev/article/c3ccbfcb-a8b4-4b8f-b46d-b92638edc299'

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
