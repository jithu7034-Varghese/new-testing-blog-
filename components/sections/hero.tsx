"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-background -z-20" />

            {/* Dynamic Background Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-blob" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -z-10 animate-blob" style={{ animationDelay: "2s" }} />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-medium text-muted-foreground">New articles published weekly</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-balance">
                        Where Thoughts <br className="hidden md:block" /> Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Clarity.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
                        A minimalist sanctuary for ideas, stories, and connections. Dive into deep insights designed for the modern mind.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link href="#blog">
                            <Button size="lg" className="rounded-full group shadow-lg shadow-primary/25">
                                Read Stories
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="#contact">
                            <Button size="lg" variant="outline" className="rounded-full">
                                Get in Touch
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
