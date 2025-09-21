"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="justify-start">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/api/placeholder/32/32" alt="ByeWind" />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 text-white text-xs font-semibold">
              BW
            </AvatarFallback>
          </Avatar>
          <span className="font-medium">ByeWind</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
