import axios from 'axios'

import { BASE_URL } from '../../constants'

const requestOptions = {
  redirect: 'follow',
  headers: {
    apiKey: process.env.REACT_APP_API_KEY,
  },
}

export const getApiData = (params) => {
  return axios.get(`${BASE_URL}${params}`, requestOptions)
}

