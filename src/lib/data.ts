// Comprehensive data for Windsurf vs Cursor comparison

export const featureCategories = [
  {
    id: "core-ai",
    name: "Core AI Features",
    features: [
      {
        id: "cascade-agent",
        name: "Agentic AI System",
        windsurf: {
          name: "Cascade AI Agent",
          description: "Primary agentic AI system that can independently code, debug, and iterate",
          rating: 9.5,
        },
        cursor: {
          name: "Composer",
          description: "AI agent with multi-file capabilities but less autonomous",
          rating: 8.0,
        },
      },
      {
        id: "multi-file",
        name: "Multi-file Editing",
        windsurf: {
          name: "Context-aware multi-file editing",
          description: "Coherent edits across multiple files with deep context awareness",
          rating: 9.0,
        },
        cursor: {
          name: "Multi-file editing",
          description: "Can handle multi-file edits but lacks deep contextual awareness",
          rating: 7.5,
        },
      },
      {
        id: "modes",
        name: "Interaction Modes",
        windsurf: {
          name: "Write Mode & Chat Mode",
          description: "Write mode for autonomous file creation/modification, Chat mode for assistance",
          rating: 9.0,
        },
        cursor: {
          name: "Chat Interface",
          description: "Primarily chat-based interaction with manual approval workflow",
          rating: 7.0,
        },
      },
      {
        id: "planning",
        name: "Planning Capabilities",
        windsurf: {
          name: "Planning Mode",
          description: "Native interface for long-term task collaboration with persistent markdown files",
          rating: 9.0,
        },
        cursor: {
          name: "Limited Planning",
          description: "Basic planning capabilities without persistent planning files",
          rating: 6.0,
        },
      },
      {
        id: "tool-calling",
        name: "Tool Integration",
        windsurf: {
          name: "Advanced Tool Calling",
          description: "Can detect packages, install dependencies, and run commands automatically",
          rating: 9.0,
        },
        cursor: {
          name: "Basic Tool Calling",
          description: "Limited tool integration capabilities",
          rating: 7.0,
        },
      },
    ],
  },
  {
    id: "autocomplete",
    name: "Autocomplete System",
    features: [
      {
        id: "tab-system",
        name: "Tab Completion",
        windsurf: {
          name: "Windsurf Tab",
          description: "Advanced autocomplete combining autocomplete, supercomplete, tab-to-jump, and tab-to-import",
          rating: 9.0,
        },
        cursor: {
          name: "Basic Tab",
          description: "Standard autocomplete with limited context awareness",
          rating: 7.0,
        },
      },
      {
        id: "context-aware",
        name: "Context Awareness",
        windsurf: {
          name: "Deep Context",
          description: "Pulls context from terminal history, clipboard, and Cascade actions",
          rating: 9.5,
        },
        cursor: {
          name: "Limited Context",
          description: "Primarily relies on open buffers and recent history",
          rating: 7.0,
        },
      },
    ],
  },
  {
    id: "models",
    name: "AI Models",
    features: [
      {
        id: "model-family",
        name: "Specialized Models",
        windsurf: {
          name: "SWE-1 Model Family",
          description: "Purpose-built models for software engineering (SWE-1, SWE-1-lite, SWE-1-mini)",
          rating: 9.0,
        },
        cursor: {
          name: "General Models",
          description: "Uses general-purpose models not specifically optimized for coding",
          rating: 7.5,
        },
      },
    ],
  },
  {
    id: "environment",
    name: "Development Environment",
    features: [
      {
        id: "editor-base",
        name: "Editor Foundation",
        windsurf: {
          name: "VS Code-based",
          description: "Built on VS Code with enhanced AI integration and flow state optimization",
          rating: 9.0,
        },
        cursor: {
          name: "VS Code-based",
          description: "Built on VS Code with AI features added",
          rating: 8.5,
        },
      },
      {
        id: "browser",
        name: "Browser Integration",
        windsurf: {
          name: "Windsurf Browser",
          description: "Built-in Chromium browser with DOM selection and console access",
          rating: 9.0,
        },
        cursor: {
          name: "External Browser",
          description: "No integrated browser, requires external tools",
          rating: 5.0,
        },
      },
      {
        id: "previews",
        name: "Preview Capabilities",
        windsurf: {
          name: "Windsurf Previews",
          description: "In-editor preview system with live preview capabilities",
          rating: 9.0,
        },
        cursor: {
          name: "Limited Previews",
          description: "Basic preview capabilities requiring external tools",
          rating: 6.0,
        },
      },
    ],
  },
  {
    id: "productivity",
    name: "Productivity Features",
    features: [
      {
        id: "memories",
        name: "AI Memory System",
        windsurf: {
          name: "AI Memories & Rules",
          description: "Persistent memory system that remembers project patterns and preferences",
          rating: 9.0,
        },
        cursor: {
          name: "Basic Memory",
          description: "Limited memory capabilities across sessions",
          rating: 6.5,
        },
      },
      {
        id: "mcp",
        name: "External Tool Integration",
        windsurf: {
          name: "MCP Integration",
          description: "Model Context Protocol servers to extend agent capabilities with external tools",
          rating: 9.0,
        },
        cursor: {
          name: "Limited Integration",
          description: "Basic integration with external tools",
          rating: 6.0,
        },
      },
      {
        id: "automation",
        name: "Workflow Automation",
        windsurf: {
          name: "Advanced Automation",
          description: "Repetitive task automation through AI agents with command suggestions",
          rating: 9.0,
        },
        cursor: {
          name: "Basic Automation",
          description: "Limited automation capabilities",
          rating: 7.0,
        },
      },
    ],
  },
  {
    id: "collaboration",
    name: "Collaboration Features",
    features: [
      {
        id: "reviews",
        name: "Code Reviews",
        windsurf: {
          name: "Windsurf Reviews",
          description: "AI-powered code analysis and suggestions with team collaboration tools",
          rating: 8.5,
        },
        cursor: {
          name: "Basic Reviews",
          description: "Limited code review capabilities",
          rating: 6.0,
        },
      },
      {
        id: "version-control",
        name: "Version Control",
        windsurf: {
          name: "Git Integration",
          description: "Git-aware suggestions with commit message generation and branch support",
          rating: 8.5,
        },
        cursor: {
          name: "Basic Git Support",
          description: "Standard Git integration without advanced features",
          rating: 7.0,
        },
      },
    ],
  },
  {
    id: "performance",
    name: "Performance Metrics",
    features: [
      {
        id: "speed",
        name: "Speed & Responsiveness",
        windsurf: {
          name: "Complex Operations",
          description: "Superior in complex, multi-file operations with ~200ms context-aware suggestions",
          rating: 8.0,
        },
        cursor: {
          name: "Single-file Speed",
          description: "Excels in single-file edits with sub-100ms autocomplete",
          rating: 8.5,
        },
      },
      {
        id: "startup",
        name: "Startup Performance",
        windsurf: {
          name: "Optimized Startup",
          description: "2-5 second startup with longer initial indexing on large codebases",
          rating: 7.5,
        },
        cursor: {
          name: "Fast Startup",
          description: "Quick startup for simple tasks",
          rating: 8.0,
        },
      },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Features",
    features: [
      {
        id: "team-collab",
        name: "Team Collaboration",
        windsurf: {
          name: "Teams Plan",
          description: "Centralized billing, admin dashboard with analytics, and priority support",
          rating: 9.0,
        },
        cursor: {
          name: "Business Plan",
          description: "Team management without specialized collaboration features",
          rating: 7.0,
        },
      },
      {
        id: "security",
        name: "Security Features",
        windsurf: {
          name: "Enterprise Security",
          description: "Zero data retention, encryption in transit, and self-hosted deployment options",
          rating: 9.0,
        },
        cursor: {
          name: "Privacy Mode",
          description: "SOC 2 Type II certification but limited enterprise access controls",
          rating: 7.5,
        },
      },
      {
        id: "pricing",
        name: "Pricing",
        windsurf: {
          name: "Competitive Pricing",
          description: "Pro: $15/month, Teams: $30/user/month with generous free tier",
          rating: 8.5,
        },
        cursor: {
          name: "Higher Pricing",
          description: "Pro: $20/month, Business: $40/user/month with limited free tier",
          rating: 7.0,
        },
      },
    ],
  },
];

export const performanceData = [
  { category: "Context Understanding", windsurf: 9.2, cursor: 7.5 },
  { category: "Code Generation Quality", windsurf: 9.0, cursor: 7.8 },
  { category: "Multi-file Operations", windsurf: 9.3, cursor: 7.2 },
  { category: "Interface & Workflow", windsurf: 8.7, cursor: 7.9 },
  { category: "Learning Curve", windsurf: 7.5, cursor: 8.5 },
  { category: "Context Management", windsurf: 9.1, cursor: 7.3 },
  { category: "Productivity Gains", windsurf: 9.0, cursor: 7.7 },
  { category: "Accuracy & Reliability", windsurf: 8.8, cursor: 7.6 },
  { category: "Developer Satisfaction", windsurf: 8.9, cursor: 8.0 },
];

export const pricingData = {
  windsurf: {
    free: {
      name: "Free",
      features: [
        "Unlimited fast Tab completion",
        "Access to multiple AI models",
        "25 prompt credits",
        "Basic features"
      ],
      price: "$0"
    },
    pro: {
      name: "Pro",
      features: [
        "All Free features",
        "Unlimited prompts",
        "Access to SWE-1 models",
        "Advanced features"
      ],
      price: "$15/month"
    },
    teams: {
      name: "Teams",
      features: [
        "All Pro features",
        "Centralized billing",
        "Admin dashboard with analytics",
        "Priority support",
        "Team collaboration tools"
      ],
      price: "$30/user/month"
    }
  },
  cursor: {
    free: {
      name: "Free",
      features: [
        "Basic autocomplete",
        "Limited AI features",
        "Standard support"
      ],
      price: "$0"
    },
    pro: {
      name: "Pro",
      features: [
        "All Free features",
        "Advanced AI features",
        "Priority support"
      ],
      price: "$20/month"
    },
    business: {
      name: "Business",
      features: [
        "All Pro features",
        "Team management",
        "Basic analytics",
        "Standard team features"
      ],
      price: "$40/user/month"
    }
  }
};

export const windSurfFeatures = [
  {
    title: "Cascade Agent System",
    description: "Primary agentic AI system that can independently code, debug, and iterate with multi-file editing capabilities and context awareness.",
    icon: "Brain"
  },
  {
    title: "Windsurf Tab System",
    description: "Advanced autocomplete combining autocomplete, supercomplete, tab-to-jump, and tab-to-import with context-aware predictions.",
    icon: "LayoutGrid"
  },
  {
    title: "SWE-1 Model Family",
    description: "Purpose-built models for software engineering including SWE-1 (full-size), SWE-1-lite, and SWE-1-mini.",
    icon: "Cpu"
  },
  {
    title: "Windsurf Browser",
    description: "Built-in Chromium browser with DOM element selection and browser console access for seamless development.",
    icon: "Globe"
  },
  {
    title: "AI Memories & Rules",
    description: "Persistent memory system that remembers project patterns and preferences with custom rules for AI behavior.",
    icon: "Database"
  },
  {
    title: "MCP Integration",
    description: "Model Context Protocol servers to extend agent capabilities with external tools and SSE support.",
    icon: "Network"
  }
];

export const cursorFeatures = [
  {
    title: "Composer Agent",
    description: "AI agent with multi-file capabilities but less autonomous than Cascade, requiring more user guidance.",
    icon: "MessageSquare"
  },
  {
    title: "Basic Tab Completion",
    description: "Standard autocomplete with limited context awareness, primarily relying on open buffers and recent history.",
    icon: "Type"
  },
  {
    title: "General AI Models",
    description: "Uses general-purpose models not specifically optimized for coding tasks.",
    icon: "Bot"
  },
  {
    title: "VS Code Integration",
    description: "Built on VS Code with AI features added but lacking integrated browser capabilities.",
    icon: "Code"
  },
  {
    title: "Basic Memory System",
    description: "Limited memory capabilities across sessions without persistent project patterns.",
    icon: "Bookmark"
  },
  {
    title: "Privacy Features",
    description: "SOC 2 Type II certification with Privacy Mode but limited enterprise access controls.",
    icon: "Shield"
  }
]; 