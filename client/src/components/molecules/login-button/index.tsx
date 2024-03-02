import { SignedOut } from '@clerk/clerk-react'
import { Button } from 'antd'
import { BaseButtonProps } from 'antd/es/button/button'
import { FC, Fragment, useState } from 'react'

import LoginModal from 'src/components/molecules/login-modal'

interface ILoginButtonProps extends BaseButtonProps {
  label?: string
  style?: React.CSSProperties
}

const LoginButton: FC<ILoginButtonProps> = ({ label, type, ...rest }) => {
  const [_showLoginModal, setShowLoginModal] = useState(false)

  const handleShow = () => {
    setShowLoginModal(true)
  }

  const handleCancel = () => {
    setShowLoginModal(false)
  }

  return (
    <Fragment>
      <SignedOut>
        <Button type={type} onClick={handleShow} {...rest}>
          {label}
        </Button>
        <LoginModal handleCancel={handleCancel} show={_showLoginModal} />
      </SignedOut>
    </Fragment>
  )
}

LoginButton.defaultProps = {
  label: 'Sign In',
  type: 'primary'
}

export default LoginButton
