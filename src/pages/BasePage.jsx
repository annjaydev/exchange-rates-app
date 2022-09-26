import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { baseCurrencyAction } from '../store/reducers/baseCurrencyReducer'
import { getExchangeRates } from '../store/asyncActions/exchangeRates'
import { LayoutSider } from '../components/Sider'
import { SymbolsSelect } from '../components/SymbolsSelect'
import { SYMBOLS } from '../constants'
import Typography from 'antd/lib/typography'
import Col from 'antd/lib/col'
import Row from 'antd/lib/row'

const { Title } = Typography

export const BasePage = ({ children, title }) => {
  const { baseCurrency } = useSelector((state) => state.baseCurrency)
  const dispatch = useDispatch()

  const handleChangeBaseCurrency = (e) => {
    dispatch(baseCurrencyAction(e))
    dispatch(getExchangeRates(e))
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
            onChange={(e) => handleChangeBaseCurrency(e)}
            options={SYMBOLS}
          />
        </Col>
      </Row>
      {children}
    </LayoutSider>
  )
}
