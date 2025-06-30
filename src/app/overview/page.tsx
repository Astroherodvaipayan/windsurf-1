"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Add custom styles for tables
const tableStyles = `
  .comparison-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
  }
  .comparison-table th,
  .comparison-table td {
    border: 1px solid #e2e8f0;
    padding: 0.75rem;
    text-align: left;
  }
  .comparison-table th {
    background-color: #f1f5f9;
  }
  .comparison-table tr:hover {
    background-color: #f8fafc;
  }
`;

const sections = [
  {
    id: "evolution",
    title: "Evolution of AI Coding Tools",
    content: `
      <p>The trend in AI coding tools is moving beyond simple plugins to becoming <strong>core architectural features</strong> within IDEs. Tools like Cursor and Windsurf, both built on VS Code, are examples of this, tightly weaving AI into almost every aspect of the development process, from autocompletion to code execution.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Key aspects of this evolution include:</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Agentic Capabilities:</strong> There's a strong focus on "agentic mode," where the AI can understand high-level requests, search codebases, plan and execute changes, modify files, and even run and verify commands autonomously.</li>
        <li><strong>Faster Iteration and Feature Borrowing:</strong> The landscape is highly dynamic, with constant improvements and ideas frequently being adopted from one tool by another.</li>
        <li><strong>Improved Context Handling and Codebase Understanding:</strong> Tools are becoming significantly better at maintaining context across multiple files, modules, and entire repositories.</li>
        <li><strong>Multi-file Refactoring:</strong> AI tools are increasingly capable of orchestrating multi-file changes and refactors, automatically propagating changes across numerous files.</li>
        <li><strong>Local vs. Cloud Processing & Privacy:</strong> While most tools rely on powerful cloud-hosted models, there's a growing emphasis on local components for speed and privacy.</li>
        <li><strong>Integration with Development Workflows:</strong> These tools are integrating more deeply with existing Git workflows, CI/CD pipelines, and modular service structures.</li>
      </ul>
    `
  },
  {
    id: "developer-roles",
    title: "Implications for Developer Roles",
    content: `
      <p>The evolution of AI coding tools is poised to fundamentally reshape the developer's role:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Shift Towards Supervision and Design:</strong> Developers' roles will likely transition from writing extensive boilerplate code to supervision, design, and integration.</li>
        <li><strong>Increased Productivity:</strong> AI tools are seen as a "force multiplier", enabling developers to produce and maintain significantly more code. Some estimates suggest a >2x productivity improvement.</li>
        <li><strong>AI as a "Teammate" or Mentor:</strong> AI agents can function as active team members, with tasks explicitly assigned to them in a sprint.</li>
        <li><strong>Importance of Review and Debugging Skills:</strong> While AI can generate code rapidly, developers still need to carefully review and debug the output.</li>
        <li><strong>Adapting Workflow and Control:</strong> Developers will need to adapt their workflows to effectively leverage these tools.</li>
        <li><strong>Transparency and Policy Adherence:</strong> In professional settings, developers must be transparent with their teams about using these tools.</li>
      </ul>
    `,
    chart: "developerRolesChart"
  },
  {
    id: "future-ides",
    title: "Future of IDEs",
    content: `
      <p>The rise of AI coding tools is profoundly shaping the future of IDEs:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Native AI Integration:</strong> Mainstream IDEs like Visual Studio Code and IntelliJ are expected to natively integrate agent/assistant capabilities.</li>
        <li><strong>New "Modes" of Operation:</strong> IDEs might evolve to include distinct modes, such as a "creative mode" for traditional coding and an "agent mode" where the IDE takes over routine tasks.</li>
        <li><strong>Enhanced Collaboration Features:</strong> IDEs are expected to bake in more collaboration features, such as AI-driven code reviews that can leave comments on pull requests.</li>
        <li><strong>Broader Software Lifecycle Support:</strong> AI agents are anticipated to become assistants across the entire software lifecycle, helping with tracking issues, writing documentation, and monitoring software.</li>
      </ul>
    `
  },
  {
    id: "tool-comparison",
    title: "Windsurf vs. Cursor Comparison",
    content: `
      <div class="space-y-6">
        <h3 class="text-xl font-semibold mb-2">Agentic Capabilities</h3>
        <p>There's a strong focus on "agentic mode," where the AI can understand high-level requests, search codebases, plan and execute changes, modify files, and even run and verify commands autonomously. This is exemplified by Windsurf's Cascade, which pioneered this agentic design, and Cursor's Agent mode. While both offer agentic features, Windsurf defaults to an agent-style philosophy, handling multi-step "AI Flows" more seamlessly, whereas Cursor provides a choice between direct assistance and an agent executing tasks via its Agent mode or Composer feature. Some users, however, find that many current "agent" tools, including Cursor and Windsurf, primarily generate code and lack the ability to truly evaluate, debug, and iterate on their own correctness like a human would, often requiring manual intervention for bugs.</p>
        
        <h3 class="text-xl font-semibold mb-2">Faster Iteration and Feature Borrowing</h3>
        <p>The landscape is highly dynamic, with constant improvements and ideas frequently being adopted from one tool by another, indicating intense competition and rapid progress.</p>
        
        <h3 class="text-xl font-semibold mb-2">Improved Context Handling and Codebase Understanding</h3>
        <p>Tools are becoming significantly better at maintaining context across multiple files, modules, and entire repositories. They achieve this through semantic indexing and memory systems, allowing them to "see" a larger portion of the project than just the currently open files, which leads to more accurate and comprehensive suggestions and refactoring. Windsurf's Cascade Memory System and Indexing Engine are particularly noted for their deep codebase awareness, retrieving context from anywhere in the codebase and persisting it across sessions through "Memories." Cursor also indexes codebases, but its process involves uploading chunks to its server to compute embeddings, and its context philosophy tends to focus on the immediate context of open files or provided snippets.</p>
        
        <h3 class="text-xl font-semibold mb-2">Multi-file Refactoring</h3>
        <p>AI tools are increasingly capable of orchestrating multi-file changes and refactors, automatically propagating changes across numerous files and potentially running tests to verify modifications. Windsurf's agentic approach "shines in large-scale refactoring," automatically editing files and running tests to verify changes before presenting them for approval. Cursor also supports multi-file refactoring, typically by planning changes and presenting diffs for approval.</p>
        
        <h3 class="text-xl font-semibold mb-2">Local vs. Cloud Processing & Privacy</h3>
        <p>While most tools rely on powerful cloud-hosted models for complex AI tasks, there's a growing emphasis on local components for speed and privacy. Windsurf (Codeium) stands out by offering a self-hosted deployment option for enterprises, ensuring sensitive IP never leaves the network, providing an "air-gapped setup." Cursor, by contrast, routes all AI requests through its backend servers, even when using personal API keys, meaning it always requires an internet connection and relies on cloud processing. Both offer "Privacy Mode" (Cursor) or "zero-day data retention" (Windsurf) to prevent long-term storage of code snippets or prompts on their servers. For enterprises with strict compliance, Windsurf's on-premise solution is a significant advantage over Cursor's cloud-only model.</p>
        
        <h3 class="text-xl font-semibold mb-2">Integration with Development Workflows</h3>
        <p>These tools are integrating more deeply with existing Git workflows, CI/CD pipelines, and modular service structures. Some tools, like Qodo, offer seamless transitions between IDE and terminal workflows, allowing AI-driven tasks from the command line.</p>
        
      <p>In the context of this rapidly evolving landscape, tools like Cursor and Windsurf represent the cutting edge. Windsurf is often praised for its cleaner, more intuitive UI and a default agentic design that seamlessly handles context and multi-step "AI Flows". It "just gets it" and takes initiative, making it appealing for beginners and rapid prototyping.</p>
      <p class="mt-4">The competitive nature of these tools means they are constantly improving and borrowing features from each other. Ultimately, the "winner" in this space is temporary, as mainstream IDEs are expected to integrate similar AI capabilities, potentially absorbing the innovations pioneered by these specialized AI-first editors.</p>
      </div>
    `,
    
  },
  {
    id: "side-by-side",
    title: "Side-by-Side Detailed Comparison",
    content: `
      <div class="space-y-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">🧩 1. Core Architecture and Agent Design</h3>
          <table class="comparison-table">
            <thead>
              <tr class="bg-muted">
                <th class="border p-2 text-left">Feature</th>
                <th class="border p-2 text-left">Windsurf</th>
                <th class="border p-2 text-left">Cursor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2 font-medium">IDE Foundation</td>
                <td class="border p-2">Fork of VS Code</td>
                <td class="border p-2">Fork of VS Code</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">AI Integration Philosophy</td>
                <td class="border p-2"><strong>Agentic-first</strong>, modular AI agents embedded deeply into the environment</td>
                <td class="border p-2"><strong>Monolithic AI Copilot</strong>, centered around single large LLM integration</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">Agent System</td>
                <td class="border p-2">Multiple cooperating <strong>task-specific agents</strong> (refactor, plan, explain, test)</td>
                <td class="border p-2">Primarily a <strong>single assistant</strong> window for LLM queries</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">Execution & Orchestration</td>
                <td class="border p-2">Tasks executed by autonomous agents through modular pipelines (task → subtask → validation)</td>
                <td class="border p-2">Mostly reactive: user asks, LLM responds</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">Extensibility of Agents</td>
                <td class="border p-2">Actively building <strong>an open plugin system</strong> to let users build/modify agents</td>
                <td class="border p-2">No agent/plugin architecture exposed to devs yet</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">LLM Backend</td>
                <td class="border p-2">Model-agnostic, optimized for <strong>offline LLMs + local tooling</strong></td>
                <td class="border p-2">Primarily OpenAI APIs (GPT-4) with no offline/in-house model options</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">🧠 2. Context Awareness & Workspace Understanding</h3>
          <table class="comparison-table">
            <thead>
              <tr class="bg-muted">
                <th class="border p-2 text-left">Feature</th>
                <th class="border p-2 text-left">Windsurf</th>
                <th class="border p-2 text-left">Cursor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2 font-medium">Whole-project memory</td>
                <td class="border p-2">Persistent and shared across agents; agents are aware of repo structure and history</td>
                <td class="border p-2">Scoped to LLM context limits (usually ~16k-32k tokens)</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">Context Navigation</td>
                <td class="border p-2">Agents index your repo and update memory as you work</td>
                <td class="border p-2">LLM context window is managed manually or semi-automatically</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">Dependency Graphing</td>
                <td class="border p-2">Agents can <strong>crawl, analyze and reason over dependency graphs</strong> to inform refactors and tests</td>
                <td class="border p-2">Not yet deeply supported</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">Multi-agent Planning</td>
                <td class="border p-2">Agents can plan tasks over multiple files or services</td>
                <td class="border p-2">Cursor offers single LLM responses per task</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">🚀 3. Workflow Automation</h3>
          <table class="comparison-table">
            <thead>
              <tr class="bg-muted">
                <th class="border p-2 text-left">Feature</th>
                <th class="border p-2 text-left">Windsurf</th>
                <th class="border p-2 text-left">Cursor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2 font-medium">End-to-end features (e.g., "Add OAuth login")</td>
                <td class="border p-2">Supported via <strong>task orchestration</strong>: planning → file creation → testing</td>
                <td class="border p-2">Requires <strong>manual prompting</strong> across multiple steps</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">Interactive Plans</td>
                <td class="border p-2">Agents propose plans, allow you to approve/decline sub-steps</td>
                <td class="border p-2">Cursor mostly gives code snippets or explanations</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">Real-time collaboration</td>
                <td class="border p-2">Vision to have <strong>multi-agent collaboration</strong> (e.g., planner + implementer + tester)</td>
                <td class="border p-2">Single LLM assistant, not agent swarm</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">Testing integration</td>
                <td class="border p-2">Agent can run tests before and after edits</td>
                <td class="border p-2">Cursor can write tests but doesn't run/validate them in-agent</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">Refactor / Debugging</td>
                <td class="border p-2">Windsurf can <strong>refactor, validate and test</strong> changes with AI agents</td>
                <td class="border p-2">Cursor can suggest code edits but doesn't validate/confirm correctness automatically</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">📦 4. Developer Experience and UX</h3>
          <table class="comparison-table">
            <thead>
              <tr class="bg-muted">
                <th class="border p-2 text-left">Feature</th>
                <th class="border p-2 text-left">Windsurf</th>
                <th class="border p-2 text-left">Cursor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2 font-medium">User Experience</td>
                <td class="border p-2">Clean, familiar VS Code UI with AI-nativeness embedded contextually</td>
                <td class="border p-2">Slightly more polished due to longer maturity, but still extension-heavy</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">Editor-Native AI Actions</td>
                <td class="border p-2">Right-click → Refactor with Agent, etc.</td>
                <td class="border p-2">Cmd+K or chat bar → request edit</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">Offline use</td>
                <td class="border p-2">Windsurf aims for <strong>LLM agnosticism</strong>, including offline support</td>
                <td class="border p-2">Cursor depends on OpenAI API — requires internet</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">Team Collaboration</td>
                <td class="border p-2">Future focus includes <strong>agent-based team workflows</strong></td>
                <td class="border p-2">Cursor is still <strong>single-user AI assistant</strong> driven</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">🧠 5. Philosophical Design Differences</h3>
          <table class="comparison-table">
            <thead>
              <tr class="bg-muted">
                <th class="border p-2 text-left">Philosophy</th>
                <th class="border p-2 text-left">Windsurf</th>
                <th class="border p-2 text-left">Cursor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2 font-medium">Autonomy-first</td>
                <td class="border p-2">Build a tool where agents <strong>autonomously build and maintain software</strong></td>
                <td class="border p-2">AI helps a dev write faster, but does not own workflows</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">Agentic Design</td>
                <td class="border p-2">Think of agents as <strong>colleagues</strong>, not just autocomplete engines</td>
                <td class="border p-2">Cursor is ChatGPT-in-the-editor</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">Extensibility</td>
                <td class="border p-2">Agents can be extended or created via plugins</td>
                <td class="border p-2">Cursor does not yet support agent or plugin authoring by devs</td>
              </tr>
              <tr>
                <td class="border p-2 font-medium">Vision</td>
                <td class="border p-2">Building an <strong>AI-native software engineer</strong></td>
                <td class="border p-2">Building the <strong>best autocomplete/code assistant</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    chart: "sideBySideChart"
  }
];

export default function OverviewPage() {
  const [activeSection, setActiveSection] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setActiveSection((prev) => Math.min(prev + 1, sections.length - 1));
  };

  const handlePrev = () => {
    setActiveSection((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    // No need to scroll to top since we removed the fixed height
  }, [activeSection]);

  return (
    <div className="container mx-auto py-8">
      <style dangerouslySetInnerHTML={{ __html: tableStyles }} />
      <h1 className="text-3xl font-bold mb-8 text-center">AI Coding Tools Evolution</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:w-1/4">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>Sections</CardTitle>
              <CardDescription>Navigate through different sections</CardDescription>
            </CardHeader>
            <CardContent>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(index)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                      activeSection === index
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </CardContent>
          </Card>
        </div>
        
        {/* Main Content */}
        <div className="lg:w-3/4">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>{sections[activeSection].title}</CardTitle>
            </CardHeader>
            <CardContent 
              ref={contentRef}
              className="prose prose-sm dark:prose-invert max-w-none p-6"
              dangerouslySetInnerHTML={{ __html: sections[activeSection].content }}
            />
          </Card>
          
          {/* Visualization removed */}
          
          {/* Visualization - only show for Developer Roles section */}
          {sections[activeSection].id === "developer-roles" && (
            <Card>
              <CardHeader>
                <CardTitle>Visualization</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px]">
                {renderChart("developerRolesChart")}
              </CardContent>
            </Card>
          )}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <Button 
              variant="outline" 
              onClick={handlePrev} 
              disabled={activeSection === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button 
              onClick={handleNext} 
              disabled={activeSection === sections.length - 1}
            >
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Chart rendering function
function renderChart(chartType: string | undefined) {
  if (!chartType) return <div className="flex items-center justify-center h-full">No chart available</div>;
  
  switch (chartType) {
    case "evolutionChart":
      const evolutionData = [
        { name: "Agentic Capabilities", windsurf: 9, cursor: 7 },
        { name: "Context Handling", windsurf: 9, cursor: 7 },
        { name: "Multi-file Refactoring", windsurf: 8, cursor: 7 },
        { name: "Privacy Options", windsurf: 9, cursor: 6 },
        { name: "Workflow Integration", windsurf: 8, cursor: 8 }
      ];
      
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={evolutionData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 10]} />
            <YAxis dataKey="name" type="category" width={150} />
            <Tooltip />
            <Legend />
            <Bar dataKey="windsurf" name="Windsurf" fill="#3b82f6" />
            <Bar dataKey="cursor" name="Cursor" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>
      );
      
    case "developerRolesChart":
      const developerRolesData = [
        { name: "Code Writing", value: 30 },
        { name: "Supervision & Review", value: 25 },
        { name: "Design & Architecture", value: 25 },
        { name: "Debugging", value: 20 }
      ];
      
      const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
      
      return (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={developerRolesData}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {developerRolesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      );
      
    case "futureIdesChart":
      const futureIdesData = [
        { name: "Native AI Integration", current: 3, future: 9 },
        { name: "Multiple Operation Modes", current: 2, future: 8 },
        { name: "Collaboration Features", current: 5, future: 9 },
        { name: "Lifecycle Support", current: 4, future: 8 }
      ];
      
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={futureIdesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="current" name="Current IDEs" fill="#82ca9d" />
            <Bar dataKey="future" name="Future IDEs" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      );
      
    case "toolComparisonChart":
      const toolComparisonData = [
        { category: "UI Intuitiveness", windsurf: 9, cursor: 7 },
        { category: "Agentic Capabilities", windsurf: 9, cursor: 7 },
        { category: "Speed", windsurf: 7, cursor: 9 },
        { category: "Context Handling", windsurf: 9, cursor: 7 },
        { category: "Customization", windsurf: 7, cursor: 9 },
        { category: "Memory Usage", windsurf: 6, cursor: 8 }
      ];
      
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={toolComparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="windsurf" name="Windsurf" fill="#3b82f6" />
            <Bar dataKey="cursor" name="Cursor" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>
      );
      
    case "sideBySideChart":
      const sideBySideData = [
        { category: "Autonomy", windsurf: 9, cursor: 6 },
        { category: "Multi-agent Support", windsurf: 9, cursor: 5 },
        { category: "Context Awareness", windsurf: 8, cursor: 6 },
        { category: "Offline Capabilities", windsurf: 8, cursor: 3 },
        { category: "Extensibility", windsurf: 7, cursor: 5 }
      ];
      
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sideBySideData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="windsurf" name="Windsurf" fill="#3b82f6" />
            <Bar dataKey="cursor" name="Cursor" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>
      );
      
    default:
      return <div className="flex items-center justify-center h-full">No chart available</div>;
  }
} 