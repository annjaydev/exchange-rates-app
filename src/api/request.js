import { exchangeRatesApi } from './axiosInstance'

export const getApiData = (params) => exchangeRatesApi.get(`${params}`)
