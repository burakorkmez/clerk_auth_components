import { useState, useEffect } from "react";
import { Copy } from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism-dark.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const CodeBlock = ({ code, showCopy = true }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden">
      <style jsx>{`
        .custom-code {
          background: #0a0a0a !important;
          font-family: "Fira Code", monospace !important;
          font-size: 13px !important;
          line-height: 1.6 !important;
          max-height: calc(100vh - 300px) !important;
          overflow: auto !important;
          width: 100% !important;
        }
        .custom-code code {
          color: #e4e4e7 !important;
          text-shadow: none !important;
          padding: 1.5rem !important;
          display: block !important;
          white-space: pre-wrap !important;
          word-wrap: break-word !important;
          width: 100% !important;
        }
        .custom-code .token.keyword {
          color: #c4b5fd !important;
        }
        .custom-code .token.string,
        .custom-code .token.attr-value {
          color: #bae6fd !important;
        }
        .custom-code .token.function {
          color: #93c5fd !important;
        }
        .custom-code .token.number {
          color: #fca5a5 !important;
        }
        .custom-code .token.operator {
          color: #e4e4e7 !important;
        }
        .custom-code .token.punctuation {
          color: #a1a1aa !important;
        }
        .custom-code .token.property {
          color: #93c5fd !important;
        }
        .custom-code .token.comment {
          color: #71717a !important;
        }
        .custom-code .token.class-name {
          color: #fde68a !important;
        }
        .custom-code .token.tag {
          color: #ddd6fe !important;
        }
        .custom-code .token.attr-name {
          color: #c4b5fd !important;
        }
        .custom-code .line-numbers-rows {
          border-right: 1px solid #27272a !important;
          background: #0a0a0a !important;
          padding: 1.5rem 0 !important;
          position: absolute !important;
          pointer-events: none !important;
        }
        .custom-code .line-numbers .line-numbers-rows {
          left: 0 !important;
          top: -4px !important;
        }
        .custom-code .line-numbers-rows > span:before {
          color: #52525b !important;
        }
      `}</style>
      <pre className="custom-code line-numbers !p-0 !bg-[#0a0a0a] max-h-[700px] overflow-auto">
        <code className="language-tsx">{code}</code>
      </pre>
      {showCopy && (
        <button
          onClick={copyToClipboard}
          className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 text-sm bg-zinc-800/80 backdrop-blur-sm hover:bg-zinc-700/80 text-zinc-300 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 border border-white/5"
        >
          {copied ? (
            <>
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default CodeBlock;
