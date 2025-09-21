import { 
  User, 
  Settings, 
  Users, 
  FileText, 
  MessageCircle,
  ShoppingCart,
  PieChart, 
  Folder, 
  BookOpen,
  ShoppingBag
} from "lucide-react"

export const pages = [
  {
    title: "Dashboard",
    url: "/",
    icon: User,
    isActive: false // This will be determined dynamically
  },
  {
    title: "Orders",
    url: "/orders",
    icon: ShoppingCart,
    isActive: false // This will be determined dynamically
  },
  {
    title: "Developer Profile",
    url: "#",
    icon: User,
    isExpanded: true,
    items: [
      { title: "Overview", url: "#" },
      { title: "Projects", url: "#" },
      { title: "Campaigns", url: "#" },
      { title: "Documents", url: "#" },
      { title: "Followers", url: "#" },
    ],
  },
  {
    title: "Account",
    url: "#",
    icon: Settings,
  },
  {
    title: "Corporate",
    url: "#",
    icon: Users,
  },
  {
    title: "Blog",
    url: "#",
    icon: FileText,
  },
  {
    title: "Social",
    url: "#",
    icon: MessageCircle,
  },
]

export const dashboards = [
  { 
    title: "Default", 
    url: "#", 
    icon: PieChart, 
    isActive: true 
  },
  { 
    title: "eCommerce", 
    url: "#", 
    icon: ShoppingBag 
  },
  { 
    title: "Projects", 
    url: "#", 
    icon: Folder 
  },
  { 
    title: "Online Courses", 
    url: "#", 
    icon: BookOpen 
  },
]
