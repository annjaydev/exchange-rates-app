import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { baseCurrencyAction } from '../store/reducers/baseCurrencyReducer'
import { getExchangeRates } from '../store/asyncActions/exchangeRates'
import { LayoutSider, SymbolsSelect } from '../components'
import { SYMBOLS } from '../constants'
import { Col, Row, Typography } from 'antd/lib'

const { Title } = Typography

export const BasePage = ({ children, title }) => {
  const { baseCurrency } = useSelector((state) => state.baseCurrency)
  const dispatch = useDispatch()

  const handleChangeBaseCurrency = (baseCurrency) => {
    dispatch(baseCurrencyAction(baseCurrency))
    dispatch(getExchangeRates(baseCurrency))
  }

  return (
    <LayoutSider>
      <Row style={{ width: '100%' }}>
        <Col span={20}>
          <Title>{title}</Title>
        </Col>
        <Col span={4}>
          <SymbolsSelect
            placeholder="Base currency"
            value={baseCurrency}
            onChange={handleChangeBaseCurrency}
            options={SYMBOLS}
          />
        </Col>
      </Row>
      {children}
    </LayoutSider>
  )
}
