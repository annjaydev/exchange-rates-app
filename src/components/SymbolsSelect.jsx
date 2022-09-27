import { Option } from 'antd/lib/mentions'
import React from 'react'

import { StyledSelect } from './StyledComponents'

export const SymbolsSelect = ({
  onChange,
  options = [],
  placeholder = '',
  value,
}) => (
  <StyledSelect placeholder={placeholder} value={value} onChange={onChange}>
    {Object.keys(options).map((key) => (
      <Option key={key} value={key}>
        {options[key]}
      </Option>
    ))}
  </StyledSelect>
)
