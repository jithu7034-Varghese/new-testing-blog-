import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Hero } from "@/components/sections/hero"
import { BlogGrid } from "@/components/sections/blog-grid"
import { ContactForm } from "@/components/sections/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <BlogGrid />
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}
