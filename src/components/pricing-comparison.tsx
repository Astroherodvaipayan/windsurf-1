"use client";

import { pricingData } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

export function PricingComparison() {
  return (
    <Tabs defaultValue="windsurf" className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList>
          <TabsTrigger value="windsurf">Windsurf</TabsTrigger>
          <TabsTrigger value="cursor">Cursor</TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value="windsurf">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard 
            title={pricingData.windsurf.free.name}
            price={pricingData.windsurf.free.price}
            description="For individual developers getting started"
            features={pricingData.windsurf.free.features}
          />
          <PricingCard 
            title={pricingData.windsurf.pro.name}
            price={pricingData.windsurf.pro.price}
            description="For professional developers"
            features={pricingData.windsurf.pro.features}
            highlighted={true}
          />
          <PricingCard 
            title={pricingData.windsurf.teams.name}
            price={pricingData.windsurf.teams.price}
            description="For development teams and organizations"
            features={pricingData.windsurf.teams.features}
          />
        </div>
      </TabsContent>
      
      <TabsContent value="cursor">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard 
            title={pricingData.cursor.free.name}
            price={pricingData.cursor.free.price}
            description="For individual developers getting started"
            features={pricingData.cursor.free.features}
          />
          <PricingCard 
            title={pricingData.cursor.pro.name}
            price={pricingData.cursor.pro.price}
            description="For professional developers"
            features={pricingData.cursor.pro.features}
            highlighted={true}
          />
          <PricingCard 
            title={pricingData.cursor.business.name}
            price={pricingData.cursor.business.price}
            description="For development teams and organizations"
            features={pricingData.cursor.business.features}
          />
        </div>
      </TabsContent>
      
      <div className="mt-12 text-center">
        <h3 className="text-xl font-medium mb-4">Pricing Analysis</h3>
        <div className="max-w-2xl mx-auto text-left space-y-4">
          <p>
            <strong>Cost Comparison:</strong> Windsurf offers more competitive pricing with Pro plans at $15/month versus Cursor&apos;s $20/month.
            Windsurf&apos;s free tier provides more generous features including 25 prompt credits and access to premium models.
          </p>
          <p>
            <strong>Value Proposition:</strong> Windsurf&apos;s lower pricing combined with superior multi-file capabilities and enterprise features provides better value for complex development work.
            The platform&apos;s autonomous capabilities can justify higher per-seat costs through productivity gains.
          </p>
          <p>
            <strong>Feature Availability:</strong> Windsurf&apos;s free tier includes unlimited fast Tab completion and access to multiple AI models.
            Paid tiers unlock higher prompt limits and advanced features like SWE-1 models. Cursor&apos;s free tier is more limited, with key features requiring paid subscriptions.
          </p>
        </div>
      </div>
    </Tabs>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

function PricingCard({ title, price, description, features, highlighted = false }: PricingCardProps) {
  return (
    <Card className={`flex flex-col ${highlighted ? 'border-primary shadow-lg' : ''}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="text-3xl font-bold mb-6">{price}</div>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        {highlighted && (
          <div className="text-sm text-muted-foreground">
            Most popular choice
          </div>
        )}
      </CardFooter>
    </Card>
  );
} 