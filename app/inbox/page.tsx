import {
  Search,
  MessageSquare,
  Phone,
  Video,
  MoreHorizontal,
  Send,
  Paperclip,
  Smile,
  ImageIcon,
  File,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InboxPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="container px-4 mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden min-h-[calc(100vh-10rem)]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="md:col-span-1 border-r border-gray-200 dark:border-gray-700">
              <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Inbox</h1>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search messages..."
                    className="pl-10 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                  />
                </div>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="unread">Unread</TabsTrigger>
                    <TabsTrigger value="archived">Archived</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="mt-0 space-y-2">
                    {[
                      {
                        name: "Alex Morgan",
                        avatar: "/placeholder.svg?height=40&width=40&text=AM",
                        message: "Hey, I saw your latest project. It looks amazing!",
                        time: "2m ago",
                        unread: true,
                        online: true,
                      },
                      {
                        name: "Sarah Chen",
                        avatar: "/placeholder.svg?height=40&width=40&text=SC",
                        message: "Can we schedule a call to discuss the design system?",
                        time: "1h ago",
                        unread: true,
                        online: false,
                      },
                      {
                        name: "Michael Rodriguez",
                        avatar: "/placeholder.svg?height=40&width=40&text=MR",
                        message: "I've shared some resources about product strategy with you.",
                        time: "3h ago",
                        unread: false,
                        online: true,
                      },
                      {
                        name: "Emma Wilson",
                        avatar: "/placeholder.svg?height=40&width=40&text=EW",
                        message: "Thanks for your feedback on the user research report!",
                        time: "5h ago",
                        unread: false,
                        online: false,
                      },
                      {
                        name: "David Kim",
                        avatar: "/placeholder.svg?height=40&width=40&text=DK",
                        message: "Do you have time to review my code this week?",
                        time: "1d ago",
                        unread: false,
                        online: false,
                      },
                    ].map((conversation, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
                          index === 0 ? "bg-gray-50 dark:bg-gray-700" : ""
                        } ${conversation.unread ? "font-medium" : ""}`}
                      >
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                            <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          {conversation.online && (
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-baseline">
                            <p className="truncate">{conversation.name}</p>
                            <p className="text-xs text-gray-500">{conversation.time}</p>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{conversation.message}</p>
                        </div>
                        {conversation.unread && (
                          <Badge className="bg-teal-500 text-white h-2 w-2 rounded-full p-0 min-w-0" />
                        )}
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="unread" className="mt-0">
                    <div className="p-4 text-center text-gray-500">
                      <MessageSquare className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                      <p>Your unread messages will appear here</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="archived" className="mt-0">
                    <div className="p-4 text-center text-gray-500">
                      <MessageSquare className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                      <p>Your archived messages will appear here</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Chat Area */}
            <div className="md:col-span-2 lg:col-span-3 flex flex-col h-[calc(100vh-10rem)]">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40&text=AM" alt="Alex Morgan" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Alex Morgan</p>
                    <p className="text-xs text-green-500">Online</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Phone className="w-5 h-5" />
                    <span className="sr-only">Call</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="w-5 h-5" />
                    <span className="sr-only">Video Call</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-5 h-5" />
                    <span className="sr-only">More Options</span>
                  </Button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="flex items-end gap-2 max-w-[80%]">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32&text=AM" alt="Alex Morgan" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <p>Hey, I saw your latest project. It looks amazing!</p>
                    <p className="text-xs text-gray-500 mt-1">2:34 PM</p>
                  </div>
                </div>

                <div className="flex items-end gap-2 max-w-[80%] ml-auto flex-row-reverse">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="You" />
                    <AvatarFallback>You</AvatarFallback>
                  </Avatar>
                  <div className="bg-teal-500 text-white rounded-lg p-3">
                    <p>Thanks! I've been working on it for a while. Really happy with how it turned out.</p>
                    <p className="text-xs text-teal-100 mt-1">2:36 PM</p>
                  </div>
                </div>

                <div className="flex items-end gap-2 max-w-[80%]">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32&text=AM" alt="Alex Morgan" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <p>
                      I especially liked the user interface. The animations are so smooth. How did you approach the
                      design process?
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2:38 PM</p>
                  </div>
                </div>

                <div className="flex items-end gap-2 max-w-[80%] ml-auto flex-row-reverse">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="You" />
                    <AvatarFallback>You</AvatarFallback>
                  </Avatar>
                  <div className="bg-teal-500 text-white rounded-lg p-3">
                    <p>
                      I started with user research to understand the pain points, then created wireframes and
                      prototypes. The animations were added later to enhance the experience.
                    </p>
                    <p className="text-xs text-teal-100 mt-1">2:40 PM</p>
                  </div>
                </div>

                <div className="flex items-end gap-2 max-w-[80%]">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32&text=AM" alt="Alex Morgan" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <p>That's a solid approach. Would you be interested in collaborating on a project together?</p>
                    <p className="text-xs text-gray-500 mt-1">2:42 PM</p>
                  </div>
                </div>

                <div className="text-center text-xs text-gray-500 my-4">
                  <span>Today, 2:45 PM</span>
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="w-5 h-5" />
                    <span className="sr-only">Attach File</span>
                  </Button>
                  <Input
                    placeholder="Type a message..."
                    className="flex-1 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                  />
                  <Button variant="ghost" size="icon">
                    <Smile className="w-5 h-5" />
                    <span className="sr-only">Add Emoji</span>
                  </Button>
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                    <Send className="w-5 h-5" />
                    <span className="sr-only">Send Message</span>
                  </Button>
                </div>
                <div className="flex gap-2 mt-2">
                  <Button variant="ghost" size="sm" className="text-xs text-gray-500">
                    <ImageIcon className="w-4 h-4 mr-1" />
                    Photo
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs text-gray-500">
                    <File className="w-4 h-4 mr-1" />
                    Document
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
