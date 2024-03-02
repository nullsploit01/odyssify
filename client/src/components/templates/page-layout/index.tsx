import { SignedIn, UserButton } from '@clerk/clerk-react'
import { Divider, Layout, Typography } from 'antd'
import { FC, PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

import LoginButton from 'src/components/molecules/login-button'
import { PATHS } from 'src/router/routes/paths'

const { Header, Content, Footer } = Layout

const { Title } = Typography

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate()
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <Title onClick={() => navigate(PATHS.HOME_PAGE)} style={{ cursor: 'pointer' }} level={3}>
            Odyssify
          </Title>
        </div>
        <div>
          <div>
            <SignedIn>
              <UserButton afterSignOutUrl={PATHS.HOME_PAGE} />
            </SignedIn>
          </div>
          <div style={{ display: 'flex', placeItems: 'center' }}>
            <LoginButton />
          </div>
        </div>
      </Header>
      <Divider />
      <Content style={{ minHeight: '100%' }}>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>
        ©{new Date().getFullYear()} Created by NullSploit
      </Footer>
    </Layout>
  )
}

export default PageLayout
