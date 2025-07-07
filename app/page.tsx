import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Palette, Coins, Star, Zap, Users, Trophy, Sparkles, Eye, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
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

      {/* Header */}
      <header className="relative z-50 px-6 py-6 backdrop-blur-sm bg-black/20 border-b border-white/10">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-purple-500/25">
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
            </div>
            <span className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-wider animate-shimmer">
              ASKNIGHTS
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#curation"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 font-medium tracking-wide"
            >
              Curation
            </Link>
            <Link
              href="#tokenization"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 font-medium tracking-wide"
            >
              Tokenization
            </Link>
            <Link
              href="#awards"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 font-medium tracking-wide"
            >
              Awards
            </Link>
            <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 border-0 px-6 py-3 font-semibold tracking-wide transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
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

      {/* Services Grid */}
      <section className="px-6 py-32 relative" id="curation">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-text-shimmer">
                Our Services
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
              Comprehensive solutions for the modern digital art ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Curation */}
            <Card className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 group overflow-hidden backdrop-blur-sm transform hover:scale-105 hover:-translate-y-4 shadow-2xl hover:shadow-purple-500/25" id="curation-card">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-purple-500/50">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-purple-200 tracking-wide">Art Curation</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg font-light">
                  Expert curation of exceptional digital artworks. Our team identifies and showcases the most innovative
                  and valuable NFT art pieces.
                </p>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-center text-lg">
                    <Zap className="w-5 h-5 mr-4 text-purple-400 animate-pulse" />
                    <span className="font-medium">Expert Art Selection</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Zap className="w-5 h-5 mr-4 text-purple-400 animate-pulse" />
                    <span className="font-medium">Quality Verification</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Zap className="w-5 h-5 mr-4 text-purple-400 animate-pulse" />
                    <span className="font-medium">Trend Analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Tokenization */}
            <Card className="bg-gradient-to-br from-pink-900/40 to-pink-800/20 border-pink-500/30 hover:border-pink-400/60 transition-all duration-500 group overflow-hidden backdrop-blur-sm transform hover:scale-105 hover:-translate-y-4 shadow-2xl hover:shadow-pink-500/25" id="tokenization">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-pink-500/50">
                  <Coins className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-pink-200 tracking-wide">Tokenization</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg font-light">
                  Seamless conversion of digital art into NFTs. We handle the technical complexity while you focus on
                  creating amazing art.
                </p>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-center text-lg">
                    <Zap className="w-5 h-5 mr-4 text-pink-400 animate-pulse" />
                    <span className="font-medium">Smart Contract Creation</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Zap className="w-5 h-5 mr-4 text-pink-400 animate-pulse" />
                    <span className="font-medium">Metadata Management</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Zap className="w-5 h-5 mr-4 text-pink-400 animate-pulse" />
                    <span className="font-medium">Multi-Chain Support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Awards */}
            <Card className="bg-gradient-to-br from-cyan-900/40 to-blue-800/20 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 group overflow-hidden backdrop-blur-sm transform hover:scale-105 hover:-translate-y-4 shadow-2xl hover:shadow-cyan-500/25" id="awards">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-cyan-500/50">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-cyan-200 tracking-wide">Awards & Recognition</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg font-light">
                  Celebrate outstanding achievements in digital art. Our awards program recognizes top creators and their
                  contributions to the NFT space.
                </p>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-center text-lg">
                    <Zap className="w-5 h-5 mr-4 text-cyan-400 animate-pulse" />
                    <span className="font-medium">Annual Art Awards</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Zap className="w-5 h-5 mr-4 text-cyan-400 animate-pulse" />
                    <span className="font-medium">Community Recognition</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Zap className="w-5 h-5 mr-4 text-cyan-400 animate-pulse" />
                    <span className="font-medium">Exclusive Showcases</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="px-6 py-32 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_50%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-text-shimmer">
                Featured Collection
              </span>
            </h2>
            <p className="text-2xl text-gray-300 font-light tracking-wide">
              Discover extraordinary digital artworks from our curated collection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <Card
                key={item}
                className="bg-gray-900/60 border-gray-700/50 hover:border-purple-500/60 transition-all duration-500 group overflow-hidden backdrop-blur-sm transform hover:scale-110 hover:-translate-y-6 shadow-2xl hover:shadow-purple-500/25"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=400`}
                    alt={`Featured Art ${item}`}
                    width={400}
                    height={400}
                    className="object-cover group-hover:scale-125 transition-transform duration-700 filter group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <h4 className="text-white font-bold text-xl mb-2 tracking-wide">Digital Dreams #{item}</h4>
                    <p className="text-gray-200 text-lg font-light">By Artist Name</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 border-0 text-xl px-12 py-6 font-bold tracking-wide transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-purple-500/50 group"
            >
              View Full Gallery
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

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
  )
}
