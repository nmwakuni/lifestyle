import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

// In production, fetch from database
async function getPost(slug: string) {
  const posts = {
    "morning-rituals-transform-life": {
      id: "1",
      title: "10 Morning Rituals That Will Transform Your Life",
      slug: "morning-rituals-transform-life",
      excerpt: "Discover the power of intentional morning routines and how they can set the tone for a productive, fulfilling day.",
      content: `
        <h2>The Power of Morning Rituals</h2>
        <p>How you start your morning sets the tone for your entire day. After years of experimenting with different routines, I've discovered that the most successful people share one common trait: they're intentional about their mornings.</p>

        <h3>1. Wake Up at the Same Time Every Day</h3>
        <p>Consistency is key. Your body thrives on routine, and waking up at the same time helps regulate your circadian rhythm, leading to better sleep quality and more energy throughout the day.</p>

        <h3>2. Hydrate First Thing</h3>
        <p>Before reaching for coffee, drink a full glass of water. After 7-8 hours of sleep, your body is dehydrated. Water kickstarts your metabolism and helps flush out toxins.</p>

        <h3>3. Practice Gratitude</h3>
        <p>Spend 5 minutes writing down three things you're grateful for. This simple practice shifts your mindset from scarcity to abundance and sets a positive tone for the day.</p>

        <h3>4. Move Your Body</h3>
        <p>Whether it's yoga, a morning jog, or a simple stretch routine, getting your body moving increases blood flow, releases endorphins, and boosts your energy levels.</p>

        <h3>5. Eat a Nutritious Breakfast</h3>
        <p>Fuel your body with a balanced breakfast rich in protein, healthy fats, and complex carbohydrates. Your morning meal should energize, not weigh you down.</p>

        <p>Remember, building new habits takes time. Start with one or two rituals and gradually add more as they become part of your routine. The key is consistency, not perfection.</p>
      `,
      coverImage: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&h=600&fit=crop",
      author: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        bio: "Wellness coach and lifestyle blogger passionate about helping others live their best lives.",
      },
      category: "Wellness",
      publishedAt: "2024-01-15",
      readTime: "5 min read",
      viewCount: 1234,
    },
  };

  return posts[slug as keyof typeof posts] || null;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <article className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-muted-foreground mb-8">
                {post.excerpt}
              </p>
            )}

            {/* Author */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">
                  {post.author.bio}
                </p>
              </div>
            </div>

            {/* Cover Image */}
            {post.coverImage && (
              <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Share this article</h3>
              <div className="flex gap-4">
                <Button variant="outline">Twitter</Button>
                <Button variant="outline">Facebook</Button>
                <Button variant="outline">LinkedIn</Button>
                <Button variant="outline">Copy Link</Button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
