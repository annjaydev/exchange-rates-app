import { getApiData } from '../../api/functions/request'
import { exchangeRatesAction } from '../reducers/exchangeRatesReducer'

export const getExchangeRates = (base) => {
  return (dispatch) => {
    getApiData(`/latest?base=${base}`).then((res) => {
      dispatch(exchangeRatesAction(res.data.rates))
    })
  }
}
