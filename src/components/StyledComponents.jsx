import styled from 'styled-components'
import Input from 'antd/lib/input'
import Select from 'antd/lib/select'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const StyledInput = styled(Input)`
  height: 32px;
  margin: 15px 0px;
`

export const StyledSelect = styled(Select)`
  margin: 15px 0px;

  .anticon-down svg {
    font-size: 15px;
    margin-top: 5px;
  }
`
