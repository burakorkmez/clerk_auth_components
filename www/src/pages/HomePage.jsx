import { Link, useNavigate } from "react-router";
import {
  Package,
  Code2,
  ChevronRight,
  Github,
  Star,
  Sparkles,
  Shield,
  Zap,
  Smartphone,
} from "lucide-react";
import { authComponents } from "../data/authComponents";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      {/* Animated Background with Gradient Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#030712] bg-[radial-gradient(#1f293780_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-3 text-white group">
                <div className="relative">
                  <img
                    src="/clerk.png"
                    alt="Clerk"
                    className="size-12 brightness-0 invert transform group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-xl font-semibold ">Clerk 🤝 Expo</span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <a
                  href="#components"
                  className="text-zinc-400 hover:text-white transition-all hover:translate-y-[-1px]"
                >
                  Components
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/burakorkmez/clerk_auth_components"
                className="flex items-center gap-2 px-4 py-1.5 text-sm text-zinc-400 hover:text-white transition-all hover:translate-y-[-1px] group"
              >
                <Github
                  size={18}
                  className="transform group-hover:rotate-12 transition-transform"
                />
                <Star size={16} className="transform group-hover:scale-110 transition-transform" />
                <span>Star</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logos */}
            <div className="flex items-center justify-center gap-12 mb-16">
              <div className="relative group">
                <img
                  src="/clerk.png"
                  alt="Clerk"
                  className="w-16 h-16 brightness-0 invert opacity-90 transform group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-300" />
              </div>
              <div className="h-[50px] w-[1px] bg-white/10" />
              <div className="relative group">
                <img
                  src="/expo.png"
                  alt="Expo"
                  className="w-16 h-16 brightness-0 invert opacity-90 transform group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-300" />
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-10 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="text-sm text-white/60 tracking-wide">AUTHENTICATION COMPONENTS</span>
            </div>

            {/* Title & Description */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.15] tracking-tight">
              <span className="relative inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <span className="relative z-10 bg-gradient-to-br from-white via-white to-violet-200 text-transparent bg-clip-text">
                  Copy-Paste
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600/40 via-fuchsia-500/40 to-violet-600/40 blur-2xl opacity-50 transform scale-150" />
              </span>{" "}
              <span className="relative inline-block transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <span className="relative z-10 bg-gradient-to-br from-white via-white to-cyan-200 text-transparent bg-clip-text">
                  Auth Components
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-cyan-500/40 blur-2xl opacity-50 transform scale-150" />
              </span>{" "}
              <span className="relative inline-block transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <span className="relative z-10 bg-gradient-to-br from-yellow-200 to-yellow-400 text-transparent bg-clip-text">
                  ✨
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-500/40 via-orange-500/40 to-yellow-500/40 blur-2xl opacity-50 transform scale-150" />
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Clerk already simplifies auth, but these components make it even easier 💀
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <a
                href="#components"
                className="w-full sm:w-auto group px-8 py-3.5 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all hover:translate-y-[-1px] relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-base">
                  Browse Components
                  <ChevronRight
                    size={18}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://github.com/burakorkmez/clerk_auth_components"
                className="w-full sm:w-auto group px-8 py-3.5 rounded-full bg-white/5 text-white font-medium hover:bg-white/10 transition-all hover:translate-y-[-1px] border border-white/10"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-base">
                  <Github
                    size={18}
                    className="transform group-hover:rotate-12 transition-transform"
                  />
                  Star on GitHub
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-12 border-t border-white/5">
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">3</div>
                <div className="text-sm text-zinc-400">Auth Components 🔐</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">MIT</div>
                <div className="text-sm text-zinc-400">Licensed 😇</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-zinc-400">TypeScript 😎</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Grid */}
      <section id="components" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Coming Soon Badge */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10 border border-white/10">
              <span className="relative">
                <span className="text-sm font-medium bg-gradient-to-r from-violet-200 via-fuchsia-200 to-violet-200 text-transparent bg-clip-text">
                  More components coming soon
                </span>
                <span className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 blur-xl opacity-10" />
              </span>
              <Sparkles className="w-4 h-4 text-violet-200" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {authComponents.map((component) => (
              <div
                key={component.id}
                onClick={() => navigate(`/component/${component.id}`)}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer bg-zinc-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:translate-y-[-2px]"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img
                    src={component.preview}
                    alt={component.name}
                    className="w-full h-auto max-h-full object-contain transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>

                {/* Content Overlay - Only visible on hover */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {component.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-medium bg-white/10 backdrop-blur-sm text-white/90 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{component.name}</h3>
                  <p className="text-white/80 text-sm line-clamp-2">{component.description}</p>
                  <div className="flex items-center gap-2 mt-4 text-white/90 group/btn">
                    <Code2
                      size={16}
                      className="transform group-hover/btn:rotate-12 transition-transform"
                    />
                    <span className="text-sm font-medium">View Component</span>
                    <ChevronRight
                      size={16}
                      className="opacity-50 transform group-hover/btn:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src="/clerk.png" alt="Clerk" className="w-6 h-6 brightness-0 invert" />
              <span className="text-zinc-400">Clerk 🤝 Expo</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/burakorkmez/clerk_auth_components"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://clerk.com"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Clerk
              </a>
              <a
                href="https://expo.dev"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Expo
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
