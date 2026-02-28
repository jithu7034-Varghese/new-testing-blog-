"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send, MapPin, Mail } from "lucide-react"

export function ContactForm() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-background -z-20" />

            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">Let's start a conversation.</h2>
                            <p className="text-muted-foreground text-lg text-balance max-w-md">
                                Have a project in mind, a story to share, or just want to say hi? I'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-6 pt-4">
                            <div className="flex items-center gap-4 text-muted-foreground group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full glass group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">Email</p>
                                    <p className="text-sm">hello@lumina.design</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-muted-foreground group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full glass group-hover:bg-primary/20 transition-colors">
                                    <MapPin className="w-5 h-5 group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">Location</p>
                                    <p className="text-sm">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 w-full"
                    >
                        <div className="p-8 md:p-10 rounded-3xl glass shadow-2xl shadow-black/5 flex flex-col gap-6 relative overflow-hidden">
                            {/* Shimmer element */}
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 auto to-transparent opacity-20 pointer-events-none" />

                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">Name</label>
                                <Input id="name" placeholder="John Doe" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">Email</label>
                                <Input id="email" type="email" placeholder="john@example.com" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">Message</label>
                                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
                            </div>

                            <Button size="lg" className="w-full mt-4 rounded-xl group relative overflow-hidden">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Send Message <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
