import { Button } from "@/components/ui/button"
import { Palette, Users, Sparkles } from "lucide-react"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AnimationFallback } from "@/components/animation-fallback"
import { HomeTeaser } from "@/components/showcase/home-teaser"
import { getHomeTeaser } from "@/lib/showcase"

export default async function Component() {
  const teaser = await getHomeTeaser()
  return (
    <>
      <AnimationFallback />
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-bounce"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-spin"
            style={{ animationDuration: "20s" }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rotate-45 animate-float" />
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-pink-400 rounded-full animate-float-delayed" />
          <div className="absolute top-1/2 right-1/3 w-3 h-8 bg-cyan-400 animate-float-slow" />
          <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-yellow-400 rotate-12 animate-float" />
        </div>


        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        <HomeTeaser teaser={teaser} />

        {/* Stats Section */}
        <section className="px-6 py-32 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 text-center">
              {[
                { number: "10K+", label: "Artworks Curated", color: "from-purple-400 to-pink-400" },
                { number: "500+", label: "Artists Featured", color: "from-pink-400 to-cyan-400" },
                { number: "$2M+", label: "Awards Distributed", color: "from-cyan-400 to-blue-400" },
                { number: "50K+", label: "Community Members", color: "from-blue-400 to-purple-400" },
              ].map((stat, index) => (
                <div key={index} className="space-y-4 group transform hover:scale-110 transition-all duration-500">
                  <div
                    className={`text-6xl md:text-7xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent animate-counter group-hover:animate-pulse`}
                  >
                    {stat.number}
                  </div>
                  <p className="text-gray-300 text-xl font-medium tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-32 bg-gradient-to-r from-purple-900/30 via-black to-pink-900/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)]" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-text-shimmer">
                Ready to Elevate
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Your Art?
              </span>
            </h2>
            <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
              Join the premier platform for NFT art curation, tokenization, and recognition.
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                Start your journey
              </span>{" "}
              in the digital art revolution today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 border-0 text-xl px-12 py-6 font-bold tracking-wide transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-purple-500/50 group"
              >
                <Palette className="mr-3 w-6 h-6 group-hover:animate-spin" />
                Submit Your Art
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500/50 text-purple-200 hover:bg-purple-500/20 text-xl px-12 py-6 font-bold tracking-wide backdrop-blur-sm transform hover:scale-110 transition-all duration-500 hover:border-purple-400 group"
              >
                <Users className="mr-3 w-6 h-6 group-hover:animate-bounce" />
                Join Community
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-16 border-t border-gray-800/50 backdrop-blur-sm bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-6 md:mb-0 group">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-purple-500/25">
                  <Sparkles className="w-6 h-6 text-white animate-pulse" />
                </div>
                <span className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-wider">
                  ASKNIGHTS
                </span>
              </div>
              <div className="flex space-x-8 text-gray-400">
                <Link
                  href="/showcase"
                  className="hover:text-white transition-all duration-300 hover:scale-110 font-medium tracking-wide text-lg"
                >
                  Showcase
                </Link>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-300 hover:scale-110 font-medium tracking-wide text-lg"
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-300 hover:scale-110 font-medium tracking-wide text-lg"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-300 hover:scale-110 font-medium tracking-wide text-lg"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800/50 text-center text-gray-400">
              <p className="text-lg font-light tracking-wide">
                &copy; 2024 ASKNIGHTS. All rights reserved.
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                  Elevating digital art to new heights.
                </span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
