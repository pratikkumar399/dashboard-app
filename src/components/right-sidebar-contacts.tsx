"use client"

import { MessageCircle, Phone, MoreHorizontal, Search, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { contacts } from "@/constants/contacts"

const getStatusColor = (status: string) => {
  switch (status) {
    case "online":
      return "bg-emerald-500"
    case "away":
      return "bg-amber-500"
    case "offline":
      return "bg-slate-400"
    default:
      return "bg-slate-400"
  }
}


export function RightSidebarContacts() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "online" | "away" | "offline">("all")

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         contact.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         contact.department.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || contact.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const onlineCount = contacts.filter(c => c.status === "online").length
  const awayCount = contacts.filter(c => c.status === "away").length
  const offlineCount = contacts.filter(c => c.status === "offline").length

  return (
    <div className="space-y-4">
      {/* Header with stats */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-sidebar-foreground/70" />
            <h3 className="font-semibold text-sidebar-foreground">Team Members</h3>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-sidebar-foreground/60 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded-full font-medium">
              {onlineCount} online
            </span>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="space-y-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-sidebar-foreground/40" />
            <Input
              placeholder="Search team members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-8 text-sm bg-sidebar-accent/30 border-sidebar-border focus:bg-sidebar-accent/50"
            />
          </div>
          
          {/* Status Filter Pills */}
          <div className="flex gap-1 flex-wrap">
            {[
              { key: "all", label: "All", count: contacts.length },
              { key: "online", label: "Online", count: onlineCount },
              { key: "away", label: "Away", count: awayCount },
              { key: "offline", label: "Offline", count: offlineCount }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setStatusFilter(filter.key as "all" | "online" | "away" | "offline")}
                className={`px-2 py-1 text-xs rounded-full transition-all duration-200 ${
                  statusFilter === filter.key
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "bg-sidebar-accent/50 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contacts List */}
      <div className="space-y-1 max-h-80 overflow-y-auto">
        {filteredContacts.length === 0 ? (
          <div className="text-center py-8 text-sidebar-foreground/50">
            <Users className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No team members found</p>
          </div>
        ) : (
          filteredContacts.map((contact) => (
            <div 
              key={contact.id} 
              className="group flex items-center gap-3 p-3 rounded-lg hover:bg-sidebar-accent/60 transition-all duration-200 hover:shadow-sm border border-transparent hover:border-sidebar-border/50"
            >
              <div className="relative flex-shrink-0">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-sidebar-border/20 group-hover:ring-sidebar-border/40 transition-all duration-200"
                />
                <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-sidebar ${getStatusColor(contact.status)} shadow-sm`}></div>
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate mb-1">
                  {contact.name}
                </p>
                <p className="text-xs text-sidebar-foreground/70 truncate mb-0.5">
                  {contact.role}
                </p>
                <p className="text-xs text-sidebar-foreground/50">
                  {contact.lastSeen}
                </p>
              </div>
              
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/80 transition-all duration-200"
                  title="Send message"
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/80 transition-all duration-200"
                  title="Call"
                >
                  <Phone className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/80 transition-all duration-200"
                  title="More options"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

