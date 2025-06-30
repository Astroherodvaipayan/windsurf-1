"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { windSurfFeatures, cursorFeatures } from "@/lib/data";
import { Brain, Cpu, Globe, MessageSquare, Network, Type, Bot, Code, Bookmark, Shield, Database, LayoutGrid } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  Globe: <Globe className="h-6 w-6" />,
  MessageSquare: <MessageSquare className="h-6 w-6" />,
  Network: <Network className="h-6 w-6" />,
  Type: <Type className="h-6 w-6" />,
  Bot: <Bot className="h-6 w-6" />,
  Code: <Code className="h-6 w-6" />,
  Bookmark: <Bookmark className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Memory: <Database className="h-6 w-6" />,
  Tab: <LayoutGrid className="h-6 w-6" />,
};

export function FeatureHighlights() {
  return (
    <Tabs defaultValue="windsurf" className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList>
          <TabsTrigger value="windsurf">Windsurf</TabsTrigger>
          <TabsTrigger value="cursor">Cursor</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="windsurf">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {windSurfFeatures.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  {iconMap[feature.icon]}
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="cursor">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cursorFeatures.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  {iconMap[feature.icon]}
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
} 