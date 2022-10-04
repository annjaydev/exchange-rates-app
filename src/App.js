import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ConvertPage, RatesPage } from './pages'
import { getExchangeRates } from './store/asyncActions/exchangeRates'

export const App = () => {
  const { baseCurrency } = useSelector((state) => state.baseCurrency)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getExchangeRates(baseCurrency))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/convert" />} />
        <Route path="/convert" element={<ConvertPage />} />
        <Route path="/all-rates" element={<RatesPage />} />
      </Routes>
    </BrowserRouter>
  )
}
