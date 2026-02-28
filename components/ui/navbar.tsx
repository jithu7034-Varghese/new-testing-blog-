"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Flame } from "lucide-react"

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 glass"
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Flame className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        Lumina<span className="text-primary">.</span>
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#blog" className="text-sm font-medium hover:text-primary transition-colors hover:glow">
                        Stories
                    </Link>
                    <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                        Connect
                    </Link>
                </nav>
                <div className="flex md:hidden">
                    {/* Mobile menu toggle could go here, omitting for simplicity in this focused assignment */}
                    <Link href="#contact" className="text-sm font-medium text-primary">
                        Connect
                    </Link>
                </div>
            </div>
        </motion.header>
    )
}
