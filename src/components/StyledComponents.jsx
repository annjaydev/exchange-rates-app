import styled from 'styled-components'
import { Input, Select } from 'antd/lib'

export const StyledInput = styled(Input)`
  height: 32px;
  margin: 15px 0px;
`

export const StyledSelect = styled(Select)`
  margin: 15px 0px;
  width: 100%;

  .anticon-down svg {
    font-size: 15px;
    margin-top: 5px;
  }
`
