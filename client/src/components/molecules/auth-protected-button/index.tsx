import LoginButton from '../login-button'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { FC, Fragment, ReactNode } from 'react'

import OButton, { IOButtonProps } from 'src/components/atoms/button'

interface IAuthProtectedButtonProps extends IOButtonProps {
  shouldSignIn?: boolean
  signedInLabel?: string | ReactNode
  signedOutLabel?: string | ReactNode
}

const AuthProtectedButton: FC<IAuthProtectedButtonProps> = ({
  shouldSignIn,
  signedInLabel,
  signedOutLabel,
  ...rest
}) => {
  return (
    <Fragment>
      <SignedIn>
        <OButton {...rest} label={signedInLabel} />
      </SignedIn>
      <SignedOut>
        {shouldSignIn ? (
          <LoginButton {...rest} label={signedOutLabel} />
        ) : (
          <OButton {...rest} label={signedOutLabel} />
        )}
      </SignedOut>
    </Fragment>
  )
}

export default AuthProtectedButton
