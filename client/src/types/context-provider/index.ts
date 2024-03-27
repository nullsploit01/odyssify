export type NotificationType = 'success' | 'info' | 'warning' | 'error'

export interface INotification {
  message: string
  description?: string
  type: NotificationType
  show?: boolean
}

export interface INotificationContext {
  showNotification: (notification: INotification) => void
}
