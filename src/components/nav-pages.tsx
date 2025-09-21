import { 
  ChevronDown, 
  ChevronRight
} from "lucide-react"
import { Link, useLocation } from "react-router-dom"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { pages } from "@/constants/navigation"

export function NavPages() {
  const location = useLocation();
  
  const pagesWithActiveState = pages.map(page => ({
    ...page,
    isActive: page.url === "/" ? (location.pathname === "/" || location.pathname === "/dashboard") : location.pathname === page.url
  }))

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="px-3 text-sidebar-foreground/70 text-xs font-semibold mb-2">Pages</SidebarGroupLabel>
      <SidebarMenu>
        {pagesWithActiveState.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isExpanded}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              {item.items ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title} className="flex items-center gap-3 relative w-full">
                      <ChevronDown className="h-4 w-4 text-sidebar-foreground/50 flex-shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                      <item.icon className="h-4 w-4 flex-shrink-0 text-sidebar-foreground" />
                      <span className="text-sm font-semibold text-sidebar-foreground flex-1">{item.title}</span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url} className="flex items-center gap-3 relative w-full">
                              <ChevronRight className="h-4 w-4 text-sidebar-foreground/50 flex-shrink-0" />
                              <span className="text-sm font-semibold text-sidebar-foreground flex-1">{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : (
                <SidebarMenuButton 
                  asChild 
                  className={item.isActive ? "bg-accent text-accent-foreground" : ""}
                >
                  {item.url.startsWith('/') ? (
                    <Link to={item.url} className="flex items-center gap-3 relative w-full">
                      <ChevronRight className="h-4 w-4 text-sidebar-foreground/50 flex-shrink-0" />
                      <item.icon className="h-4 w-4 flex-shrink-0 text-sidebar-foreground" />
                      <span className="text-sm font-semibold text-sidebar-foreground flex-1">{item.title}</span>
                    </Link>
                  ) : (
                    <a href={item.url} className="flex items-center gap-3 relative w-full">
                      <ChevronRight className="h-4 w-4 text-sidebar-foreground/50 flex-shrink-0" />
                      <item.icon className="h-4 w-4 flex-shrink-0 text-sidebar-foreground" />
                      <span className="text-sm font-semibold text-sidebar-foreground flex-1">{item.title}</span>
                    </a>
                  )}
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
