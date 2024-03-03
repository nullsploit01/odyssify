import { SignedOut } from '@clerk/clerk-react'
import { Button } from 'antd'
import { FC, Fragment, useState } from 'react'

import { IOButtonProps } from 'src/components/atoms/button'
import LoginModal from 'src/components/molecules/login-modal'

interface ILoginButtonProps extends IOButtonProps {}

const LoginButton: FC<ILoginButtonProps> = ({ label, ...rest }) => {
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
        <Button {...rest} onClick={handleShow}>
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
