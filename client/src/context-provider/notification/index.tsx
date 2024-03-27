import { createContext, FC, PropsWithChildren, useState } from 'react'

import Notification from 'src/components/molecules/notification'
import { INotification, INotificationContext } from 'src/types/context-provider'

export const NotificationContext = createContext({} as INotificationContext)

export const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [_notification, setNotification] = useState<INotification>({} as INotification)

  const showNotification = ({ type = 'info', ...rest }: INotification) => {
    setNotification({ show: true, type, ...rest })
  }

  const hideNotification = () => {
    setNotification({ ..._notification, show: false })
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      <Notification
        onClose={hideNotification}
        show={_notification.show}
        type={_notification.type}
        message={_notification.message}
        description={_notification.description}
      />
      {children}
    </NotificationContext.Provider>
  )
}
