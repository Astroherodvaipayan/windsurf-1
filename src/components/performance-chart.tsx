"use client";

import { performanceData } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

// Simple client-side only chart rendering
function ChartComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="h-[500px] w-full flex items-center justify-center">Loading chart...</div>;
  }

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = require('recharts');

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={performanceData}
        margin={{ top: 20, right: 30, left: 20, bottom: 120 }}
        barSize={30}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="category" 
          angle={-45} 
          textAnchor="end"
          height={100}
          interval={0}
        />
        <YAxis domain={[0, 10]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="windsurf" name="Windsurf" fill="#3b82f6" />
        <Bar dataKey="cursor" name="Cursor" fill="#f97316" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function PerformanceChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Performance Comparison</CardTitle>
        <CardDescription>
          Comparative analysis of Windsurf and Cursor across key performance metrics (scale: 1-10)
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="h-[500px] w-full">
          <ChartComponent />
        </div>
        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-medium">Key Insights:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Context Understanding:</strong> Windsurf significantly outperforms Cursor in cross-file context awareness and large codebase understanding.</li>
            <li><strong>Multi-file Operations:</strong> Windsurf&apos;s Cascade agent excels at propagating changes across multiple files and maintaining consistency.</li>
            <li><strong>Learning Curve:</strong> Cursor has a gentler learning curve due to its VS Code familiarity, while Windsurf requires more initial learning.</li>
            <li><strong>Developer Satisfaction:</strong> Both tools receive high satisfaction ratings, with Windsurf preferred for complex tasks and Cursor for simpler operations.</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
} 