import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Palette, Coins, Star, Zap, Users, Trophy, Sparkles, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="relative z-50 px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ASKNIGHTS
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#curation" className="text-gray-300 hover:text-white transition-colors">
              Curation
            </Link>
            <Link href="#tokenization" className="text-gray-300 hover:text-white transition-colors">
              Tokenization
            </Link>
            <Link href="#awards" className="text-gray-300 hover:text-white transition-colors">
              Awards
            </Link>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0">
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 text-purple-300">
            <Star className="w-4 h-4 mr-2" />
            Top NFT Art Platform
          </Badge>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Elevate
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Digital Art
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Premier NFT art curation, tokenization, and awards platform. Discover, create, and celebrate the future of
            digital artistry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 text-lg px-8 py-6"
            >
              Explore Gallery
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 text-lg px-8 py-6"
            >
              Submit Art
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions for the modern digital art ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Curation */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Art Curation</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Expert curation of exceptional digital artworks. Our team identifies and showcases the most innovative
                  and valuable NFT art pieces.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-purple-400" />
                    Expert Art Selection
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-purple-400" />
                    Quality Verification
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-purple-400" />
                    Trend Analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Tokenization */}
            <Card className="bg-gradient-to-br from-pink-900/20 to-pink-800/10 border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Coins className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pink-300">Tokenization</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Seamless conversion of digital art into NFTs. We handle the technical complexity while you focus on
                  creating amazing art.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-pink-400" />
                    Smart Contract Creation
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-pink-400" />
                    Metadata Management
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-pink-400" />
                    Multi-Chain Support
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Awards */}
            <Card className="bg-gradient-to-br from-yellow-900/20 to-orange-800/10 border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">Awards Program</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Recognition and rewards for outstanding digital artists. Celebrate excellence and innovation in the
                  NFT art space.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                    Monthly Competitions
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                    Cash Prizes
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                    Global Recognition
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="px-6 py-20 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Collection
              </span>
            </h2>
            <p className="text-xl text-gray-400">Discover extraordinary digital artworks from our curated collection</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                className="bg-gray-900/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=400`}
                    alt={`Featured Art ${item}`}
                    width={400}
                    height={400}
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-white font-semibold mb-1">Digital Dreams #{item}</h4>
                    <p className="text-gray-300 text-sm">By Artist Name</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0"
            >
              View Full Gallery
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                10K+
              </div>
              <p className="text-gray-400">Artworks Curated</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                500+
              </div>
              <p className="text-gray-400">Artists Featured</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                $2M+
              </div>
              <p className="text-gray-400">Awards Distributed</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                50K+
              </div>
              <p className="text-gray-400">Community Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Elevate Your Art?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the premier platform for NFT art curation, tokenization, and recognition. Start your journey in the
            digital art revolution today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 text-lg px-8 py-6"
            >
              Submit Your Art
              <Palette className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 text-lg px-8 py-6"
            >
              Join Community
              <Users className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ASKNIGHTS
              </span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; 2024 ASKNIGHTS. All rights reserved. Elevating digital art to new heights.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
