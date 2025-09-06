"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, LayoutDashboard, Upload, Map, Layers, Brain, FileText, ArrowRight, Clock, Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuickActionsProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (section: string) => void
}

const quickActions = [
  {
    id: "dashboard",
    title: "Dashboard",
    description: "View key metrics and analytics",
    icon: LayoutDashboard,
    category: "Navigation",
    shortcut: "⌘1",
  },
  {
    id: "upload",
    title: "Upload Documents",
    description: "Process FRA claims with AI",
    icon: Upload,
    category: "Navigation",
    shortcut: "⌘2",
  },
  {
    id: "webgis",
    title: "WebGIS Atlas",
    description: "Interactive mapping interface",
    icon: Map,
    category: "Navigation",
    shortcut: "⌘3",
  },
  {
    id: "asset-mapping",
    title: "Asset Mapping",
    description: "Satellite imagery analysis",
    icon: Layers,
    category: "Navigation",
    shortcut: "⌘4",
  },
  {
    id: "decision-support",
    title: "Decision Support",
    description: "AI-powered recommendations",
    icon: Brain,
    category: "Navigation",
    shortcut: "⌘5",
  },
  {
    id: "reports",
    title: "Reports & Analytics",
    description: "Comprehensive insights",
    icon: FileText,
    category: "Navigation",
    shortcut: "⌘6",
  },
]

const recentActions = [
  { title: "Processed MP_FRA_001.pdf", time: "2 minutes ago" },
  { title: "Generated Odisha Progress Report", time: "15 minutes ago" },
  { title: "Updated Telangana Asset Map", time: "1 hour ago" },
]

export function QuickActions({ isOpen, onClose, onNavigate }: QuickActionsProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)

  const filteredActions = quickActions.filter(
    (action) =>
      action.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      action.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("")
      setSelectedIndex(0)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          setSelectedIndex((prev) => Math.min(prev + 1, filteredActions.length - 1))
          break
        case "ArrowUp":
          e.preventDefault()
          setSelectedIndex((prev) => Math.max(prev - 1, 0))
          break
        case "Enter":
          e.preventDefault()
          if (filteredActions[selectedIndex]) {
            handleActionSelect(filteredActions[selectedIndex].id)
          }
          break
        case "Escape":
          onClose()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, filteredActions, selectedIndex])

  const handleActionSelect = (actionId: string) => {
    onNavigate(actionId)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 gap-0">
        <DialogHeader className="p-4 pb-2">
          <DialogTitle className="flex items-center space-x-2">
            <Search className="w-5 h-5" />
            <span>Quick Actions</span>
          </DialogTitle>
        </DialogHeader>

        <div className="px-4 pb-2">
          <Input
            placeholder="Search actions, navigate, or type a command..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 text-base"
            autoFocus
          />
        </div>

        <div className="max-h-96 overflow-y-auto">
          {filteredActions.length > 0 && (
            <div className="p-2">
              <div className="text-xs font-medium text-muted-foreground px-2 py-1 mb-1">Navigation</div>
              {filteredActions.map((action, index) => (
                <Button
                  key={action.id}
                  variant="ghost"
                  className={cn("w-full justify-start h-auto p-3 mb-1", index === selectedIndex && "bg-muted")}
                  onClick={() => handleActionSelect(action.id)}
                >
                  <div className="flex items-center space-x-3 w-full">
                    <div className="w-8 h-8 rounded-md bg-[var(--gov-blue)]/10 flex items-center justify-center">
                      <action.icon className="w-4 h-4 text-[var(--gov-blue)]" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium">{action.title}</div>
                      <div className="text-sm text-muted-foreground">{action.description}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {action.shortcut}
                      </Badge>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          )}

          {searchQuery === "" && (
            <div className="p-2 border-t">
              <div className="text-xs font-medium text-muted-foreground px-2 py-1 mb-1 flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>Recent</span>
              </div>
              {recentActions.map((action, index) => (
                <div key={index} className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-muted">
                  <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center">
                    <Star className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{action.title}</div>
                    <div className="text-xs text-muted-foreground">{action.time}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredActions.length === 0 && searchQuery !== "" && (
            <div className="p-8 text-center text-muted-foreground">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No actions found for "{searchQuery}"</p>
            </div>
          )}
        </div>

        <div className="p-3 border-t bg-muted/30 text-xs text-muted-foreground">
          <div className="flex items-center justify-between">
            <span>Use ↑↓ to navigate, ↵ to select, esc to close</span>
            <div className="flex items-center space-x-4">
              <span>⌘K to open</span>
              <span>⌘1-6 for quick nav</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
