import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";

// This would come from your database in production
const featuredPosts = [
  {
    id: "1",
    title: "10 Morning Rituals That Will Transform Your Life",
    excerpt: "Discover the power of intentional morning routines and how they can set the tone for a productive, fulfilling day.",
    coverImage: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=500&fit=crop",
    author: "Sarah Johnson",
    category: "Wellness",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    slug: "morning-rituals-transform-life",
  },
  {
    id: "2",
    title: "Minimalist Travel: Pack Light, Travel Right",
    excerpt: "Learn the art of minimalist packing and how to travel the world with just a carry-on bag.",
    coverImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop",
    author: "Michael Chen",
    category: "Travel",
    publishedAt: "2024-01-14",
    readTime: "7 min read",
    slug: "minimalist-travel-pack-light",
  },
  {
    id: "3",
    title: "Sustainable Fashion: Style Meets Responsibility",
    excerpt: "Explore how to build a sustainable wardrobe without compromising on style or breaking the bank.",
    coverImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=500&fit=crop",
    author: "Emma Wilson",
    category: "Fashion",
    publishedAt: "2024-01-13",
    readTime: "6 min read",
    slug: "sustainable-fashion-style",
  },
];

const recentPosts = [
  {
    id: "4",
    title: "The Art of Mindful Eating",
    excerpt: "Transform your relationship with food through mindfulness and intentional eating practices.",
    category: "Wellness",
    publishedAt: "2024-01-12",
    readTime: "4 min read",
    slug: "art-mindful-eating",
  },
  {
    id: "5",
    title: "Home Office Setup Ideas for Maximum Productivity",
    excerpt: "Create the perfect work-from-home environment with these practical and aesthetic tips.",
    category: "Lifestyle",
    publishedAt: "2024-01-11",
    readTime: "5 min read",
    slug: "home-office-setup",
  },
  {
    id: "6",
    title: "Digital Detox: Finding Balance in a Connected World",
    excerpt: "Learn how to create healthy boundaries with technology and reclaim your time.",
    category: "Wellness",
    publishedAt: "2024-01-10",
    readTime: "6 min read",
    slug: "digital-detox-balance",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
              Live Your Best Life
            </h1>
            <p className="text-xl text-muted-foreground">
              Inspiring stories, wellness tips, travel adventures, and lifestyle content
              to help you create the life you love.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/blog">
                <Button size="lg" className="gap-2">
                  Explore Articles <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Inspired
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly inspiration, tips, and exclusive content
              delivered straight to your inbox.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button size="lg" variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
