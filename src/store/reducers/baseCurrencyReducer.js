const defaultState = {
  baseCurrency: 'RUB',
}

const BASE_CURRENCY = 'BASE_CURRENCY'

export const baseCurrencyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case BASE_CURRENCY:
      return { ...state, baseCurrency: action.payload }

    default:
      return state
  }
}

export const baseCurrencyAction = (payload) => ({
  type: BASE_CURRENCY,
  payload,
})
