import { Search, Filter, Star, Calendar, MessageSquare } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MentorshipPage() {
  return (
    <div className="pt-20 pb-16">
      <section className="bg-navy text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Mentorship Connections</h1>
            <p className="text-lg text-gray-300 mb-8">
              Connect with industry experts for guidance or become a mentor to share your knowledge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Find a Mentor
              </Button>
              <Button size="lg" variant="outline" className="border-gray-400 text-white hover:bg-navy-light">
                Become a Mentor
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search mentors by name, skill, or industry..."
                className="pl-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-1">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
              <Tabs defaultValue="mentors" className="w-auto">
                <TabsList>
                  <TabsTrigger value="mentors">Mentors</TabsTrigger>
                  <TabsTrigger value="mentees">Mentees</TabsTrigger>
                  <TabsTrigger value="programs">Programs</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Alex Morgan",
                role: "Senior UX Designer",
                company: "DesignHub",
                expertise: ["UI/UX", "Design Systems", "User Research"],
                rating: 4.9,
                reviews: 28,
                availability: "2 slots available",
              },
              {
                name: "Sarah Chen",
                role: "Frontend Architect",
                company: "TechCorp",
                expertise: ["React", "TypeScript", "Performance"],
                rating: 4.8,
                reviews: 34,
                availability: "1 slot available",
              },
              {
                name: "Michael Rodriguez",
                role: "Product Lead",
                company: "InnovateLabs",
                expertise: ["Product Strategy", "UX", "Team Leadership"],
                rating: 4.7,
                reviews: 22,
                availability: "3 slots available",
              },
              {
                name: "Emma Wilson",
                role: "UX Researcher",
                company: "UserInsight",
                expertise: ["User Testing", "Research Methods", "Accessibility"],
                rating: 4.9,
                reviews: 19,
                availability: "2 slots available",
              },
              {
                name: "David Kim",
                role: "Frontend Developer",
                company: "WebSolutions",
                expertise: ["JavaScript", "CSS", "Animation"],
                rating: 4.6,
                reviews: 15,
                availability: "1 slot available",
              },
              {
                name: "Olivia Martinez",
                role: "Brand Designer",
                company: "CreativeStudio",
                expertise: ["Brand Identity", "Typography", "Color Theory"],
                rating: 4.8,
                reviews: 26,
                availability: "2 slots available",
              },
            ].map((mentor, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12 border-2 border-teal-500">
                      <AvatarImage
                        src={`/placeholder.svg?height=48&width=48&text=${mentor.name.charAt(0)}`}
                        alt={mentor.name}
                      />
                      <AvatarFallback className="bg-navy-light text-white">{mentor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">{mentor.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {mentor.role} at {mentor.company}
                      </CardDescription>
                      <div className="flex items-center gap-1 mt-1 text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-medium">{mentor.rating}</span>
                        <span className="text-gray-500 dark:text-gray-400">({mentor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.expertise.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-teal-600 dark:text-teal-400">
                      <Calendar className="w-4 h-4" />
                      <span>{mentor.availability}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <MessageSquare className="w-4 h-4" />
                      <span>1:1 or Group</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">Request Mentorship</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
