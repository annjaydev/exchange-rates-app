import AntTable from 'antd/lib/table'
import styled from 'styled-components'
import { colors } from './styles'

const StyledTable = styled(AntTable)`
  .anticon-left svg,
  .anticon-right svg,
  .anticon-down svg {
    font-size: 15px;
    color: ${colors.svgColor};
  }

  .anticon-down svg {
    margin-top: 5px;
    color: ${colors.svgColor};
  }

  .anticon {
    color: ${colors.svgColor};
  }

  .ant-pagination-item-active,
  .ant-pagination-item:hover {
    border-color: ${colors.svgColor};
  }

  .ant-pagination-item-active a,
  .ant-pagination-item a:hover,
  .ant-pagination-item:hover a {
    color: ${colors.svgColor};
  }
`

export const Table = ({ columns, data }) => (
  <StyledTable columns={columns} dataSource={data} />
)
