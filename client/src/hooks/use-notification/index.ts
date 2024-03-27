import { useContext } from 'react'

import { NotificationContext } from 'src/context-provider/notification'

export const useNotification = () => {
  const notificationContext = useContext(NotificationContext)

  if (!notificationContext) {
    throw new Error('Please use this hook under Notification Provider')
  }

  return notificationContext
}
