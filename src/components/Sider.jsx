import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { DollarCircleOutlined, BarChartOutlined } from '@ant-design/icons'
import Layout from 'antd/lib/layout'
import Menu from 'antd/lib/menu'
import { colors } from './styles'

const { Sider, Content } = Layout

const StyledLayout = styled(Layout)`
  .ant-layout {
    min-height: 100vh;
  }

  section.ant-layout {
    background-color: ${colors.layoutColor};

    padding: 25px;
  }

  span[role='img'] {
    font-size: 22px;
  }
`

export const LayoutSider = ({ children }) => {
  const location = useLocation()

  return (
    <StyledLayout hasSider>
      <Sider trigger={null} collapsible>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={[
            {
              key: '/convert',
              icon: <DollarCircleOutlined />,
              label: <Link to="/convert">Convert</Link>,
            },
            {
              key: '/all-rates',
              icon: <BarChartOutlined />,
              label: <Link to="/all-rates">All Rates</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </StyledLayout>
  )
}
