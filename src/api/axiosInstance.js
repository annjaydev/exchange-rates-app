import axios from 'axios'

export const exchangeRatesApi = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data',
  redirect: 'follow',
  headers: { apiKey: process.env.REACT_APP_API_KEY },
})
