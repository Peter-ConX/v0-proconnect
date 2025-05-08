"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Briefcase, Compass, Award, Users, Lightbulb, BarChart2, Inbox, User, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const navItems = [
  { name: "Home", href: "/home", icon: Home },
  { name: "Build", href: "/build", icon: Briefcase },
  { name: "Discover", href: "/discover", icon: Compass },
  { name: "Showcase", href: "/showcase", icon: Award },
  { name: "Missions", href: "/missions", icon: Users },
  { name: "Co-Lab", href: "/co-lab", icon: Users },
  { name: "Mentorship", href: "/mentorship", icon: Lightbulb },
  { name: "Pulse", href: "/pulse", icon: BarChart2 },
  { name: "Inbox", href: "/inbox", icon: Inbox },
  { name: "Profile", href: "/profile", icon: User },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sky-100 border-b border-sky-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/home" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent">
              Proconnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${
                    isActive ? "bg-orange-500 text-white" : "text-sky-800 hover:bg-sky-200 hover:text-sky-900"
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-1.5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* User Menu (Desktop) */}
          <div className="hidden md:flex items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
              <AvatarFallback className="bg-sky-700 text-white">OC</AvatarFallback>
            </Avatar>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-sky-800"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sky-50">
          <div className="container mx-auto px-4 py-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium flex items-center ${
                    isActive ? "bg-orange-500 text-white" : "text-sky-800 hover:bg-sky-200 hover:text-sky-900"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
