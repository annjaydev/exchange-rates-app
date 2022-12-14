import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FireOutlined, FireFilled } from '@ant-design/icons'
import { Table } from '../components'

import { BasePage } from './BasePage'
import { BASE_COLUMNS, RATES_PAGE_TITLE, SYMBOLS } from '../constants'
import { compareCurrencies, getNewFavoriteCurrencies } from '../functions'
import { favoritesAction } from '../store/reducers/favoritesReducer'

export const RatesPage = () => {
  const { exchangeRates } = useSelector((state) => state.exchangeRates)
  const { favorites } = useSelector((state) => state.favorites)

  const dispatch = useDispatch()

  const handleChangeFavorites = (currencyCode) => {
    const newFavorites = getNewFavoriteCurrencies(favorites, currencyCode)

    dispatch(favoritesAction(newFavorites))
  }

  const getTableColumns = () => [
    ...BASE_COLUMNS,
    {
      title: 'Favorites',
      key: 'action',
      render: (row) =>
        favorites.includes(row.key) ? (
          <FireFilled onClick={() => handleChangeFavorites(row.key)} />
        ) : (
          <FireOutlined onClick={() => handleChangeFavorites(row.key)} />
        ),
      width: '10%',
    },
  ]

  const getTableRow = (code) => ({
    key: code,
    currency: SYMBOLS[code],
    code: code,
    rate: (1 / exchangeRates[code]).toFixed(4),
  })

  const getTableData = () => {
    const favoritesPart = favorites.map((code) => getTableRow(code))

    const othersPart = Object.keys(exchangeRates)
      .filter((key) => !favorites.includes(key))
      .map((key) => getTableRow(key))

    return favoritesPart.sort(compareCurrencies).concat(othersPart)
  }

  return (
    <BasePage title={RATES_PAGE_TITLE}>
      <Table columns={getTableColumns()} data={getTableData()} />
    </BasePage>
  )
}
