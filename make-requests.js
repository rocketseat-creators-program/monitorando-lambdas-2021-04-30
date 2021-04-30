const axios = require('axios')

const API_URL = '<API_URL>'

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
