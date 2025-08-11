import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative px-6 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <Badge className="mb-8 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border-purple-500/50 text-purple-200 px-6 py-2 text-lg font-medium backdrop-blur-sm animate-fade-in-up">
          <Star className="w-5 h-5 mr-3 animate-spin" style={{ animationDuration: "3s" }} />
          Top NFT Art Platform
        </Badge>

        <div className="space-y-6 mb-12">
          <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tighter">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-text-reveal">
              Elevate
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-text-reveal-delayed transform hover:scale-105 transition-transform duration-500">
              Digital Art
            </span>
          </h1>
        </div>

        <p className="text-2xl md:text-3xl text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed font-light tracking-wide animate-fade-in-up-delayed">
          Premier NFT art curation, tokenization, and awards platform.
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
            Discover, create, and celebrate
          </span>{" "}
          the future of digital artistry.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up-slow">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 border-0 text-xl px-12 py-6 font-bold tracking-wide transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-purple-500/50 group"
          >
            <Play className="mr-3 w-6 h-6 group-hover:animate-pulse" />
            Explore Gallery
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-purple-500/50 text-purple-200 hover:bg-purple-500/20 text-xl px-12 py-6 font-bold tracking-wide backdrop-blur-sm transform hover:scale-110 transition-all duration-500 hover:border-purple-400"
          >
            Submit Art
          </Button>
        </div>
      </div>

      {/* Floating Art Pieces */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-20 animate-float">
        <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl transform rotate-12" />
      </div>
      <div className="absolute bottom-32 left-20 w-24 h-24 opacity-20 animate-float-delayed">
        <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full" />
      </div>
    </section>
  )
} 