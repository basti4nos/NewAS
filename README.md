# ASKNIGHTS - Premier NFT Art Platform

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/eclejians-projects/v0-new-as)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## Overview

ASKNIGHTS is a premier NFT art platform featuring expert curation, seamless tokenization, and recognition programs for digital artists. Built with modern web technologies, it provides a comprehensive solution for the digital art ecosystem.

### Key Features

- 🎨 **Art Curation**: Expert selection and verification of exceptional digital artworks
- 🪙 **Tokenization**: Seamless conversion of digital art into NFTs with multi-chain support
- 🏆 **Awards & Recognition**: Community recognition and exclusive showcases for top creators
- 📱 **Responsive Design**: Optimized for desktop and mobile devices
- ⚡ **Performance**: Built with Next.js 15 for optimal speed and SEO
- 🎭 **Modern UI**: Beautiful gradients, animations, and interactive elements

## Live Deployment

The platform is live at:

**[https://vercel.com/eclejians-projects/v0-new-as](https://vercel.com/eclejians-projects/v0-new-as)**

## Tech Stack

- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript 5.0.2
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Font**: Inter (via next/font)
- **Deployment**: Vercel

## Local Development

1. **Clone the repository:**
   ```sh
   git clone https://github.com/basti4nos/NewAS.git
   cd NewAS
   ```

2. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   ```

3. **Run the development server:**
   ```sh
   pnpm dev
   # or
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Build for Production

1. **Build the app:**
   ```sh
   pnpm build
   # or
   npm run build
   ```

2. **Start the production server:**
   ```sh
   pnpm start
   # or
   npm start
   ```

## Deployment

This project is ready for deployment on [Vercel](https://vercel.com/) or any platform that supports Next.js. The repository is configured for automatic deployments.

### Deployment Platforms

- **Vercel** (Recommended): Automatic deployments from the main branch
- **Netlify**: Supports Next.js with zero configuration
- **Railway**: Easy deployment with built-in CI/CD
- **Self-hosted**: Any Node.js hosting with Next.js support

### Environment Variables

No environment variables are required for the default setup. If you add features that require secrets or API keys, document them in a `.env.local` file.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page component
│   ├── robots.ts          # SEO robots configuration
│   └── sitemap.ts         # Dynamic sitemap generation
├── components/            # Reusable components
│   ├── ui/               # UI component library
│   ├── hero-section.tsx  # Hero section component
│   ├── services-section.tsx # Services section component
│   └── animation-fallback.tsx # Animation fallback
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/              # Static assets
```

## Features

### 🎨 Art Curation
- Expert art selection and quality verification
- Trend analysis and market insights
- Curated collections for collectors

### 🪙 Tokenization
- Smart contract creation and deployment
- Metadata management and IPFS integration
- Multi-chain support (Ethereum, Polygon, etc.)

### 🏆 Awards & Recognition
- Annual art awards and competitions
- Community recognition programs
- Exclusive showcases and exhibitions

## Performance Optimizations

- **Next.js 15**: Latest framework with App Router
- **Static Generation**: Pre-rendered pages for better SEO
- **Image Optimization**: Automatic image optimization with next/image
- **Font Optimization**: Inter font with next/font to prevent FOUT
- **Code Splitting**: Automatic code splitting for faster loads
- **Mobile Optimizations**: Touch-friendly interactions and reduced motion support

## Accessibility

- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects user motion preferences
- **Color Contrast**: WCAG compliant color schemes

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Project**: ASKNIGHTS NFT Art Platform
- **Repository**: [https://github.com/basti4nos/NewAS](https://github.com/basti4nos/NewAS)
- **Live Demo**: [https://vercel.com/eclejians-projects/v0-new-as](https://vercel.com/eclejians-projects/v0-new-as)

---

**Elevating digital art to new heights.** 🚀