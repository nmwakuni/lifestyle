import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash2, Eye } from "lucide-react";

export default function PostsPage() {
  // In production, fetch from database
  const posts = [
    {
      id: "1",
      title: "10 Morning Rituals That Will Transform Your Life",
      slug: "morning-rituals-transform-life",
      published: true,
      featured: true,
      views: 1234,
      createdAt: "2024-01-15",
    },
    {
      id: "2",
      title: "Minimalist Travel: Pack Light, Travel Right",
      slug: "minimalist-travel-pack-light",
      published: true,
      featured: false,
      views: 892,
      createdAt: "2024-01-14",
    },
    {
      id: "3",
      title: "Sustainable Fashion: Style Meets Responsibility",
      slug: "sustainable-fashion-style",
      published: false,
      featured: false,
      views: 0,
      createdAt: "2024-01-13",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Posts</h1>
          <p className="text-muted-foreground">
            Manage your blog posts
          </p>
        </div>
        <Link href="/admin/posts/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Post
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Posts</CardTitle>
          <CardDescription>
            {posts.length} total posts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{post.title}</h3>
                    {post.featured && (
                      <span className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>/{post.slug}</span>
                    <span className={post.published ? "text-green-600" : "text-yellow-600"}>
                      {post.published ? "Published" : "Draft"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {post.views} views
                    </span>
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link href={`/admin/posts/${post.id}/edit`}>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
