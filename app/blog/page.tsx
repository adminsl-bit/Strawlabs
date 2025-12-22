import { TransitionLink } from "@/components/transition-link"
import { allPosts } from "@/lib/blog-posts"
import { ArticleCard } from "@/components/ui/blog-post-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Stay updated with our latest perspectives on AI strategy, industrial systems, and real-world adoption. Explore our research, whitepapers, and industry analysis.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tighter">Our Blog</h1>
          <p className="text-lg md:text-xl text-neutral-400 font-light">
            Stay updated with our latest perspectives on AI strategy, industrial systems, and real-world adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {allPosts.map((post, index) => (
            <div key={index} className="flex justify-center h-full">
              <TransitionLink
                href={`/blog/${post.slug}`}
                className="w-full flex"
              >
                <ArticleCard
                  headline={post.title}
                  excerpt={post.excerpt}
                  cover={post.cover}
                  tag={post.tag}
                  readingTime={post.readingTime}
                  writer={post.writer}
                  publishedAt={post.publishedAt}
                  clampLines={3}
                />
              </TransitionLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
