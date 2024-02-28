import './index.css'
import { SignedOut, SignInButton } from '@clerk/clerk-react'
import { Button, Layout } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { PATHS } from 'src/router/routes/paths'

const HomePage: FC = () => {
  const APP_NAME = 'ODYSSIFY'
  const navigate = useNavigate()

  return (
    <Layout.Content className="container">
      <div className="waviy">
        {APP_NAME.split('').map((char, idx) => {
          return (
            <span key={idx} style={{ '--i': idx + 1 } as React.CSSProperties}>
              {char}
            </span>
          )
        })}
      </div>
      <div className="subHeading">
        <h2>Plan a Trip With AI</h2>
      </div>
      <div>
        <Button onClick={() => navigate(PATHS.PLAN_PAGE)} size="large" type="link">
          Start Planning
        </Button>
        <SignedOut>
          <SignInButton>
            <Button size="large" type="primary">
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
      </div>
    </Layout.Content>
  )
}

export default HomePage
