import {
  SignedIn,
  SignedOut,
  SignUpButton,
  UserButton
} from '@clerk/clerk-react'
import { Button, Divider, Layout, Typography } from 'antd'
import { FC, PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

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
              <UserButton />
            </SignedIn>
          </div>
          <div style={{ display: 'flex', placeItems: 'center' }}>
            <SignedOut>
              <div>
                <SignUpButton>
                  <Button type="primary">Login</Button>
                </SignUpButton>
              </div>
            </SignedOut>
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
