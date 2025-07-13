import { useParams, useNavigate } from "react-router";
import { Package, ArrowLeft } from "lucide-react";
import { authComponents } from "../data/authComponents";
import CodeBlock from "../components/CodeBlock";

const ComponentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const component = authComponents.find((c) => c.id === parseInt(id));

  if (!component) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#030712] bg-[radial-gradient(#1f293780_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={18} />
                <span>Back to Components</span>
              </button>
              <div className="h-4 w-[1px] bg-white/10" />
              <div className="flex items-center gap-3">
                <h1 className="text-lg font-semibold text-white">{component.name}</h1>
                <div className="flex gap-1.5">
                  {component.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-medium bg-white/5 text-white/70 rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(400px,_600px)_1fr] gap-12">
          {/* Left Side - Preview */}
          <div className="xl:sticky top-28 h-fit max-h-[calc(100vh-9rem)]">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 p-4 h-full">
              <div className="flex items-center justify-center bg-black rounded-xl overflow-hidden py-4 h-full">
                <img
                  src={component.preview}
                  alt={component.name}
                  className="w-auto h-full max-h-[calc(100vh-12rem)] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Implementation */}
          <div className="space-y-6">
            {component.implementation.map((step, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                <div className="flex items-center justify-between px-8 py-4 border-b border-white/10">
                  <h2 className="text-xl font-semibold text-white">{step.title}</h2>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-zinc-400">{step.description}</p>
                  <CodeBlock code={step.code} showCopy={step.title !== "1. Prerequisites"} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentPage;
