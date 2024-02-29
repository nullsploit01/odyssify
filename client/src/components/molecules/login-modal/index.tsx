import { SignedOut, SignIn } from '@clerk/clerk-react'
import { Modal } from 'antd'
import { FC, Fragment } from 'react'

interface ILoginModalProps {
  show: boolean
  handleCancel: () => void
}

const LoginModal: FC<ILoginModalProps> = ({ show, handleCancel }) => {
  return (
    <Fragment>
      <SignedOut>
        <Modal
          closeIcon={null}
          footer={null}
          centered
          mask
          destroyOnClose
          onCancel={handleCancel}
          open={show}
        >
          <SignIn />
        </Modal>
      </SignedOut>
    </Fragment>
  )
}

LoginModal.defaultProps = {
  show: false
}

export default LoginModal
