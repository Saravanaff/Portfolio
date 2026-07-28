"use client";

import { useState, useRef, useEffect, useCallback, type ReactNode } from "react";
import {
  COMMANDS,
  AVAILABLE_COMMANDS,
  type CommandOutput,
} from "@/lib/commands";
import Banner from "./Banner";

interface TerminalLine {
  id: number;
  type: "input" | "output" | "banner" | "boot";
  content: string | CommandOutput[] | ReactNode;
  color?: string;
}

const BOOT_SEQUENCE = [
  { text: "Last login: Sat Jul 26 09:41:23 2025 from tty1", delay: 50 },
  { text: "", delay: 10 },
  { text: "Welcome to Arch Linux (kitty 0.36.1). Type 'help' for commands.", delay: 40 },
];

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isBooting, setIsBooting] = useState(true);
  const [bootComplete, setBootComplete] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const lineIdRef = useRef(0);

  const getNextId = useCallback(() => {
    lineIdRef.current += 1;
    return lineIdRef.current;
  }, []);

  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    if (!isBooting) return;
    let timeoutId: ReturnType<typeof setTimeout>;
    const runBoot = async () => {
      const bannerLine: TerminalLine = {
        id: getNextId(),
        type: "banner",
        content: <Banner />,
      };
      setLines([bannerLine]);
      scrollToBottom();
      for (const step of BOOT_SEQUENCE) {
        await new Promise((r) => { timeoutId = setTimeout(r, step.delay); });
        setLines((prev) => [
          ...prev,
          { id: getNextId(), type: "boot", content: step.text, color: "text-kitty-gray" },
        ]);
        scrollToBottom();
      }
      await new Promise((r) => { timeoutId = setTimeout(r, 150); });
      setIsBooting(false);
      setBootComplete(true);
    };
    runBoot();
    return () => clearTimeout(timeoutId);
  }, [isBooting, getNextId, scrollToBottom]);

  useEffect(() => {
    const handleClick = () => inputRef.current?.focus();
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => { scrollToBottom(); }, [lines, scrollToBottom]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const trimmed = input.trim().toLowerCase();
        if (trimmed) {
          const matches = AVAILABLE_COMMANDS.filter((cmd) => cmd.startsWith(trimmed));
          if (matches.length === 1) { setInput(matches[0]); setSuggestions([]); }
          else if (matches.length > 1) { setSuggestions(matches); }
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [input]);

  const executeCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const inputLine: TerminalLine = { id: getNextId(), type: "input", content: cmd };
    if (!trimmed) { setLines((prev) => [...prev, inputLine]); return; }
    if (trimmed === "clear") { setLines([]); return; }

    if (trimmed === "resume") {
      fetch("/Saravana_Prabhu.pdf")
        .then((res) => res.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "Saravana_Prabhu.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        });
      const outputLines: TerminalLine[] = [{ id: getNextId(), type: "output" as const, content: [
        { text: "Downloading resume...", color: "text-kitty-green" },
        { text: "File: Saravana_Prabhu.pdf", color: "text-kitty-gray" },
      ]}];
      setLines((prev) => [...prev, inputLine, ...outputLines]);
      setCommandHistory((prev) => { const h = [...prev, trimmed]; return h.length > 50 ? h.slice(-50) : h; });
      setHistoryIndex(-1);
      return;
    }

    if (trimmed === "mail") {
      window.open("mailto:saravanaprabhuj.eee2023@citchennai.net", "_blank");
      const outputLines: TerminalLine[] = [{ id: getNextId(), type: "output" as const, content: [
        { text: "Opening email client...", color: "text-kitty-green" },
        { text: "To: saravanaprabhuj.eee2023@citchennai.net", color: "text-kitty-fg" },
      ]}];
      setLines((prev) => [...prev, inputLine, ...outputLines]);
      setCommandHistory((prev) => { const h = [...prev, trimmed]; return h.length > 50 ? h.slice(-50) : h; });
      setHistoryIndex(-1);
      return;
    }

    const handler = COMMANDS[trimmed];
    const outputLines: TerminalLine[] = handler
      ? [{ id: getNextId(), type: "output" as const, content: handler() }]
      : [{ id: getNextId(), type: "output" as const, content: [
        { text: `kitty: command not found: ${trimmed}`, color: "text-kitty-red" },
        { text: `Type 'help' for available commands.`, color: "text-kitty-gray" },
      ]}];
    setLines((prev) => [...prev, inputLine, ...outputLines]);
    setCommandHistory((prev) => { const h = [...prev, trimmed]; return h.length > 50 ? h.slice(-50) : h; });
    setHistoryIndex(-1);
  }, [getNextId]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { executeCommand(input); setInput(""); setSuggestions([]); }
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const i = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(i); setInput(commandHistory[i]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const i = historyIndex + 1;
        if (i >= commandHistory.length) { setHistoryIndex(-1); setInput(""); }
        else { setHistoryIndex(i); setInput(commandHistory[i]); }
      }
    } else if (e.key === "l" && e.ctrlKey) { e.preventDefault(); setLines([]); }
  }, [input, commandHistory, historyIndex, executeCommand]);

  const renderOutput = (line: TerminalLine) => {
    if (line.type === "banner") {
      return (
        <div key={line.id}>
          {line.content as ReactNode}
        </div>
      );
    }
    if (line.type === "boot") {
      return (
        <pre key={line.id} className={`whitespace-pre font-mono text-[14px] leading-tight ${line.color || "text-kitty-fg"}`}>
          {line.content as string}
        </pre>
      );
    }
    if (line.type === "input") {
      return (
        <div key={line.id} className="flex items-start">
          <span className="text-kitty-yellow shrink-0">❯ </span>
          <span className="text-kitty-fg">{line.content as string}</span>
        </div>
      );
    }
    const output = line.content as CommandOutput[];
    return (
      <div key={line.id} className="flex flex-col">
        {output.map((o, i) => (
          <pre key={`${line.id}-${i}`} className={`whitespace-pre font-mono text-[14px] leading-[1.6] ${o.color || "text-kitty-fg"}`}>
            {renderTextWithLinks(o.text)}
          </pre>
        ))}
      </div>
    );
  };

  const renderTextWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+|linkedin\.com\/[^\s]+|github\.com\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        const href = part.startsWith("http") ? part : `https://${part}`;
        return (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-kitty-blue underline hover:text-kitty-cyan cursor-pointer"
          >
            {part}
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="flex flex-col w-full h-screen bg-kitty-bg overflow-hidden select-none font-mono">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 h-7 bg-kitty-titlebar border-b border-kitty-border shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-kitty-red/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-kitty-yellow/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-kitty-green/70" />
        </div>
        <span className="text-kitty-gray text-[12px]">saravana — kitty</span>
        <div className="w-10" />
      </div>

      {/* Terminal body */}
      <div ref={terminalRef} className="flex-1 overflow-y-auto px-5 py-3 scroll-smooth">
        {lines.map(renderOutput)}

        {suggestions.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1 mb-1">
            {suggestions.map((s) => (
              <span key={s} className="text-kitty-yellow bg-kitty-surface px-2 py-0.5 rounded text-[13px]">{s}</span>
            ))}
          </div>
        )}

        {bootComplete && (
          <div className="flex items-center mt-1">
            <span className="text-kitty-yellow shrink-0">❯ </span>
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => { setInput(e.target.value); setSuggestions([]); }}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-kitty-fg outline-none caret-kitty-cursor font-mono text-[14px]"
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </div>
          </div>
        )}

        <div className="h-4" />
      </div>
    </div>
  );
}
