"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  Bookmark,
  Calendar,
  Clock,
  ImageIcon,
  LinkIcon,
  MessageSquare,
  MoreHorizontal,
  Repeat,
  Share2,
  Smile,
  ThumbsUp,
  TrendingUp,
  User,
  Search,
  MapPin,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
  const [postContent, setPostContent] = useState("")
  const [activeTab, setActiveTab] = useState("for-you")

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the post to the server
    console.log("Posting:", postContent)
    setPostContent("")
    // You could add the new post to a local state array to show it immediately
  }

  return (
    <div className="pt-20 pb-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Profile Card */}
          <div className="hidden lg:block">
            <Card className="border-none shadow-lg sticky top-24">
              <CardHeader className="flex flex-col items-center pb-2">
                <Avatar className="w-20 h-20 border-4 border-white shadow-sm">
                  <AvatarImage src="/images/profile-picture.jpeg" alt="@user" />
                  <AvatarFallback className="bg-sky-700 text-white">OC</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold">Okafor Chidera</h3>
                <p className="text-sm text-gray-500">Founder, C.E.O of Proconnect</p>
              </CardHeader>
              <Separator />
              <CardContent className="px-4 py-3">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Posts</p>
                    <p className="text-lg font-semibold">128</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Following</p>
                    <p className="text-lg font-semibold">542</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Followers</p>
                    <p className="text-lg font-semibold">1.2K</p>
                  </div>
                </div>
              </CardContent>
              <Separator />
              <CardFooter className="flex justify-center p-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/profile">View Profile</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Main Content - Feed */}
          <div className="lg:col-span-2">
            {/* Post Creation */}
            <Card className="border-none shadow-lg mb-6">
              <CardHeader className="pb-3">
                <div className="flex gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/images/profile-picture.jpeg" alt="@user" />
                    <AvatarFallback className="bg-sky-700 text-white">OC</AvatarFallback>
                  </Avatar>
                  <Textarea
                    placeholder="Share your professional insights..."
                    className="flex-1 resize-none focus-visible:ring-sky-500"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-sky-500">
                    <ImageIcon className="w-5 h-5" />
                    <span className="sr-only">Add Image</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-sky-500">
                    <LinkIcon className="w-5 h-5" />
                    <span className="sr-only">Add Link</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-sky-500">
                    <Smile className="w-5 h-5" />
                    <span className="sr-only">Add Emoji</span>
                  </Button>
                </div>
                <Button
                  className="bg-sky-500 hover:bg-sky-600 text-white"
                  onClick={handlePostSubmit}
                  disabled={!postContent.trim()}
                >
                  Post
                </Button>
              </CardFooter>
            </Card>

            {/* Feed Tabs */}
            <Tabs defaultValue="for-you" className="mb-6" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="for-you">For You</TabsTrigger>
                <TabsTrigger value="following">Following</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
              </TabsList>

              <TabsContent value="for-you" className="mt-4 space-y-6">
                {/* Posts */}
                {[
                  {
                    id: 1,
                    author: {
                      name: "Alex Morgan",
                      handle: "@alexmorgan",
                      avatar: "/placeholder.svg?height=40&width=40&text=AM",
                      role: "Senior UX Designer at DesignHub",
                    },
                    content:
                      "Just finished a major redesign project for a fintech client. The key insight: simplifying the onboarding flow increased conversion by 34%. Always test your assumptions!",
                    image: "/placeholder.svg?height=300&width=600",
                    time: "2 hours ago",
                    likes: 128,
                    comments: 24,
                    shares: 12,
                    isLiked: true,
                    isBookmarked: false,
                  },
                  {
                    id: 2,
                    author: {
                      name: "Sarah Chen",
                      handle: "@sarahchen",
                      avatar: "/placeholder.svg?height=40&width=40&text=SC",
                      role: "Frontend Architect at TechCorp",
                    },
                    content:
                      "🚀 Just published my new article on building performant React components. Check it out and let me know your thoughts!",
                    link: {
                      title: "Advanced React Performance Optimization Techniques",
                      url: "#",
                      image: "/placeholder.svg?height=200&width=400",
                    },
                    time: "5 hours ago",
                    likes: 86,
                    comments: 18,
                    shares: 32,
                    isLiked: false,
                    isBookmarked: true,
                  },
                  {
                    id: 3,
                    author: {
                      name: "Michael Rodriguez",
                      handle: "@mrodriguez",
                      avatar: "/placeholder.svg?height=40&width=40&text=MR",
                      role: "Product Lead at InnovateLabs",
                    },
                    content:
                      "Looking for a senior backend developer with experience in Node.js and GraphQL to join our team. Remote-friendly, competitive salary, and great benefits. DM me if interested!",
                    time: "1 day ago",
                    likes: 45,
                    comments: 8,
                    shares: 15,
                    isLiked: false,
                    isBookmarked: false,
                  },
                ].map((post) => (
                  <Card key={post.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between">
                        <div className="flex items-start gap-3">
                          <Avatar className="border">
                            <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                            <AvatarFallback className="bg-sky-700 text-white">
                              {post.author.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-1">
                              <p className="font-medium">{post.author.name}</p>
                              <p className="text-sm text-gray-500">{post.author.handle}</p>
                              <p className="text-sm text-gray-500">• {post.time}</p>
                            </div>
                            <p className="text-sm text-gray-500">{post.author.role}</p>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-gray-500">
                              <MoreHorizontal className="w-5 h-5" />
                              <span className="sr-only">More options</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <User className="w-4 h-4 mr-2" />
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Bookmark className="w-4 h-4 mr-2" />
                              Save Post
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <span>Report Post</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">{post.content}</p>
                      {post.image && (
                        <div className="mt-3 rounded-lg overflow-hidden">
                          <img src={post.image || "/placeholder.svg"} alt="Post attachment" className="w-full h-auto" />
                        </div>
                      )}
                      {post.link && (
                        <div className="mt-3 border rounded-lg overflow-hidden">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 h-40 md:h-auto bg-gray-100 dark:bg-gray-800">
                              <img
                                src={post.link.image || "/placeholder.svg"}
                                alt={post.link.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="md:w-2/3 p-4">
                              <h3 className="font-medium">{post.link.title}</h3>
                              <a
                                href={post.link.url}
                                className="text-sm text-sky-600 dark:text-sky-400 hover:underline mt-2 inline-block"
                              >
                                Read Article
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex gap-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`gap-1 ${
                            post.isLiked ? "text-sky-600 dark:text-sky-400" : "text-gray-600 dark:text-gray-300"
                          }`}
                        >
                          <ThumbsUp className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1 text-gray-600 dark:text-gray-300">
                          <MessageSquare className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="gap-1 text-gray-600 dark:text-gray-300">
                          <Repeat className="w-4 h-4" />
                          <span>{post.shares}</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className={`${
                            post.isBookmarked ? "text-sky-600 dark:text-sky-400" : "text-gray-600 dark:text-gray-300"
                          }`}
                        >
                          <Bookmark className="w-4 h-4" />
                          <span className="sr-only">Bookmark</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
                          <Share2 className="w-4 h-4" />
                          <span className="sr-only">Share</span>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="following" className="mt-4 space-y-6">
                {/* Following Tab Content */}
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between">
                      <div className="flex items-start gap-3">
                        <Avatar className="border">
                          <AvatarImage src="/placeholder.svg?height=40&width=40&text=EC" alt="Emma Clark" />
                          <AvatarFallback className="bg-sky-700 text-white">EC</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-1">
                            <p className="font-medium">Emma Clark</p>
                            <p className="text-sm text-gray-500">@emmaclark</p>
                            <p className="text-sm text-gray-500">• 3 hours ago</p>
                          </div>
                          <p className="text-sm text-gray-500">Product Designer at CreativeStudio</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-500">
                        <MoreHorizontal className="w-5 h-5" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="text-gray-800 dark:text-gray-200">
                      Excited to announce that I'll be speaking at the UX Conference next month about designing for
                      accessibility. Hope to see some of you there! #UXDesign #Accessibility
                    </p>
                    <div className="mt-3 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                        <span className="font-medium">UX Conference 2023</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>June 15-17, 2023 • San Francisco, CA</span>
                      </div>
                      <Button className="mt-3 bg-sky-500 hover:bg-sky-600 text-white">Register Now</Button>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-4">
                      <Button variant="ghost" size="sm" className="gap-1 text-gray-600 dark:text-gray-300">
                        <ThumbsUp className="w-4 h-4" />
                        <span>76</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1 text-gray-600 dark:text-gray-300">
                        <MessageSquare className="w-4 h-4" />
                        <span>12</span>
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="gap-1 text-gray-600 dark:text-gray-300">
                        <Repeat className="w-4 h-4" />
                        <span>8</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
                        <Bookmark className="w-4 h-4" />
                        <span className="sr-only">Bookmark</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
                        <Share2 className="w-4 h-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="trending" className="mt-4 space-y-6">
                {/* Trending Tab Content */}
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between">
                      <div className="flex items-start gap-3">
                        <Avatar className="border">
                          <AvatarImage src="/placeholder.svg?height=40&width=40&text=DK" alt="David Kim" />
                          <AvatarFallback className="bg-sky-700 text-white">DK</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-1">
                            <p className="font-medium">David Kim</p>
                            <p className="text-sm text-gray-500">@davidkim</p>
                            <p className="text-sm text-gray-500">• 1 day ago</p>
                          </div>
                          <p className="text-sm text-gray-500">Frontend Developer at TechInnovate</p>
                        </div>
                      </div>
                      <Badge className="bg-orange-500 text-white flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="text-gray-800 dark:text-gray-200">
                      I've been experimenting with the new React Server Components and they're a game-changer for
                      performance. Here's a thread on my findings and how you can start using them in your projects...
                      🧵👇
                    </p>
                    <div className="mt-3 rounded-lg overflow-hidden">
                      <img src="/placeholder.svg?height=300&width=600" alt="Code snippet" className="w-full h-auto" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-4">
                      <Button variant="ghost" size="sm" className="gap-1 text-sky-600 dark:text-sky-400">
                        <ThumbsUp className="w-4 h-4" />
                        <span>432</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1 text-gray-600 dark:text-gray-300">
                        <MessageSquare className="w-4 h-4" />
                        <span>87</span>
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="gap-1 text-gray-600 dark:text-gray-300">
                        <Repeat className="w-4 h-4" />
                        <span>156</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
                        <Bookmark className="w-4 h-4" />
                        <span className="sr-only">Bookmark</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
                        <Share2 className="w-4 h-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-8">
              <Button variant="outline" size="lg" className="gap-1">
                Load More
              </Button>
            </div>
          </div>

          {/* Right Sidebar - Trending & Suggestions */}
          <div className="hidden lg:block space-y-6">
            {/* Search */}
            <div className="relative">
              <Input
                type="search"
                placeholder="Search posts, people, topics..."
                className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            {/* Trending Topics */}
            <Card className="border-none shadow-lg">
              <CardHeader className="pb-3">
                <h3 className="text-lg font-semibold">Trending Topics</h3>
              </CardHeader>
              <CardContent className="px-4 py-0">
                <div className="space-y-4">
                  {[
                    { tag: "#ReactJS", posts: "2.4K posts" },
                    { tag: "#UXDesign", posts: "1.8K posts" },
                    { tag: "#AIinTech", posts: "3.2K posts" },
                    { tag: "#RemoteWork", posts: "1.5K posts" },
                    { tag: "#ProductManagement", posts: "980 posts" },
                  ].map((topic, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sky-600 dark:text-sky-400">{topic.tag}</p>
                        <p className="text-xs text-gray-500">{topic.posts}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Follow
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="ghost" className="w-full text-sky-600 dark:text-sky-400">
                  Show More
                </Button>
              </CardFooter>
            </Card>

            {/* Who to Follow */}
            <Card className="border-none shadow-lg">
              <CardHeader className="pb-3">
                <h3 className="text-lg font-semibold">Who to Follow</h3>
              </CardHeader>
              <CardContent className="px-4 py-0">
                <div className="space-y-4">
                  {[
                    {
                      name: "Lisa Johnson",
                      role: "Product Manager",
                      avatar: "/placeholder.svg?height=40&width=40&text=LJ",
                    },
                    {
                      name: "Mark Williams",
                      role: "UX Researcher",
                      avatar: "/placeholder.svg?height=40&width=40&text=MW",
                    },
                    {
                      name: "Sophia Garcia",
                      role: "Frontend Developer",
                      avatar: "/placeholder.svg?height=40&width=40&text=SG",
                    },
                  ].map((person, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="border">
                          <AvatarImage src={person.avatar || "/placeholder.svg"} alt={person.name} />
                          <AvatarFallback className="bg-sky-700 text-white">{person.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{person.name}</p>
                          <p className="text-xs text-gray-500">{person.role}</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-sky-500 hover:bg-sky-600 text-white">
                        Follow
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="ghost" className="w-full text-sky-600 dark:text-sky-400">
                  Show More
                </Button>
              </CardFooter>
            </Card>

            {/* Upcoming Events */}
            <Card className="border-none shadow-lg">
              <CardHeader className="pb-3">
                <h3 className="text-lg font-semibold">Upcoming Events</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Tech Conference 2023",
                      date: "May 15-17, 2023",
                      location: "San Francisco, CA",
                    },
                    {
                      title: "UX Design Workshop",
                      date: "June 5, 2023",
                      location: "Virtual",
                    },
                  ].map((event, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <p className="font-medium">{event.title}</p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{event.location}</span>
                      </div>
                      <Button size="sm" variant="outline" className="w-full mt-3">
                        Interested
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
