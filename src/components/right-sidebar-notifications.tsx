"use client"

import { notifications } from "@/constants/notifications"

export function RightSidebarNotifications() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sidebar-foreground">Notifications</h3>
      </div>
      <div className="space-y-3">
        {notifications.map((notification) => {
          const Icon = notification.icon
          return (
            <div key={notification.id} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Icon className="w-4 h-4 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-sidebar-foreground leading-tight">
                  {notification.message}
                </p>
                <p className="text-xs text-sidebar-foreground/60 mt-1">
                  {notification.time}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

