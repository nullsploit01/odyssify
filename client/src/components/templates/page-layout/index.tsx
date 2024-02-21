import { Divider, Layout, Typography } from 'antd'
import { FC, PropsWithChildren } from 'react'

const { Header, Content, Footer } = Layout

const { Title } = Typography

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Header Stuff */}
        <div>
          <Title level={3}>Odyssify</Title>
        </div>
      </Header>
      <Divider />
      <Content
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©{new Date().getFullYear()} Created by NullSploit
      </Footer>
    </Layout>
  )
}

export default PageLayout