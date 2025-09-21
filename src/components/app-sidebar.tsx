"use client"

import * as React from "react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavDashboards } from "@/components/nav-dashboards"
import { NavPages } from "@/components/nav-pages"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites />
        <NavDashboards />
        <NavPages />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
