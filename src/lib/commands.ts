export interface CommandOutput {
  text: string;
  color?: string;
}

export const BANNER = `
=====================================
  SARAVANA PRABHU J
  Software Developer
  Competitive Programmer
=====================================
`;

export const HELP_TEXT: CommandOutput[] = [
  { text: "Available commands:", color: "text-kitty-green" },
  { text: "" },
  { text: "  ls           - List directory contents", color: "text-kitty-fg" },
  { text: "  pwd          - Print working directory", color: "text-kitty-fg" },
  { text: "  whoami       - Display current user", color: "text-kitty-fg" },
  { text: "  date         - Show current date and time", color: "text-kitty-fg" },
  { text: "  neofetch     - System info with ASCII art", color: "text-kitty-fg" },
  { text: "  about        - Learn about me", color: "text-kitty-fg" },
  { text: "  education    - My educational background", color: "text-kitty-fg" },
  { text: "  experience   - Work experience & internships", color: "text-kitty-fg" },
  { text: "  projects     - Featured projects", color: "text-kitty-fg" },
  { text: "  skills       - Technical skills & proficiencies", color: "text-kitty-fg" },
  { text: "  achievements - Competitive programming & achievements", color: "text-kitty-fg" },
  { text: "  contact      - How to reach me", color: "text-kitty-fg" },
  { text: "  mail         - Send me an email", color: "text-kitty-fg" },
  { text: "  resume       - Download/view my resume", color: "text-kitty-fg" },
  { text: "  help         - Show this help message", color: "text-kitty-fg" },
  { text: "  clear        - Clear the terminal", color: "text-kitty-fg" },
  { text: "  banner       - Show the ASCII banner", color: "text-kitty-fg" },
  { text: "" },
  { text: "  Tip: Use ↑/↓ arrows to navigate history, Tab for autocomplete", color: "text-kitty-gray" },
];

export const ABOUT_TEXT: CommandOutput[] = [
  { text: "┌─────────────────────────────────────────────────────────────────────┐", color: "text-kitty-blue" },
  { text: "│                         WHO AM I?                                   │", color: "text-kitty-blue" },
  { text: "└─────────────────────────────────────────────────────────────────────┘", color: "text-kitty-blue" },
  { text: "" },
  { text: "  Hey there! I'm Saravana Prabhu J", color: "text-kitty-cyan" },
  { text: "" },
  { text: "  A passionate Software Developer & Competitive Programmer", color: "text-kitty-fg" },
  { text: "  currently pursuing B.E. in Electrical and Electronics Engineering", color: "text-kitty-fg" },
  { text: "  at Chennai Institute of Technology (2023 – 2027).", color: "text-kitty-fg" },
  { text: "" },
  { text: "  I love building scalable web applications and solving complex", color: "text-kitty-fg" },
  { text: "  problems. With experience spanning from crafting responsive", color: "text-kitty-fg" },
  { text: "  websites to architecting microservices backends, I bring ideas", color: "text-kitty-fg" },
  { text: "  to life through clean, efficient code.", color: "text-kitty-fg" },
  { text: "" },
  { text: "  When I'm not coding, you'll find me grinding problems on", color: "text-kitty-fg" },
  { text: "  LeetCode (900+ problems, Top 3.5%) or participating in", color: "text-kitty-fg" },
  { text: "  competitive programming contests.", color: "text-kitty-fg" },
  { text: "" },
  { text: "  Location: Tirupur, Tamil Nadu, India", color: "text-kitty-gray" },
];

export const EDUCATION_TEXT: CommandOutput[] = [
  { text: "┌─────────────────────────────────────────────────────────────────────┐", color: "text-kitty-blue" },
  { text: "│                      EDUCATION                                     │", color: "text-kitty-blue" },
  { text: "└─────────────────────────────────────────────────────────────────────┘", color: "text-kitty-blue" },
  { text: "" },
  { text: "  Chennai Institute of Technology", color: "text-kitty-cyan" },
  { text: "     Bachelor of Electrical and Electronics Engineering", color: "text-kitty-fg" },
  { text: "     Duration: 2023 – 2027", color: "text-kitty-yellow" },
  { text: "     CGPA: 8.3 / 10", color: "text-kitty-green" },
  { text: "" },
  { text: "  Currently in my pre-final year, balancing academics with", color: "text-kitty-gray" },
  { text: "  hands-on project work and competitive programming.", color: "text-kitty-gray" },
];

export const EXPERIENCE_TEXT: CommandOutput[] = [
  { text: "┌─────────────────────────────────────────────────────────────────────┐", color: "text-kitty-blue" },
  { text: "│                    WORK EXPERIENCE                                  │", color: "text-kitty-blue" },
  { text: "└─────────────────────────────────────────────────────────────────────┘", color: "text-kitty-blue" },
  { text: "" },
  { text: "  >> Internzo (Nov 2024 – Dec 2024)", color: "text-kitty-cyan" },
  { text: "    ─────────────────────────────────────────────────────────────", color: "text-kitty-gray" },
  { text: "    * Assembled a fully responsive website with React, enhancing", color: "text-kitty-fg" },
  { text: "      user engagement by ~40% across platforms", color: "text-kitty-fg" },
  { text: "    * Integrated APIs and structured state workflows, boosting", color: "text-kitty-fg" },
  { text: "      system consistency across 10+ core features", color: "text-kitty-fg" },
  { text: "    * Diagnosed bottlenecks and applied optimizations, reducing", color: "text-kitty-fg" },
  { text: "      overall load time by ~35%", color: "text-kitty-fg" },
  { text: "" },
  { text: "  >> SSV-Traders (May 2024 – June 2024)", color: "text-kitty-cyan" },
  { text: "    ─────────────────────────────────────────────────────────────", color: "text-kitty-gray" },
  { text: "    * Designed and launched a responsive website that improved", color: "text-kitty-fg" },
  { text: "      page performance by ~30% across devices", color: "text-kitty-fg" },
  { text: "    * Refined UI components, improving navigation efficiency", color: "text-kitty-fg" },
  { text: "      by ~25% through layout optimization", color: "text-kitty-fg" },
  { text: "    * Oversaw deployment and maintenance operations, ensuring", color: "text-kitty-fg" },
  { text: "      99% uptime and stable performance", color: "text-kitty-fg" },
];

export const PROJECTS_TEXT: CommandOutput[] = [
  { text: "┌─────────────────────────────────────────────────────────────────────┐", color: "text-kitty-blue" },
  { text: "│                      PROJECTS                                      │", color: "text-kitty-blue" },
  { text: "└─────────────────────────────────────────────────────────────────────┘", color: "text-kitty-blue" },
  { text: "" },
  { text: "  1. Messenger", color: "text-kitty-cyan" },
  { text: "     Tech: Node.js, gRPC, Redis, MySQL, Sequelize, PubSub", color: "text-kitty-yellow" },
  { text: "     Date: June 2025", color: "text-kitty-gray" },
  { text: "     ─────────────────────────────────────────────────────────────", color: "text-kitty-gray" },
  { text: "     * Built fault-tolerant Redis Streams achieving 0% message", color: "text-kitty-fg" },
  { text: "       loss using ACK-based processing and retries", color: "text-kitty-fg" },
  { text: "     * Structured role-secured rooms and threads, enabling", color: "text-kitty-fg" },
  { text: "       organized collaboration for 500+ active users daily", color: "text-kitty-fg" },
  { text: "     * Introduced microservices-based backend architecture for", color: "text-kitty-fg" },
  { text: "       independent service deployment and scalability", color: "text-kitty-fg" },
  { text: "" },
  { text: "  2. AI-Proctor", color: "text-kitty-cyan" },
  { text: "     Tech: Next.js, Node.js, MySQL, MediaPipe, WASM", color: "text-kitty-yellow" },
  { text: "     Date: July 2025 – Nov 2025", color: "text-kitty-gray" },
  { text: "     ─────────────────────────────────────────────────────────────", color: "text-kitty-gray" },
  { text: "     * AI-driven proctoring module detecting 10+ events in", color: "text-kitty-fg" },
  { text: "       real time reliably", color: "text-kitty-fg" },
  { text: "     * WebAssembly for 2x faster on-device inference and", color: "text-kitty-fg" },
  { text: "       reduced backend load", color: "text-kitty-fg" },
  { text: "     * Hierarchical RBAC system with 2 admin tiers to streamline", color: "text-kitty-fg" },
  { text: "       monitoring workflows", color: "text-kitty-fg" },
  { text: "" },
  { text: "  3. Optimus", color: "text-kitty-cyan" },
  { text: "     Tech: Next.js, Hono, Neon DB, Drizzle, RAG", color: "text-kitty-yellow" },
  { text: "     Date: Feb 2026 – March 2026", color: "text-kitty-gray" },
  { text: "     ─────────────────────────────────────────────────────────────", color: "text-kitty-gray" },
  { text: "     * Roadmap-driven platform for structured skill progression", color: "text-kitty-fg" },
  { text: "       and peer-to-peer collaboration", color: "text-kitty-fg" },
  { text: "     * Hono framework for runtime-agnostic APIs compatible with", color: "text-kitty-fg" },
  { text: "       Node.js and edge-based deployments", color: "text-kitty-fg" },
  { text: "     * RAG-driven feature for contextual explanations using", color: "text-kitty-fg" },
  { text: "       semantic search", color: "text-kitty-fg" },
];

export const SKILLS_TEXT: CommandOutput[] = [
  { text: "┌─────────────────────────────────────────────────────────────────────┐", color: "text-kitty-blue" },
  { text: "│                   TECHNICAL SKILLS                                 │", color: "text-kitty-blue" },
  { text: "└─────────────────────────────────────────────────────────────────────┘", color: "text-kitty-blue" },
  { text: "" },
  { text: "  Languages", color: "text-kitty-cyan" },
  { text: "  ─────────", color: "text-kitty-gray" },
  { text: "  Python    ████████████████████░░░░░  Advanced", color: "text-kitty-green" },
  { text: "  C         ███████████████░░░░░░░░░░░  Proficient", color: "text-kitty-green" },
  { text: "  C++       ████████████████░░░░░░░░░░  Proficient", color: "text-kitty-green" },
  { text: "  JavaScript██████████████████████████░  Expert", color: "text-kitty-green" },
  { text: "  TypeScript████████████████████████░░░  Advanced", color: "text-kitty-green" },
  { text: "" },
  { text: "  Frameworks & Libraries", color: "text-kitty-cyan" },
  { text: "  ──────────────────────", color: "text-kitty-gray" },
  { text: "  React, Next.js, Node.js, Express.js", color: "text-kitty-fg" },
  { text: "  Hono, GraphQL, Socket.io, WebRTC", color: "text-kitty-fg" },
  { text: "  LangChain, MediaPipe", color: "text-kitty-fg" },
  { text: "" },
  { text: "  Databases", color: "text-kitty-cyan" },
  { text: "  ─────────", color: "text-kitty-gray" },
  { text: "  MySQL, MariaDB, PostgreSQL", color: "text-kitty-fg" },
  { text: "  Redis, Neon DB", color: "text-kitty-fg" },
  { text: "  Sequelize, Drizzle ORM", color: "text-kitty-fg" },
  { text: "" },
  { text:  "  Tools & Platforms", color: "text-kitty-cyan" },
  { text:  "  ─────────────────", color: "text-kitty-gray" },
  { text:  "  Docker, Linux, Git, GitHub", color: "text-kitty-fg" },
  { text:  "  Postman, npm, Postman", color: "text-kitty-fg" },
  { text:  "  VS Code, Vercel, Netlify", color: "text-kitty-fg" },
  { text:  "  Firebase, AWS (basics)", color: "text-kitty-fg" },
  { text: "" },
  { text: "  Other", color: "text-kitty-cyan" },
  { text: "  ─────", color: "text-kitty-gray" },
  { text: "  gRPC, PubSub, RBAC, REST APIs", color: "text-kitty-fg" },
  { text:  "  WebAssembly (WASM), RAG, CI/CD", color: "text-kitty-fg" },
  { text: "  Competitive Programming", color: "text-kitty-fg" },
];

export const ACHIEVEMENTS_TEXT: CommandOutput[] = [
  { text: "┌─────────────────────────────────────────────────────────────────────┐", color: "text-kitty-blue" },
  { text: "│                 ACHIEVEMENTS & COMPETITIVE PROGRAMMING             │", color: "text-kitty-blue" },
  { text: "└─────────────────────────────────────────────────────────────────────┘", color: "text-kitty-blue" },
  { text: "" },
  { text: "  Competitive Programming", color: "text-kitty-cyan" },
  { text: "  ──────────────────────────", color: "text-kitty-gray" },
  { text: "" },
  { text: "  LeetCode", color: "text-kitty-yellow" },
  { text: "    Problems Solved : 900+", color: "text-kitty-fg" },
  { text: "    Rank            : Top 3.5%", color: "text-kitty-green" },
  { text: "    Rating          : 1952", color: "text-kitty-fg" },
  { text: "" },
  { text: "  CodeChef", color: "text-kitty-yellow" },
  { text: "    Rating          : 1674", color: "text-kitty-fg" },
  { text: "    Position        : 3 Star", color: "text-kitty-green" },
  { text: "    Highest Rank    : 768 in contest", color: "text-kitty-fg" },
  { text: "" },
  { text: "  Codeforces", color: "text-kitty-yellow" },
  { text: "    Rating          : 1234", color: "text-kitty-fg" },
  { text: "    Position        : Pupil", color: "text-kitty-green" },
  { text: "    Highest Rank    : 2238", color: "text-kitty-fg" },
  { text: "" },
  { text: "  Other Achievements", color: "text-kitty-cyan" },
  { text: "  ──────────────────────", color: "text-kitty-gray" },
  { text: "  * Orchestrated full-stack bootcamp through GDG club", color: "text-kitty-fg" },
  { text: "  * Finalist at SVCE Hackathon", color: "text-kitty-fg" },
  { text: "  * Facilitated web development sessions for freshers", color: "text-kitty-fg" },
  { text: "  * Won 3rd position at Threx Hackathon", color: "text-kitty-fg" },
];

export const CONTACT_TEXT: CommandOutput[] = [
  { text: "┌─────────────────────────────────────────────────────────────────────┐", color: "text-kitty-blue" },
  { text: "│                       CONTACT ME                                   │", color: "text-kitty-blue" },
  { text: "└─────────────────────────────────────────────────────────────────────┘", color: "text-kitty-blue" },
  { text: "" },
  { text: "  Email    : saravanaprabhuj.eee2023@citchennai.net", color: "text-kitty-fg" },
  { text: "  Phone    : +91 8248144339", color: "text-kitty-fg" },
  { text: "  LinkedIn : https://www.linkedin.com/in/saravana-prabhu-b07104290/", color: "text-kitty-blue" },
  { text: "  GitHub   : github.com/saravanaff", color: "text-kitty-blue" },
  { text: "  Location : Tirupur, Tamil Nadu, India", color: "text-kitty-fg" },
  { text: "" },
  { text: "  Feel free to reach out! I'm always open to discussing", color: "text-kitty-gray" },
  { text: "  new projects, creative ideas, or opportunities.", color: "text-kitty-gray" },
];

export const MAIL_TEXT: CommandOutput[] = [
  { text: "Opening email client...", color: "text-kitty-green" },
  { text: "To: saravanaprabhuj.eee2023@citchennai.net", color: "text-kitty-fg" },
  { text: "", color: "text-kitty-fg" },
  { text: "If the email client didn't open, you can reach me at:", color: "text-kitty-gray" },
  { text: "  Email: saravanaprabhuj.eee2023@citchennai.net", color: "text-kitty-blue" },
];

export const RESUME_TEXT: CommandOutput[] = [
  { text: "┌─────────────────────────────────────────────────────────────────────┐", color: "text-kitty-blue" },
  { text: "│                        RESUME                                      │", color: "text-kitty-blue" },
  { text: "└─────────────────────────────────────────────────────────────────────┘", color: "text-kitty-blue" },
  { text: "" },
  { text: "  You're looking at it! This terminal IS my resume.", color: "text-kitty-green" },
  { text: "" },
  { text: "  Type 'about', 'education', 'experience', 'projects',", color: "text-kitty-fg" },
  { text: "  'skills', 'achievements', or 'contact' to explore", color: "text-kitty-fg" },
  { text: "  different sections.", color: "text-kitty-fg" },
  { text: "" },
  { text: "  Or type 'help' to see all available commands.", color: "text-kitty-gray" },
];

export const LS_TEXT: CommandOutput[] = [
  { text: "Desktop    Documents  Downloads  Music       Pictures    Videos", color: "text-kitty-blue" },
  { text: ".bashrc    .config    .local     .vimrc      .zshrc      .ssh", color: "text-kitty-fg" },
];

export const PWD_TEXT: CommandOutput[] = [
  { text: "/home/saravana", color: "text-kitty-fg" },
];

export const WHOAMI_TEXT: CommandOutput[] = [
  { text: "saravana", color: "text-kitty-fg" },
];

export const DATE_TEXT: CommandOutput[] = [
  { text: new Date().toString(), color: "text-kitty-fg" },
];

export const NEOFETCH_TEXT: CommandOutput[] = [
  { text: "                   -`                                   saravana@portfolio", color: "text-kitty-cyan" },
  { text: "                  .o+`                                  ──────────────────", color: "text-kitty-cyan" },
  { text: "                 `ooo/                                  OS: Arch Linux x86_64", color: "text-kitty-cyan" },
  { text: "                `+oooo:                                 Host: Saravana Prabhu", color: "text-kitty-cyan" },
  { text: "               `+oooooo:                                Kernel: 6.9.7-arch1-1", color: "text-kitty-cyan" },
  { text: "               -+oooooo+:                               Shell: zsh 5.9", color: "text-kitty-cyan" },
  { text: "             `/:-:++oooo+:                              Terminal: kitty", color: "text-kitty-cyan" },
  { text: "            `/++++/+++++++:                             CPU: Web Browser", color: "text-kitty-cyan" },
  { text: "           `/++++++++++++++:                            Memory: 900+ LeetCode problems", color: "text-kitty-cyan" },
  { text: "          `/+++ooooooooooooo/`                          Rating: Top 3.5% LeetCode", color: "text-kitty-cyan" },
  { text: "         ./ooosssso++osssssso+`                         Languages: Python, C, C++, JS, TS", color: "text-kitty-cyan" },
  { text: "        .oossssso-````/ossssss+`                        Frameworks: React, Next.js, Node.js", color: "text-kitty-cyan" },
  { text: "       -osssssso.      :ssssssso.                       Databases: MySQL, PostgreSQL", color: "text-kitty-cyan" },
  { text: "      :osssssss/        osssso+++.                      Uptime: since 2023", color: "text-kitty-cyan" },
  { text: "     /ossssssss/        +ssssooo/-                      ", color: "text-kitty-cyan" },
  { text: "   `/ossssso+/:-        -:/+osssso+-                    ┌─────┬─────┬─────┬─────┬─────┐", color: "text-kitty-cyan" },
  { text: "  `+sso+:-`                 `.-/+oso:                   │  ●  │  ●  │  ●  │  ●  │  ●  │", color: "text-kitty-cyan" },
  { text: " `++:.                           `-/+/                  └─────┴─────┴─────┴─────┴─────┘", color: "text-kitty-cyan" },
  { text: " .`                                 `/                 red  green  yellow  blue  magenta", color: "text-kitty-cyan" },
];

export const COMMANDS: Record<string, () => CommandOutput[]> = {
  help: () => HELP_TEXT,
  about: () => ABOUT_TEXT,
  education: () => EDUCATION_TEXT,
  experience: () => EXPERIENCE_TEXT,
  projects: () => PROJECTS_TEXT,
  skills: () => SKILLS_TEXT,
  achievements: () => ACHIEVEMENTS_TEXT,
  contact: () => CONTACT_TEXT,
  mail: () => MAIL_TEXT,
  resume: () => RESUME_TEXT,
  banner: () => [{ text: BANNER, color: "text-kitty-blue" }],
  ls: () => LS_TEXT,
  pwd: () => PWD_TEXT,
  whoami: () => WHOAMI_TEXT,
  date: () => DATE_TEXT,
  neofetch: () => NEOFETCH_TEXT,
  clear: () => [],
};

export const AVAILABLE_COMMANDS = Object.keys(COMMANDS);
