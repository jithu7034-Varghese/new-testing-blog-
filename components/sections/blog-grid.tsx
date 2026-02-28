"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"

// Mock Data
const BLOG_POSTS = [
    {
        id: 1,
        title: "The Architecture of Modern Web Design",
        excerpt: "Exploring the fundamental principles that make digital experiences feel invisible yet impactful.",
        category: "Design",
        date: "Oct 12, 2026",
        readTime: "5 min read",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Building Glassmorphism UIs in React",
        excerpt: "A deep dive into creating performant, beautiful glass-like interfaces using Tailwind CSS.",
        category: "Development",
        date: "Sep 28, 2026",
        readTime: "8 min read",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "The Psychology of Minimalism",
        excerpt: "Why less is genuinely more when it comes to user retention and cognitive load.",
        category: "UX/UI",
        date: "Aug 15, 2026",
        readTime: "4 min read",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
}

export function BlogGrid() {
    return (
        <section id="blog" className="py-24 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Latest Stories.</h2>
                        <p className="text-muted-foreground text-lg">Insights on design, code, and the future of digital experiences.</p>
                    </div>
                    <Link href="#" className="hidden md:inline-flex items-center text-primary font-medium hover:underline underline-offset-4 decoration-primary/50">
                        View all posts <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {BLOG_POSTS.map((post) => (
                        <motion.article
                            key={post.id}
                            variants={itemVariants}
                            className="group flex flex-col rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-border"
                        >
                            <div className="relative h-60 overflow-hidden bg-muted">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground bg-primary/90 backdrop-blur-md rounded-full shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col flex-grow p-6 md:p-8">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    <Link href={`#post-${post.id}`} className="focus:outline-none">
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors mt-auto w-fit">
                                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                <div className="mt-10 md:hidden flex justify-center">
                    <Link href="#" className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4 decoration-primary/50">
                        View all posts <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
