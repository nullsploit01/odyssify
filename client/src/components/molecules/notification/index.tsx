import { notification, NotificationArgsProps } from 'antd'
import { FC, Fragment, useEffect } from 'react'

type NotificationType = 'success' | 'info' | 'warning' | 'error'

export interface INotificationProps extends NotificationArgsProps {
  type: NotificationType
  message: string
  description: string
  show?: boolean
}

const Notification: FC<INotificationProps> = ({ type, message, description, show, ...rest }) => {
  const [api, contextHolder] = notification.useNotification()

  useEffect(() => {
    if (show) {
      showNotification()
    }
  }, [show])

  const showNotification = () => {
    api[type]({
      message,
      description,
      ...rest
    })
  }

  return <Fragment>{contextHolder}</Fragment>
}

Notification.defaultProps = {
  show: false,
  duration: 3
}

export default Notification
