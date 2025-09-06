"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard,
  Upload,
  Map,
  Layers,
  Brain,
  FileText,
  Bell,
  Settings,
  User,
  Search,
  Menu,
  X,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
  onQuickActionsOpen: () => void
}

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, shortcut: "1", color: "from-blue-500 to-blue-600" },
  { id: "upload", label: "Upload", icon: Upload, shortcut: "2", color: "from-green-500 to-green-600" },
  { id: "webgis", label: "WebGIS Atlas", icon: Map, shortcut: "3", color: "from-purple-500 to-purple-600" },
  { id: "asset-mapping", label: "Asset Mapping", icon: Layers, shortcut: "4", color: "from-orange-500 to-orange-600" },
  { id: "decision-support", label: "Decision Support", icon: Brain, shortcut: "5", color: "from-pink-500 to-pink-600" },
  { id: "reports", label: "Reports", icon: FileText, shortcut: "6", color: "from-indigo-500 to-indigo-600" },
]

export function Navigation({ activeSection, onSectionChange, onQuickActionsOpen }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [notificationCount, setNotificationCount] = useState(3)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        onQuickActionsOpen()
      }

      if ((e.metaKey || e.ctrlKey) && /^[1-6]$/.test(e.key)) {
        e.preventDefault()
        const item = navigationItems[Number.parseInt(e.key) - 1]
        if (item) onSectionChange(item.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [onSectionChange, onQuickActionsOpen])

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setNotificationCount((prev) => prev + 1)
      }
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "backdrop-blur-xl bg-white/80 border-b border-gray-200/50 shadow-lg py-1"
          : "bg-gradient-to-r from-white via-blue-50/30 to-white border-b border-gray-100 py-2",
      )}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="relative group">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-sm">🇮🇳</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className={cn("transition-all duration-300", isScrolled ? "hidden sm:block" : "block")}>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-none">
                    FRA Atlas
                  </h1>
                  <Badge
                    variant="secondary"
                    className="text-xs px-2 py-0.5 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 border-orange-300"
                  >
                    AI-Powered
                  </Badge>
                </div>
                <p className="text-xs text-gray-600 leading-none mt-0.5">Ministry of Tribal Affairs • Govt of India</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <Badge variant="outline" className="text-xs px-2 py-1 border-green-300 text-green-700 bg-green-50">
                <Zap className="w-3 h-3 mr-1" />
                SIH 2025
              </Badge>
              <Badge variant="outline" className="text-xs px-2 py-1 border-blue-300 text-blue-700 bg-blue-50">
                Live System
              </Badge>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id
              const isHovered = hoveredItem === item.id

              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => onSectionChange(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={cn(
                    "relative flex items-center space-x-2 transition-all duration-300 px-3 py-2 h-9 text-sm font-medium rounded-lg group",
                    isActive
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg shadow-blue-500/25 scale-105`
                      : "hover:bg-gray-50 hover:scale-105 text-gray-700",
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-4 h-4 transition-all duration-300",
                      isActive ? "text-white" : "text-gray-600 group-hover:text-gray-800",
                      isHovered && !isActive && "scale-110",
                    )}
                  />
                  <span
                    className={cn(
                      "transition-all duration-300",
                      isScrolled ? "hidden xl:inline" : "inline",
                      isActive ? "text-white font-semibold" : "text-gray-700",
                    )}
                  >
                    {item.label}
                  </span>
                  <kbd
                    className={cn(
                      "hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-xs font-medium transition-all duration-300",
                      isActive
                        ? "bg-white/20 text-white border-white/30"
                        : "bg-gray-100 text-gray-500 border-gray-200 group-hover:bg-gray-200",
                    )}
                  >
                    <span className="text-xs">⌘</span>
                    {item.shortcut}
                  </kbd>

                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                  )}
                </Button>
              )
            })}
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onQuickActionsOpen}
              className="hidden sm:flex items-center space-x-2 px-3 py-2 h-9 text-sm hover:bg-gray-50 hover:scale-105 transition-all duration-300 rounded-lg group"
            >
              <Search className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
              <span className="hidden lg:inline text-gray-700">Quick Actions</span>
              <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border bg-gray-100 px-1.5 font-mono text-xs font-medium text-gray-500 border-gray-200 group-hover:bg-gray-200 transition-all">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="relative px-3 py-2 h-9 hover:bg-gray-50 hover:scale-105 transition-all duration-300 rounded-lg group"
              onClick={() => setNotificationCount(0)}
            >
              <Bell className="w-4 h-4 text-gray-600 group-hover:text-orange-600 transition-colors" />
              {notificationCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white border-2 border-white animate-pulse">
                  {notificationCount > 9 ? "9+" : notificationCount}
                </Badge>
              )}
            </Button>

            <div className="flex items-center space-x-2 px-3 py-2 bg-green-50 rounded-lg border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-700 font-semibold hidden sm:inline">AI Online</span>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="px-3 py-2 h-9 hover:bg-gray-50 hover:scale-105 transition-all duration-300 rounded-lg group"
            >
              <User className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="px-3 py-2 h-9 hover:bg-gray-50 hover:scale-105 transition-all duration-300 rounded-lg group"
            >
              <Settings className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden px-3 py-2 h-9 hover:bg-gray-50 transition-all duration-300 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
            <div className="grid grid-cols-1 gap-2 mt-4">
              {navigationItems.map((item, index) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => {
                    onSectionChange(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={cn(
                    "flex items-center space-x-3 justify-start px-4 py-3 h-12 text-sm font-medium rounded-lg transition-all duration-300",
                    activeSection === item.id
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                      : "hover:bg-gray-50 text-gray-700",
                    "animate-in slide-in-from-left-2",
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                  {activeSection === item.id && (
                    <Badge variant="secondary" className="ml-auto bg-white/20 text-white border-white/30">
                      Active
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
