"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  BANNER,
  COMMANDS,
  AVAILABLE_COMMANDS,
  type CommandOutput,
} from "@/lib/commands";

interface TerminalLine {
  id: number;
  type: "input" | "output" | "banner" | "boot";
  content: string | CommandOutput[];
  color?: string;
  command?: string;
}

const BOOT_SEQUENCE = [
  { text: "Initializing system...", delay: 100 },
  { text: "Loading portfolio modules... done", delay: 200 },
  { text: "Connecting to saravanaprabhuj.dev... done", delay: 150 },
  { text: "Type 'help' to see available commands.", delay: 50 },
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

  // Boot sequence
  useEffect(() => {
    if (!isBooting) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    const runBoot = async () => {
      const bannerLine: TerminalLine = {
        id: getNextId(),
        type: "banner",
        content: BANNER,
        color: "text-green-400",
      };
      setLines([bannerLine]);
      scrollToBottom();

      for (const step of BOOT_SEQUENCE) {
        await new Promise((r) => {
          timeoutId = setTimeout(r, step.delay);
        });
        setLines((prev) => [
          ...prev,
          { id: getNextId(), type: "boot", content: step.text, color: "text-zinc-400" },
        ]);
        scrollToBottom();
      }

      await new Promise((r) => {
        timeoutId = setTimeout(r, 300);
      });
      setIsBooting(false);
      setBootComplete(true);
    };

    runBoot();

    return () => clearTimeout(timeoutId);
  }, [isBooting, getNextId, scrollToBottom]);

  // Focus input on click
  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Scroll on new lines
  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  // Tab autocomplete
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const trimmed = input.trim().toLowerCase();
        if (trimmed) {
          const matches = AVAILABLE_COMMANDS.filter((cmd) =>
            cmd.startsWith(trimmed)
          );
          if (matches.length === 1) {
            setInput(matches[0]);
            setSuggestions([]);
          } else if (matches.length > 1) {
            setSuggestions(matches);
          }
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [input]);

  const executeCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase();

      // Add input line
      const inputLine: TerminalLine = {
        id: getNextId(),
        type: "input",
        content: cmd,
        command: cmd,
      };

      if (!trimmed) {
        setLines((prev) => [...prev, inputLine]);
        return;
      }

      // Handle clear separately
      if (trimmed === "clear") {
        setLines([]);
        return;
      }

      // Find command
      const handler = COMMANDS[trimmed];
      const outputLines: TerminalLine[] = handler
        ? [{ id: getNextId(), type: "output" as const, content: handler() }]
        : [
            {
              id: getNextId(),
              type: "output" as const,
              content: [
                {
                  text: `Command not found: ${trimmed}. Type 'help' for available commands.`,
                  color: "text-red-400",
                },
              ],
            },
          ];

      setLines((prev) => [...prev, inputLine, ...outputLines]);

      // Update history
      setCommandHistory((prev) => {
        const newHistory = [...prev, trimmed];
        return newHistory.length > 50 ? newHistory.slice(-50) : newHistory;
      });
      setHistoryIndex(-1);
    },
    [getNextId]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        executeCommand(input);
        setInput("");
        setSuggestions([]);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (commandHistory.length > 0) {
          const newIndex =
            historyIndex === -1
              ? commandHistory.length - 1
              : Math.max(0, historyIndex - 1);
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex !== -1) {
          const newIndex = historyIndex + 1;
          if (newIndex >= commandHistory.length) {
            setHistoryIndex(-1);
            setInput("");
          } else {
            setHistoryIndex(newIndex);
            setInput(commandHistory[newIndex]);
          }
        }
      } else if (e.key === "l" && e.ctrlKey) {
        e.preventDefault();
        setLines([]);
      }
    },
    [input, commandHistory, historyIndex, executeCommand]
  );

  const renderOutput = (line: TerminalLine) => {
    if (line.type === "banner" || line.type === "boot") {
      return (
        <pre
          key={line.id}
          className={`whitespace-pre font-mono text-xs sm:text-sm leading-tight ${line.color || "text-white"}`}
        >
          {line.content as string}
        </pre>
      );
    }

    if (line.type === "input") {
      return (
        <div key={line.id} className="flex items-start gap-2">
          <span className="text-green-400 shrink-0">❯</span>
          <span className="text-white">{line.content as string}</span>
        </div>
      );
    }

    // Output
    const output = line.content as CommandOutput[];
    return (
      <div key={line.id} className="flex flex-col gap-0">
        {output.map((o, i) => (
          <pre
            key={`${line.id}-${i}`}
            className={`whitespace-pre font-mono text-sm leading-relaxed ${o.color || "text-white"}`}
          >
            {o.text}
          </pre>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-screen bg-[#0D1117] overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#161B22] border-b border-[#30363D] shrink-0">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <span className="text-[#8B949E] text-sm font-mono ml-2">
          saravana@portfolio:~
        </span>
      </div>

      {/* Terminal body */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 font-mono text-sm scroll-smooth"
      >
        {lines.map(renderOutput)}

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1 mb-1">
            {suggestions.map((s) => (
              <span key={s} className="text-yellow-400 bg-[#1C2333] px-2 py-0.5 rounded">
                {s}
              </span>
            ))}
          </div>
        )}

        {/* Input line */}
        {bootComplete && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-green-400 shrink-0">❯</span>
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setSuggestions([]);
                }}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-white outline-none caret-green-400 font-mono text-sm"
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </div>
          </div>
        )}

        {/* Invisible spacer to keep input visible */}
        <div className="h-4" />
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-1 bg-[#161B22] border-t border-[#30363D] text-xs text-[#8B949E] font-mono shrink-0">
        <span>Saravana Prabhu J</span>
        <span>Full-Stack Developer | Competitive Programmer</span>
      </div>
    </div>
  );
}
