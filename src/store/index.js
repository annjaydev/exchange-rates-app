import { baseCurrencyReducer } from './reducers/baseCurrencyReducer'
import { configureStore } from '@reduxjs/toolkit'
import { exchangeRatesReducer } from './reducers/exchangeRatesReducer'
import { favoritesReducer } from './reducers/favoritesReducer'

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
  reducer: {
    baseCurrency: baseCurrencyReducer,
    exchangeRates: exchangeRatesReducer,
    favorites: favoritesReducer,
  },
})
