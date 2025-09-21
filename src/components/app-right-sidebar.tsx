"use client"

import { X } from "lucide-react"

import { RightSidebarNotifications } from "@/components/right-sidebar-notifications"
import { RightSidebarActivities } from "@/components/right-sidebar-activities"
import { RightSidebarContacts } from "@/components/right-sidebar-contacts"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

interface AppRightSidebarProps {
  open?: boolean
  onClose?: () => void
}

export function AppRightSidebar({ open = false, onClose }: AppRightSidebarProps) {
  const isMobile = useIsMobile()

  const sidebarContent = (
    <div className="flex h-full flex-col">
      <div className="border-b border-sidebar-border">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold text-sidebar-foreground">Activity Panel</h2>
          {onClose && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto bg-sidebar">
        <div className="space-y-6 p-4">
          <RightSidebarNotifications />
          <div className="border-t border-sidebar-border pt-6">
            <RightSidebarActivities />
          </div>
          <div className="border-t border-sidebar-border pt-6">
            <RightSidebarContacts />
          </div>
        </div>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onClose}>
        <SheetContent
          side="right"
          className="bg-sidebar text-sidebar-foreground w-80 p-0 [&>button]:hidden"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Activity Panel</SheetTitle>
            <SheetDescription>Displays the mobile activity panel.</SheetDescription>
          </SheetHeader>
          {sidebarContent}
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className={cn(
        "bg-sidebar text-sidebar-foreground flex h-full flex-col border-l border-sidebar-border transition-all duration-300 ease-in-out",
        open ? "w-80 opacity-100" : "w-0 opacity-0 overflow-hidden"
      )}
    >
      <div className={cn(
        "flex h-full flex-col transition-opacity duration-200",
        open ? "opacity-100" : "opacity-0"
      )}>
        {sidebarContent}
      </div>
    </div>
  )
}
