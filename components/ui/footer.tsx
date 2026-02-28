import Link from "next/link"
import { Flame, Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2 group">
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                        <Flame className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-foreground">
                        Lumina<span className="text-primary">.</span>
                    </span>
                </div>

                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Lumina Blog. Crafted with passion.
                </p>

                <div className="flex items-center gap-4">
                    <Link href="#" className="p-2 rounded-full hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground">
                        <Twitter className="w-5 h-5" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="p-2 rounded-full hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground">
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="#" className="p-2 rounded-full hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground">
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
