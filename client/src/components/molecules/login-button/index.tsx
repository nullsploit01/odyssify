import { SignedOut } from '@clerk/clerk-react'
import { Button } from 'antd'
import { ButtonType } from 'antd/es/button'
import { FC, Fragment, useState } from 'react'

import LoginModal from 'src/components/molecules/login-modal'

interface ILoginButtonProps {
  label?: string
  type?: ButtonType
}

const LoginButton: FC<ILoginButtonProps> = ({ label, type }) => {
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
        <Button type={type} onClick={handleShow}>
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
