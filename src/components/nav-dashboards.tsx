import { 
  ChevronRight 
} from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { dashboards } from "@/constants/navigation"

export function NavDashboards() {

  return (
    <SidebarGroup className="px-0">
      <SidebarGroupLabel className="px-3 text-sidebar-foreground/70 text-xs font-semibold mb-2">
        Dashboards
      </SidebarGroupLabel>
      <SidebarMenu className="px-1">
        {dashboards.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton 
              asChild 
              className={`px-2 py-2.5 transition-all duration-200 ${
                item.isActive 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm relative" 
                  : "hover:bg-sidebar-accent/50"
              }`}
            >
              <a href={item.url} className="flex items-center gap-3 relative w-full">
                {!item.isActive && (
                  <ChevronRight className="h-4 w-4 text-sidebar-foreground/50 flex-shrink-0" />
                )}
                <item.icon className="h-4 w-4 flex-shrink-0 text-sidebar-foreground" />
                <span className={`text-sm flex-1 ${item.isActive ? 'text-sidebar-accent-foreground font-semibold' : 'text-sidebar-foreground font-semibold'}`}>
                  {item.title}
                </span>
                {/* Active indicator - purple left border */}
                {item.isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-purple-500 rounded-r-full" />
                )}
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
