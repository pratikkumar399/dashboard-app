"use client"

import { activities } from "@/constants/activities"

export function RightSidebarActivities() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sidebar-foreground">Activities</h3>
      </div>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-sidebar-border"></div>
        
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="relative flex items-start gap-4">
              {/* Avatar */}
              <div className="relative z-10 flex-shrink-0">
                <img
                  src={activity.avatar}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground">
                  {activity.message}
                </p>
                <p className="text-xs text-sidebar-foreground/60 mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}