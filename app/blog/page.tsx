import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Science Behind Habit Formation",
      excerpt: "Discover how our AI-powered platform leverages the latest neuroscience research to help you build lasting habits.",
      category: "Science",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      image: "/blog/habit-science.jpg",
    },
    {
      title: "5 Common Habit Building Mistakes to Avoid",
      excerpt: "Learn about the most common pitfalls in habit building and how Aura Habits' AI helps you navigate around them.",
      category: "Tips",
      date: "Mar 12, 2024",
      readTime: "4 min read",
      image: "/blog/habit-mistakes.jpg",
    },
    {
      title: "The Power of AI in Personal Development",
      excerpt: "Explore how artificial intelligence is revolutionizing the way we approach personal growth and habit formation.",
      category: "Technology",
      date: "Mar 8, 2024",
      readTime: "6 min read",
      image: "/blog/ai-development.jpg",
    },
    {
      title: "Building Habits That Last: A Comprehensive Guide",
      excerpt: "A deep dive into the strategies and techniques that make habit building successful in the long term.",
      category: "Guide",
      date: "Mar 5, 2024",
      readTime: "8 min read",
      image: "/blog/lasting-habits.jpg",
    },
  ]

  const categories = ["All", "Science", "Tips", "Technology", "Guide", "Success Stories"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cloud-white via-neon-sky/5 to-cloud-white">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-electric-indigo/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-electric-indigo/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-sky/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 py-8 relative">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-electric-indigo hover:text-electric-indigo/80 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-midnight-charcoal mb-4">
              Insights for Your{" "}
              <span className="relative inline-block">
                Journey
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-hot-coral to-neon-sky rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-xl text-midnight-charcoal/70">
              Expert advice, research, and stories to help you build better habits.
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                index === 0
                  ? "bg-electric-indigo text-white"
                  : "bg-electric-indigo/10 text-electric-indigo hover:bg-electric-indigo/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-electric-indigo/5 border border-electric-indigo/10 hover:border-electric-indigo/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video bg-electric-indigo/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-indigo/20 to-hot-coral/20"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-midnight-charcoal/60">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    <span>{post.category}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-midnight-charcoal mb-2 group-hover:text-electric-indigo transition-colors">
                  {post.title}
                </h2>

                <p className="text-midnight-charcoal/70 mb-4">{post.excerpt}</p>

                <div className="flex items-center gap-2 text-electric-indigo group-hover:text-electric-indigo/80 transition-colors">
                  <span className="font-medium">Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 