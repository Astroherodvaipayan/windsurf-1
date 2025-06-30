import { FeatureComparison } from "@/components/feature-comparison";
import { FeatureHighlights } from "@/components/feature-highlights";
import { Hero } from "@/components/hero";
import { PricingComparison } from "@/components/pricing-comparison";
import { NotebookSection } from "@/components/notebook-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <Hero />
      
      <section id="features" className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Key Features Comparison</h2>
          <FeatureHighlights />
        </div>
      </section>
      
      <section id="comparison" className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Detailed Feature Comparison</h2>
          <FeatureComparison />
        </div>
      </section>
      
      <section id="pricing" className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Pricing Plans</h2>
          <PricingComparison />
        </div>
      </section>

      <section id="notebook" className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">My final Thoughts</h2>
          <NotebookSection />
        </div>
      </section>
    </div>
  );
}
