import { Spin, SpinProps, Typography } from 'antd'
import { FC, Fragment } from 'react'

interface ILoadingScreenProps extends SpinProps {
  show?: boolean
  label?: string
}

const LoadingScreen: FC<ILoadingScreenProps> = ({ show, label, ...rest }) => {
  return (
    <Fragment>
      {show && (
        <Fragment>
          <Spin fullscreen size="large" {...rest} />
          {label && <Typography>{label}</Typography>}
        </Fragment>
      )}
    </Fragment>
  )
}

export default LoadingScreen
