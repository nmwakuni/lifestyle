import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Eye, TrendingUp, Folder } from "lucide-react";

export default function AdminDashboard() {
  // In production, fetch these from your database
  const stats = [
    {
      name: "Total Posts",
      value: "24",
      description: "Published articles",
      icon: FileText,
      color: "text-blue-500",
    },
    {
      name: "Total Views",
      value: "12,543",
      description: "All time views",
      icon: Eye,
      color: "text-green-500",
    },
    {
      name: "Avg. Read Time",
      value: "5.2 min",
      description: "Across all posts",
      icon: TrendingUp,
      color: "text-purple-500",
    },
    {
      name: "Categories",
      value: "8",
      description: "Active categories",
      icon: Folder,
      color: "text-orange-500",
    },
  ];

  const recentPosts = [
    { title: "10 Morning Rituals", status: "Published", views: 1234 },
    { title: "Minimalist Travel Guide", status: "Published", views: 892 },
    { title: "Sustainable Fashion", status: "Draft", views: 0 },
    { title: "Mindful Eating", status: "Published", views: 654 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your blog.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.name}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
          <CardDescription>
            Your latest blog posts and their performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="flex-1">
                  <p className="font-medium">{post.title}</p>
                  <p className="text-sm text-muted-foreground">
                    Status:{" "}
                    <span
                      className={
                        post.status === "Published"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }
                    >
                      {post.status}
                    </span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{post.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Create New Post</CardTitle>
            <CardDescription>
              Start writing a new blog post
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Manage Categories</CardTitle>
            <CardDescription>
              Organize your content categories
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
