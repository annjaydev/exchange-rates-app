import React, { useState } from 'react'
import { RetweetOutlined } from '@ant-design/icons'
import { Col, Row, Tooltip } from 'antd/lib'
import { useSelector } from 'react-redux'
import qs from 'qs'

import { BasePage } from './BasePage'
import { CurrencyInput, SymbolsSelect } from '../components'
import { getApiData } from '../api/request'
import { getInitialConvertValue } from '../functions'
import {
  CONVERT_PAGE_TITLE,
  EXCHANGE_FROM_BASE_CURRENCY,
  SYMBOLS,
} from '../constants'

export const ConvertPage = () => {
  const { baseCurrency } = useSelector((state) => state.baseCurrency)
  const { exchangeRates } = useSelector((state) => state.exchangeRates)

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
      const urlParams = qs.stringify({ to, from, amount })

      getApiData(`/convert?${urlParams}`).then((response) =>
        setConvertTo((state) => ({
          ...state,
          amount: response.data.result.toFixed(4),
        })),
      )
    }
  }

  return (
    <BasePage title={CONVERT_PAGE_TITLE}>
      <Row justify="center" style={{ marginTop: '30px' }}>
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
      </Row>
    </BasePage>
  )
}
