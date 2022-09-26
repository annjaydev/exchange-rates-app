import React from 'react'

import { StyledInput } from './StyledComponents'

export const CurrencyInput = ({
  disabled = false,
  onChange,
  suffix = '',
  value,
}) => {
  return (
    <StyledInput
      disabled={disabled}
      min={0}
      onChange={(e) => onChange(e.target.value)}
      suffix={suffix}
      type="number"
      value={value}
    />
  )
}
