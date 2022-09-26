import React from 'react'
import Select from 'antd/lib/select'

import { StyledSelect } from './StyledComponents'

export const SymbolsSelect = ({
  onChange,
  options = [],
  placeholder = '',
  value,
}) => {
  return (
    <StyledSelect
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
      style={{
        width: '100%',
      }}
    >
      {Object.keys(options).map((key) => (
        <Select.Option key={key} value={key}>
          {options[key]}
        </Select.Option>
      ))}
    </StyledSelect>
  )
}
