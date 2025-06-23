import { Home, FolderKanban, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { ModeToggle } from "../ModeToggle"

interface NavigationProps {
  currentPath?: string
}

export function Navigation({ currentPath = "/" }: NavigationProps) {
  const navItems = [
    { icon: Home, href: "/", label: "Home" },
    { icon: FolderKanban, href: "/projects", label: "Projects" },
    { icon: BarChart3, href: "/stats", label: "Stats" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-4 px-4">
      <div className="mx-auto max-w-2xl">
        <nav className="bg-background/80 backdrop-blur-md border border-border rounded-full p-2 flex items-center justify-between shadow-lg">
          {/* Spacer to maintain layout balance */}
            <div className="w-8 mr-2"></div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-1">
            <TooltipProvider>
              {navItems.map((item, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Button
                      variant={currentPath === item.href ? "secondary" : "ghost"}
                      size="icon"
                      aria-label={item.label}
                      className={cn(
                        "rounded-full transition-all",
                        currentPath === item.href ? "scale-110" : ""
                      )}
                      asChild
                    >
                      <a href={item.href}>
                        <item.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>

          {/* Theme Toggle */}
          <ModeToggle  />
        </nav>
      </div>
    </div>
  )
}
