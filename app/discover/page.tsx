import { Compass, Search, Filter, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DiscoverPage() {
  return (
    <div className="pt-20 pb-16">
      <section className="bg-navy text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover New Opportunities</h1>
            <p className="text-lg text-gray-300 mb-8">
              Explore trending content, connect with professionals, and find your next opportunity
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for people, skills, or content..."
                className="pl-10 py-6 bg-navy-light border-navy-light text-white placeholder:text-gray-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <h2 className="text-2xl font-bold">Explore Categories</h2>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-1">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
              <Tabs defaultValue="all" className="w-auto">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="people">People</TabsTrigger>
                  <TabsTrigger value="content">Content</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Technology",
                description: "Explore the latest in tech innovation and development",
                count: "2.4K posts",
                icon: Compass,
              },
              {
                title: "Design",
                description: "Discover UI/UX design trends and inspiration",
                count: "1.8K posts",
                icon: Compass,
              },
              {
                title: "Business",
                description: "Learn about entrepreneurship and business strategy",
                count: "1.2K posts",
                icon: Compass,
              },
              {
                title: "Marketing",
                description: "Explore digital marketing strategies and case studies",
                count: "980 posts",
                icon: Compass,
              },
              {
                title: "Data Science",
                description: "Discover insights in data analysis and machine learning",
                count: "1.5K posts",
                icon: Compass,
              },
              {
                title: "Career Development",
                description: "Find resources for professional growth and advancement",
                count: "2.1K posts",
                icon: Compass,
              },
            ].map((category, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400">
                      <category.icon className="w-5 h-5" />
                    </div>
                    <p className="text-sm text-gray-500">{category.count}</p>
                  </div>
                  <CardTitle className="mt-3">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full gap-1">
                    Explore <ArrowRight className="w-4 h-4" />
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
