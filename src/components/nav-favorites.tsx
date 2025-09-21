import { useState } from "react"

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavFavorites() {
  const [activeTab, setActiveTab] = useState<"favorites" | "recently">("favorites")
  
  const favorites = [
    { title: "Overview", url: "#" },
    { title: "Projects", url: "#" },
  ]

  const recently = [
    { title: "Analytics", url: "#" },
    { title: "Settings", url: "#" },
  ]

  const currentItems = activeTab === "favorites" ? favorites : recently

  return (
    <SidebarGroup className="px-0">
      {/* Tab Navigation */}
      <div className="flex gap-0.5 px-3 mb-4 mt-2">
        <button
          onClick={() => setActiveTab("favorites")}
          className={`px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
            activeTab === "favorites"
              ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
              : "text-sidebar-foreground/50 hover:text-sidebar-foreground/80 hover:bg-sidebar-accent/50"
          }`}
        >
          Favorites
        </button>
        <button
          onClick={() => setActiveTab("recently")}
          className={`px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
            activeTab === "recently"
              ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
              : "text-sidebar-foreground/50 hover:text-sidebar-foreground/80 hover:bg-sidebar-accent/50"
          }`}
        >
          Recently
        </button>
      </div>

      {/* Menu Items */}
      <SidebarMenu className="px-1">
        {currentItems.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild className="px-2 py-2.5 hover:bg-sidebar-accent/50">
              <a href={item.url} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sidebar-foreground/30 flex-shrink-0" />
                <span className="text-sm font-semibold text-sidebar-foreground">{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
