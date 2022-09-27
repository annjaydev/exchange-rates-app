import { getApiData } from '../../api/request'
import { exchangeRatesAction } from '../reducers/exchangeRatesReducer'

export const getExchangeRates = (base) => (dispatch) =>
  getApiData(`/latest?base=${base}`).then((res) => {
    dispatch(exchangeRatesAction(res.data.rates))
  })
