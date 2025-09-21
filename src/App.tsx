import { AppHeader } from "@/components/app-header"
import { AppSidebar } from "@/components/app-sidebar"
import { AppRightSidebar } from "@/components/app-right-sidebar"
import { ThemeProvider } from "@/contexts/theme-context"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DashboardPage } from "./pages/DashboardPage"
import { OrdersPage } from "./pages/OrdersPage"
import { useState, useEffect } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

function App() {
  const isMobile = useIsMobile()
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false) // Start closed by default
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(!isMobile) // Open on desktop, closed on mobile

  // Update left sidebar state when mobile state changes
  useEffect(() => {
    setIsLeftSidebarOpen(!isMobile)
  }, [isMobile])

  return (
    <ThemeProvider defaultTheme="system" storageKey="dashboard-theme">
      <Router>
        <div className="h-screen flex flex-col">
          <SidebarProvider 
            open={isLeftSidebarOpen} 
            onOpenChange={setIsLeftSidebarOpen}
          >
            <div className="flex flex-1 min-h-0">
              <AppSidebar />
              <div className="flex flex-1 min-h-0">
                <SidebarInset className="flex-1 min-h-0 flex flex-col">
                  <AppHeader onToggleRightSidebar={() => setIsRightSidebarOpen(!isRightSidebarOpen)} />
                  <div className="flex-1 lg:overflow-auto overflow-x">
                    <Routes>
                      <Route path="/" element={<DashboardPage />} />
                      <Route path="/dashboard" element={<DashboardPage />} />
                      <Route path="/orders" element={<OrdersPage />} />
                    </Routes>
                  </div>
                </SidebarInset>
                <AppRightSidebar 
                  open={isRightSidebarOpen} 
                  onClose={() => setIsRightSidebarOpen(false)} 
                />
              </div>
            </div>
          </SidebarProvider>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App;
