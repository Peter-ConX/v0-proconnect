import { Users, Search, Filter, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoLabPage() {
  return (
    <div className="pt-20 pb-16">
      <section className="bg-navy text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Co-Lab: Collaborative Projects</h1>
            <p className="text-lg text-gray-300 mb-8">
              Join forces with other professionals to build innovative solutions and expand your network
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Create a Co-Lab
              </Button>
              <Button size="lg" variant="outline" className="border-gray-400 text-white hover:bg-navy-light">
                Browse Projects
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
                placeholder="Search projects..."
                className="pl-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-1">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
              <Tabs defaultValue="all" className="w-auto">
                <TabsList>
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="recruiting">Recruiting</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Design System for SaaS Platform",
                team: "UI Component Team",
                members: 4,
                openRoles: ["UI Designer", "Frontend Developer"],
                duration: "6 weeks",
                status: "Recruiting",
                progress: 25,
              },
              {
                title: "Mobile App for Fitness Tracking",
                team: "FitTech Innovators",
                members: 3,
                openRoles: ["UX Researcher", "Mobile Developer"],
                duration: "8 weeks",
                status: "Recruiting",
                progress: 15,
              },
              {
                title: "E-commerce Platform Redesign",
                team: "Commerce UX Team",
                members: 5,
                openRoles: ["UI Designer", "UX Writer"],
                duration: "4 weeks",
                status: "Active",
                progress: 60,
              },
              {
                title: "AI-Powered Content Generator",
                team: "AI Innovation Lab",
                members: 4,
                openRoles: ["ML Engineer", "Backend Developer"],
                duration: "10 weeks",
                status: "Recruiting",
                progress: 10,
              },
              {
                title: "Dashboard for Analytics Platform",
                team: "Data Visualization Group",
                members: 3,
                openRoles: ["Data Scientist", "Frontend Developer"],
                duration: "5 weeks",
                status: "Active",
                progress: 45,
              },
              {
                title: "Accessibility Audit & Implementation",
                team: "Inclusive Design Team",
                members: 4,
                openRoles: ["Accessibility Expert", "Frontend Developer"],
                duration: "3 weeks",
                status: "Recruiting",
                progress: 5,
              },
            ].map((project, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Badge className="w-fit mb-2 bg-navy-light text-white">{project.status}</Badge>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>Team: {project.team}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  {project.progress > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-500 dark:text-gray-400">Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                  )}
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Open Roles:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.openRoles.map((role, i) => (
                        <Badge key={i} variant="outline" className="border-teal-500 text-teal-600 dark:text-teal-400">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{project.members} members</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-navy hover:bg-navy-dark text-white">
                    {project.status === "Recruiting" ? "Apply to Join" : "View Project"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
