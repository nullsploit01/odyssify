import Button, { ButtonProps } from 'antd/es/button/button'
import { FC, Fragment, ReactNode } from 'react'

export interface IOButtonProps extends ButtonProps {
  label?: string | ReactNode
  style?: React.CSSProperties
}

const OButton: FC<IOButtonProps> = ({ label, ...rest }) => {
  return <Fragment>{!!label && <Button {...rest}>{label}</Button>}</Fragment>
}

export default OButton
