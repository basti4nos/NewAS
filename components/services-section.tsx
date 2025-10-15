import { Card, CardContent } from "@/components/ui/card"
import { Coins, Eye, Trophy, Zap } from "lucide-react"

const services = [
  {
    id: "curation",
    title: "Art Curation",
    description: "Expert curation of exceptional digital artworks. Our team identifies and showcases the most innovative and valuable NFT art pieces.",
    icon: Eye,
    color: "purple",
    features: ["Expert Art Selection", "Quality Verification", "Trend Analysis"]
  },
  {
    id: "tokenization",
    title: "Tokenization",
    description: "Seamless conversion of digital art into NFTs. We handle the technical complexity while you focus on creating amazing art.",
    icon: Coins,
    color: "pink",
    features: ["Smart Contract Creation", "Metadata Management", "Multi-Chain Support"]
  },
  {
    id: "awards",
    title: "Awards & Recognition",
    description: "Celebrate outstanding achievements in digital art. Our awards program recognizes top creators and their contributions to the NFT space.",
    icon: Trophy,
    color: "cyan",
    features: ["Annual Art Awards", "Community Recognition", "Exclusive Showcases"]
  }
]

const colorClasses = {
  purple: {
    card: "bg-gradient-to-br from-purple-600/80 to-purple-800/60 border-purple-400/80 hover:border-purple-300 hover:shadow-purple-400/40 shadow-purple-500/30",
    icon: "bg-gradient-to-br from-purple-400 to-purple-600 shadow-purple-400/60 shadow-lg",
    title: "text-purple-100",
    zap: "text-purple-300",
    description: "text-purple-100/90",
    features: "text-purple-50"
  },
  pink: {
    card: "bg-gradient-to-br from-pink-600/80 to-pink-800/60 border-pink-400/80 hover:border-pink-300 hover:shadow-pink-400/40 shadow-pink-500/30",
    icon: "bg-gradient-to-br from-pink-400 to-pink-600 shadow-pink-400/60 shadow-lg",
    title: "text-pink-100",
    zap: "text-pink-300",
    description: "text-pink-100/90",
    features: "text-pink-50"
  },
  cyan: {
    card: "bg-gradient-to-br from-cyan-600/80 to-blue-800/60 border-cyan-400/80 hover:border-cyan-300 hover:shadow-cyan-400/40 shadow-cyan-500/30",
    icon: "bg-gradient-to-br from-cyan-400 to-blue-500 shadow-cyan-400/60 shadow-lg",
    title: "text-cyan-100",
    zap: "text-cyan-300",
    description: "text-cyan-100/90",
    features: "text-cyan-50"
  }
}

export function ServicesSection() {
  return (
    <section className="px-6 py-32 relative bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" id="curation">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
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
          {services.map((service) => {
            const IconComponent = service.icon
            const colors = colorClasses[service.color as keyof typeof colorClasses]
            
            return (
              <Card 
                key={service.id}
                className={`${colors.card} transition-all duration-500 group overflow-hidden backdrop-blur-sm transform hover:scale-105 hover:-translate-y-4 shadow-2xl`}
                id={service.id}
              >
                <CardContent className="p-10">
                  <div className={`w-20 h-20 ${colors.icon} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                  <h3 className={`text-3xl font-black mb-6 ${colors.title} tracking-wide drop-shadow-sm`}>
                    {service.title}
                  </h3>
                  <p className={`${colors.description} mb-8 leading-relaxed text-lg font-light`}>
                    {service.description}
                  </p>
                  <ul className={`space-y-4 ${colors.features}`}>
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-lg">
                        <Zap className={`w-5 h-5 mr-4 ${colors.zap} animate-pulse drop-shadow-sm`} />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
} 