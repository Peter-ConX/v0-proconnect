"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Home, Compass, Briefcase, Target, Users, Lightbulb, Activity, Inbox, User, Search, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Update the navItems array to reflect the new structure
const navItems = [
  { name: "Home", href: "/home", icon: Home },
  { name: "Build", href: "/build", icon: Briefcase },
  { name: "Discover", href: "/discover", icon: Compass },
  { name: "Showcase", href: "/showcase", icon: Briefcase },
  { name: "Missions", href: "/missions", icon: Target },
  { name: "Co-Lab", href: "/co-lab", icon: Users },
  { name: "Mentorship", href: "/mentorship", icon: Lightbulb },
  { name: "Pulse", href: "/pulse", icon: Activity },
  { name: "Inbox", href: "/inbox", icon: Inbox },
  { name: "Profile", href: "/profile", icon: User },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-navy/90",
      )}
    >
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image src="/images/proconnect-logo.png" alt="Proconnect" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold text-white">Proconnect</span>
          </Link>

          <div
            className={cn(
              "relative hidden md:flex items-center transition-all duration-300 ease-in-out",
              searchFocused ? "w-80" : "w-64",
            )}
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search people, skills, missions..."
              className="pl-10 bg-navy-light border-navy-light text-white placeholder:text-gray-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive ? "text-teal-400 bg-navy-light" : "text-gray-300 hover:text-white hover:bg-navy-light",
                )}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-navy border-navy-light">
              <div className="flex flex-col gap-6 mt-6">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium transition-colors",
                        isActive ? "text-teal-400 bg-navy-light" : "text-gray-300 hover:text-white hover:bg-navy-light",
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* User Profile */}
        <div className="hidden lg:flex items-center">
          <Button variant="ghost" size="icon" className="text-white mr-2">
            <div className="relative">
              <Inbox className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-coral-500 text-[10px] font-medium text-white">
                3
              </span>
            </div>
          </Button>
          <Avatar className="border-2 border-teal-500">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
            <AvatarFallback className="bg-navy-light text-white">JP</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
