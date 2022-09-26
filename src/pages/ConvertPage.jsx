import React, { useState } from 'react'
import { RetweetOutlined } from '@ant-design/icons'
import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import Tooltip from 'antd/lib/tooltip'
import { useSelector } from 'react-redux'

import { BasePage } from './BasePage'
import { Container } from '../components/StyledComponents'
import { CurrencyInput } from '../components/Input'
import { SymbolsSelect } from '../components/SymbolsSelect'
import { getApiData } from '../api/functions/request'
import {
  CONVERT_PAGE_TITLE,
  EXCHANGE_FROM_BASE_CURRENCY,
  SYMBOLS,
} from '../constants'

export const ConvertPage = () => {
  const { baseCurrency } = useSelector((state) => state.baseCurrency)
  const { exchangeRates } = useSelector((state) => state.exchangeRates)

  const getInitialConvertValue = (amount, exchangeRate) =>
    (amount * exchangeRate).toFixed(4)

  const [convertFrom, setConvertFrom] = useState({
    currency: baseCurrency,
    amount: 1,
  })
  const [convertTo, setConvertTo] = useState({
    currency: EXCHANGE_FROM_BASE_CURRENCY,
    amount: getInitialConvertValue(
      convertFrom.amount,
      exchangeRates[EXCHANGE_FROM_BASE_CURRENCY],
    ),
  })

  const convertCurrency = (amount, from, to) => {
    if (from === baseCurrency) {
      setConvertTo((state) => ({
        ...state,
        amount: getInitialConvertValue(amount, exchangeRates[to]),
      }))
    } else {
      getApiData(`/convert?to=${to}&from=${from}&amount=${amount}`).then(
        (response) =>
          setConvertTo((state) => ({
            ...state,
            amount: response.data.result.toFixed(4),
          })),
      )
    }
  }

  return (
    <BasePage title={CONVERT_PAGE_TITLE}>
      <Container style={{ marginTop: '30px' }}>
        <Row justify="space-between" style={{ width: '100%' }}>
          <Col span={11}>
            <SymbolsSelect
              placeholder="Choose currency"
              value={convertFrom.currency}
              onChange={(e) =>
                setConvertFrom((state) => ({ ...state, currency: e }))
              }
              options={SYMBOLS}
            />
          </Col>
          <Col span={11}>
            <CurrencyInput
              onChange={(e) =>
                setConvertFrom((state) => ({ ...state, amount: e }))
              }
              suffix={convertFrom.currency}
              value={convertFrom.amount}
            />
          </Col>
        </Row>
        <Tooltip placement="topRight" title={'Convert the currencies'}>
          <RetweetOutlined
            style={{ fontSize: '40px' }}
            onClick={() =>
              convertCurrency(
                convertFrom.amount,
                convertFrom.currency,
                convertTo.currency,
              )
            }
          />
        </Tooltip>
        <Row justify="space-between" style={{ width: '100%' }}>
          <Col span={11}>
            <SymbolsSelect
              placeholder="Choose currency"
              value={convertTo.currency}
              onChange={(e) =>
                setConvertTo((state) => ({ ...state, currency: e }))
              }
              options={SYMBOLS}
            />
          </Col>
          <Col span={11}>
            <CurrencyInput
              disabled
              suffix={convertTo.currency}
              value={convertTo.amount}
            />
          </Col>
        </Row>
      </Container>
    </BasePage>
  )
}
