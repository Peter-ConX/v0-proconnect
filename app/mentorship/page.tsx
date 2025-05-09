"use client"

import { useState } from "react"
import { Search, Filter, Calendar, Star, MessageSquare, User, ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for mentors
const mentors = [
  {
    id: "1",
    name: "Okafor Chidera",
    avatar: "/images/profile-picture.jpeg",
    role: "Founder, C.E.O of Proconnect",
    expertise: ["Leadership", "Product Strategy", "Business Development"],
    experience: "10+ years",
    rating: 4.9,
    reviews: 24,
    availability: "10 hours/week",
    price: "Free",
  },
  {
    id: "2",
    name: "Alex Morgan",
    avatar: "/placeholder.svg?height=64&width=64&text=AM",
    role: "Senior UX Designer",
    expertise: ["UI/UX Design", "Design Systems", "User Research"],
    experience: "8 years",
    rating: 4.8,
    reviews: 36,
    availability: "5 hours/week",
    price: "$75/hour",
  },
  {
    id: "3",
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=64&width=64&text=SC",
    role: "Frontend Architect",
    expertise: ["React", "TypeScript", "Performance Optimization"],
    experience: "7 years",
    rating: 4.7,
    reviews: 29,
    availability: "8 hours/week",
    price: "$85/hour",
  },
  {
    id: "4",
    name: "David Kim",
    avatar: "/placeholder.svg?height=64&width=64&text=DK",
    role: "Product Manager",
    expertise: ["Product Strategy", "Agile", "Go-to-Market"],
    experience: "9 years",
    rating: 4.9,
    reviews: 42,
    availability: "6 hours/week",
    price: "$90/hour",
  },
]

// Mock data for mentorship programs
const programs = [
  {
    id: "1",
    title: "UX Design Career Accelerator",
    description: "A 3-month program to help you master UX design principles and build a portfolio that stands out.",
    mentor: {
      name: "Alex Morgan",
      avatar: "/placeholder.svg?height=64&width=64&text=AM",
      role: "Senior UX Designer",
    },
    duration: "3 months",
    startDate: "July 1, 2023",
    spots: 5,
    price: "$499",
    skills: ["UI/UX", "Figma", "User Research", "Prototyping"],
  },
  {
    id: "2",
    title: "Frontend Development Mastery",
    description: "Learn advanced frontend development techniques and best practices from an industry expert.",
    mentor: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=64&width=64&text=SC",
      role: "Frontend Architect",
    },
    duration: "2 months",
    startDate: "August 15, 2023",
    spots: 8,
    price: "$399",
    skills: ["React", "TypeScript", "Performance", "Architecture"],
  },
  {
    id: "3",
    title: "Product Management Fundamentals",
    description: "Master the core skills needed to excel as a product manager in today's competitive market.",
    mentor: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=64&width=64&text=DK",
      role: "Product Manager",
    },
    duration: "6 weeks",
    startDate: "July 10, 2023",
    spots: 10,
    price: "$349",
    skills: ["Product Strategy", "User Stories", "Roadmapping", "Analytics"],
  },
]

export default function MentorshipPage() {
  const [activeTab, setActiveTab] = useState("find-mentor")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedExpertise, setSelectedExpertise] = useState("all")

  // Filter mentors based on search query and expertise
  const filteredMentors = mentors.filter((mentor) => {
    const expertiseMatch = selectedExpertise === "all" || mentor.expertise.includes(selectedExpertise)
    const searchMatch =
      searchQuery === "" ||
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some((exp) => exp.toLowerCase().includes(searchQuery.toLowerCase()))

    return expertiseMatch && searchMatch
  })

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Mentorship</h1>
          <p className="text-gray-500 mb-6">Connect with industry experts to accelerate your professional growth</p>

          <Tabs defaultValue="find-mentor" className="mb-6" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 max-w-md">
              <TabsTrigger value="find-mentor">Find a Mentor</TabsTrigger>
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="my-mentorships">My Mentorships</TabsTrigger>
            </TabsList>

            <TabsContent value="find-mentor" className="mt-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search mentors by name, role, or expertise..."
                    className="pl-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Select value={selectedExpertise} onValueChange={setSelectedExpertise}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Expertise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Expertise</SelectItem>
                      <SelectItem value="Leadership">Leadership</SelectItem>
                      <SelectItem value="Product Strategy">Product Strategy</SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      <SelectItem value="React">React</SelectItem>
                      <SelectItem value="TypeScript">TypeScript</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    More Filters
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredMentors.map((mentor) => (
                  <Card key={mentor.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
                          <AvatarFallback className="bg-sky-700 text-white">{mentor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg">{mentor.name}</CardTitle>
                              <CardDescription>{mentor.role}</CardDescription>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                              <span className="ml-1 font-medium">{mentor.rating}</span>
                              <span className="text-sm text-gray-500 ml-1">({mentor.reviews})</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {mentor.expertise.map((exp, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300"
                          >
                            {exp}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Experience</p>
                          <p className="font-medium">{mentor.experience}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Availability</p>
                          <p className="font-medium">{mentor.availability}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Rate</p>
                          <p className="font-medium">{mentor.price}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="gap-2 mr-2">
                        <MessageSquare className="h-4 w-4" />
                        Message
                      </Button>
                      <Button className="bg-sky-500 hover:bg-sky-600 text-white flex-1">Request Mentorship</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="programs" className="mt-6">
              <div className="grid grid-cols-1 gap-6">
                {programs.map((program) => (
                  <Card key={program.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{program.title}</CardTitle>
                          <CardDescription className="mt-1">{program.description}</CardDescription>
                        </div>
                        <Badge className="bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300">
                          {program.spots} spots left
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={program.mentor.avatar || "/placeholder.svg"} alt={program.mentor.name} />
                          <AvatarFallback className="bg-sky-700 text-white">
                            {program.mentor.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{program.mentor.name}</p>
                          <p className="text-sm text-gray-500">{program.mentor.role}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {program.skills.map((skill, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="border-sky-500 text-sky-600 dark:text-sky-400"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Duration</p>
                          <p className="font-medium">{program.duration}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Start Date</p>
                          <p className="font-medium">{program.startDate}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Price</p>
                          <p className="font-medium">{program.price}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" className="gap-2">
                        <ChevronRight className="h-4 w-4" />
                        Learn More
                      </Button>
                      <Button className="bg-sky-500 hover:bg-sky-600 text-white">Apply Now</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="my-mentorships" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="mb-2 bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300">Active</Badge>
                        <CardTitle className="text-lg">Product Leadership Mentorship</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/images/profile-picture.jpeg" alt="Okafor Chidera" />
                        <AvatarFallback className="bg-sky-700 text-white">OC</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Okafor Chidera</p>
                        <p className="text-sm text-gray-500">Founder, C.E.O of Proconnect</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-gray-500">Started</p>
                        <p className="font-medium">May 15, 2023</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Next Session</p>
                        <p className="font-medium">June 12, 2023</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">Focus Areas</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline" className="border-sky-500 text-sky-600 dark:text-sky-400">
                          Product Strategy
                        </Badge>
                        <Badge variant="outline" className="border-sky-500 text-sky-600 dark:text-sky-400">
                          Leadership
                        </Badge>
                        <Badge variant="outline" className="border-sky-500 text-sky-600 dark:text-sky-400">
                          Career Growth
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="gap-2 mr-2">
                      <Calendar className="h-4 w-4" />
                      Schedule Session
                    </Button>
                    <Button className="bg-sky-500 hover:bg-sky-600 text-white flex-1">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-none shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="mb-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                          Completed
                        </Badge>
                        <CardTitle className="text-lg">UX Design Fundamentals</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40&text=AM" alt="Alex Morgan" />
                        <AvatarFallback className="bg-sky-700 text-white">AM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Alex Morgan</p>
                        <p className="text-sm text-gray-500">Senior UX Designer</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-gray-500">Started</p>
                        <p className="font-medium">Feb 10, 2023</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Completed</p>
                        <p className="font-medium">May 5, 2023</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">Focus Areas</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline" className="border-sky-500 text-sky-600 dark:text-sky-400">
                          UI/UX Design
                        </Badge>
                        <Badge variant="outline" className="border-sky-500 text-sky-600 dark:text-sky-400">
                          User Research
                        </Badge>
                        <Badge variant="outline" className="border-sky-500 text-sky-600 dark:text-sky-400">
                          Prototyping
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="gap-2 mr-2">
                      <User className="h-4 w-4" />
                      View Profile
                    </Button>
                    <Button className="bg-sky-500 hover:bg-sky-600 text-white flex-1">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
