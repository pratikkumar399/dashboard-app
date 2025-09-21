
import { 
  Search, 
  Clock, 
  Bell, 
  Star,
  PanelRightIcon
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

interface AppHeaderProps {
  onToggleRightSidebar: () => void
}

export function AppHeader({ onToggleRightSidebar }: AppHeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
      {/* Team Selector */}
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
      </div>

      {/* Navigation Breadcrumbs */}
      <div className="flex items-center gap-2 ml-4">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Star className="h-4 w-4" />
        </Button>
        <span className="text-sm text-muted-foreground">Dashboards</span>
        <span className="text-sm text-muted-foreground">/</span>
        <span className="text-sm font-medium">Default</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Search and Utility Icons */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="pl-8 w-64"
          />
        </div>
        
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <ThemeToggle />
        </Button>
        
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Clock className="h-4 w-4" />
        </Button>
        
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Bell className="h-4 w-4" />
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-9 w-9"
          onClick={onToggleRightSidebar}
        >
          <PanelRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}
