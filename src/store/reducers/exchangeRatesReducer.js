const defaultState = {
  exchangeRates: {},
}

const EXCHANGE_RATES = 'EXCHANGE_RATES'

export const exchangeRatesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case EXCHANGE_RATES:
      return { ...state, exchangeRates: action.payload }

    default:
      return state
  }
}

export const exchangeRatesAction = (payload) => ({
  type: EXCHANGE_RATES,
  payload,
})
