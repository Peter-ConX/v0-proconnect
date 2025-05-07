import {
  Activity,
  BarChart3,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Eye,
  ThumbsUp,
  MessageSquare,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PulsePage() {
  return (
    <div className="pt-20 pb-16">
      <section className="bg-navy text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Pulse Analytics</h1>
            <p className="text-lg text-gray-300 mb-8">
              Track your professional growth, content performance, and network engagement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                View Your Dashboard
              </Button>
              <Button size="lg" variant="outline" className="border-gray-400 text-white hover:bg-navy-light">
                Set Goals
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full max-w-md mx-auto mb-8 bg-white dark:bg-gray-800">
              <TabsTrigger value="overview" className="flex-1">
                Overview
              </TabsTrigger>
              <TabsTrigger value="content" className="flex-1">
                Content
              </TabsTrigger>
              <TabsTrigger value="network" className="flex-1">
                Network
              </TabsTrigger>
              <TabsTrigger value="skills" className="flex-1">
                Skills
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  {
                    title: "Profile Views",
                    value: "1,248",
                    change: "+12%",
                    trend: "up",
                    period: "vs. last month",
                    icon: Eye,
                  },
                  {
                    title: "Post Engagement",
                    value: "3,842",
                    change: "+24%",
                    trend: "up",
                    period: "vs. last month",
                    icon: ThumbsUp,
                  },
                  {
                    title: "New Connections",
                    value: "86",
                    change: "+8%",
                    trend: "up",
                    period: "vs. last month",
                    icon: Users,
                  },
                  {
                    title: "Skill Growth",
                    value: "4",
                    change: "-1",
                    trend: "down",
                    period: "vs. last month",
                    icon: Activity,
                  },
                ].map((stat, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800">
                          <stat.icon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <Badge
                          className={`flex items-center gap-1 ${
                            stat.trend === "up"
                              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                              : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                          }`}
                        >
                          {stat.trend === "up" ? (
                            <ArrowUpRight className="w-3 h-3" />
                          ) : (
                            <ArrowDownRight className="w-3 h-3" />
                          )}
                          {stat.change}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{stat.period}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Engagement Overview</CardTitle>
                    <CardDescription>Your content performance over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-md">
                    <BarChart3 className="w-16 h-16 text-gray-300" />
                    <p className="ml-4 text-gray-500">Chart visualization would appear here</p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Skill Development</CardTitle>
                    <CardDescription>Your progress in key skill areas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        { skill: "UI/UX Design", progress: 85, level: "Advanced" },
                        { skill: "Frontend Development", progress: 65, level: "Intermediate" },
                        { skill: "Product Management", progress: 45, level: "Intermediate" },
                        { skill: "Data Analysis", progress: 30, level: "Beginner" },
                      ].map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">{skill.skill}</span>
                            <span className="text-gray-500">{skill.level}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Progress value={skill.progress} className="h-2 flex-1" />
                            <span className="text-sm font-medium w-8">{skill.progress}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="content" className="mt-0">
              <Card className="border-none shadow-md mb-6">
                <CardHeader>
                  <CardTitle>Content Performance</CardTitle>
                  <CardDescription>How your posts and articles are performing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-md">
                    <BarChart3 className="w-16 h-16 text-gray-300" />
                    <p className="ml-4 text-gray-500">Content performance chart would appear here</p>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-xl font-bold mb-4">Top Performing Content</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "The Future of UI Design in 2023",
                    type: "Article",
                    views: 1245,
                    likes: 342,
                    comments: 56,
                    trend: "up",
                  },
                  {
                    title: "5 Tips for Better React Performance",
                    type: "Video",
                    views: 986,
                    likes: 278,
                    comments: 42,
                    trend: "up",
                  },
                  {
                    title: "How to Build a Design System from Scratch",
                    type: "Article",
                    views: 754,
                    likes: 198,
                    comments: 34,
                    trend: "down",
                  },
                ].map((content, index) => (
                  <Card key={index} className="border-none shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <Badge variant="outline" className="mb-2 border-teal-500 text-teal-600 dark:text-teal-400">
                            {content.type}
                          </Badge>
                          <h4 className="font-medium mb-2">{content.title}</h4>
                          <div className="flex gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{content.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="w-4 h-4" />
                              <span>{content.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              <span>{content.comments}</span>
                            </div>
                          </div>
                        </div>
                        <Badge
                          className={`flex items-center gap-1 ${
                            content.trend === "up"
                              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                              : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                          }`}
                        >
                          {content.trend === "up" ? (
                            <ArrowUpRight className="w-3 h-3" />
                          ) : (
                            <ArrowDownRight className="w-3 h-3" />
                          )}
                          {content.trend === "up" ? "+12%" : "-5%"}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="network" className="mt-0">
              <Card className="border-none shadow-md mb-6">
                <CardHeader>
                  <CardTitle>Network Growth</CardTitle>
                  <CardDescription>Your connections and engagement over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-md">
                    <TrendingUp className="w-16 h-16 text-gray-300" />
                    <p className="ml-4 text-gray-500">Network growth chart would appear here</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Connection Demographics</CardTitle>
                    <CardDescription>Breakdown of your professional network</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { category: "Design", percentage: 35 },
                        { category: "Development", percentage: 25 },
                        { category: "Product", percentage: 20 },
                        { category: "Marketing", percentage: 15 },
                        { category: "Other", percentage: 5 },
                      ].map((demo, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">{demo.category}</span>
                            <span className="text-gray-500">{demo.percentage}%</span>
                          </div>
                          <Progress value={demo.percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Engagement Rate</CardTitle>
                    <CardDescription>How your network interacts with your content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-60 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-md">
                      <Activity className="w-16 h-16 text-gray-300" />
                      <p className="ml-4 text-gray-500">Engagement chart would appear here</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">24%</p>
                        <p className="text-sm text-gray-500">Like Rate</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">12%</p>
                        <p className="text-sm text-gray-500">Comment Rate</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">8%</p>
                        <p className="text-sm text-gray-500">Share Rate</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="mt-0">
              <Card className="border-none shadow-md mb-6">
                <CardHeader>
                  <CardTitle>Skill Development</CardTitle>
                  <CardDescription>Your progress and growth in key professional skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-md">
                    <Activity className="w-16 h-16 text-gray-300" />
                    <p className="ml-4 text-gray-500">Skill development chart would appear here</p>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-xl font-bold mb-4">Skill Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    skill: "UI/UX Design",
                    level: "Advanced",
                    progress: 85,
                    endorsements: 24,
                    trend: "up",
                  },
                  {
                    skill: "Frontend Development",
                    level: "Intermediate",
                    progress: 65,
                    endorsements: 18,
                    trend: "up",
                  },
                  {
                    skill: "Product Management",
                    level: "Intermediate",
                    progress: 45,
                    endorsements: 12,
                    trend: "up",
                  },
                  {
                    skill: "Data Analysis",
                    level: "Beginner",
                    progress: 30,
                    endorsements: 8,
                    trend: "up",
                  },
                  {
                    skill: "Public Speaking",
                    level: "Intermediate",
                    progress: 60,
                    endorsements: 15,
                    trend: "down",
                  },
                  {
                    skill: "Leadership",
                    level: "Intermediate",
                    progress: 55,
                    endorsements: 20,
                    trend: "up",
                  },
                ].map((skill, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <CardTitle>{skill.skill}</CardTitle>
                        <Badge
                          className={`flex items-center gap-1 ${
                            skill.trend === "up"
                              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                              : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                          }`}
                        >
                          {skill.trend === "up" ? (
                            <ArrowUpRight className="w-3 h-3" />
                          ) : (
                            <ArrowDownRight className="w-3 h-3" />
                          )}
                          {skill.trend === "up" ? "+5%" : "-3%"}
                        </Badge>
                      </div>
                      <CardDescription>{skill.level}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-500">Progress</span>
                          <span className="font-medium">{skill.progress}%</span>
                        </div>
                        <Progress value={skill.progress} className="h-2" />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Endorsements</span>
                        <span className="font-medium">{skill.endorsements}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
