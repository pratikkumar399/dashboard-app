import { Bug, User, Wifi, AlertCircle } from "lucide-react"

export const notifications = [
  {
    id: 1,
    icon: Bug,
    message: "You have a bug that needs attention",
    time: "Just now",
    type: "error",
    iconColor: "bg-red-500/20 text-red-400"
  },
  {
    id: 2,
    icon: User,
    message: "New user registered",
    time: "59 minutes ago",
    type: "success",
    iconColor: "bg-green-500/20 text-green-400"
  },
  {
    id: 3,
    icon: AlertCircle,
    message: "System maintenance scheduled",
    time: "12 hours ago",
    type: "warning",
    iconColor: "bg-yellow-500/20 text-yellow-400"
  },
  {
    id: 4,
    icon: Wifi,
    message: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
    type: "info",
    iconColor: "bg-blue-500/20 text-blue-400"
  }
]
