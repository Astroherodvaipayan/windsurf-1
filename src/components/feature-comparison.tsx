"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { featureCategories } from "@/lib/data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function FeatureComparison() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {featureCategories.map((category) => (
        <AccordionItem key={category.id} value={category.id}>
          <AccordionTrigger className="text-xl font-medium">{category.name}</AccordionTrigger>
          <AccordionContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Feature</TableHead>
                    <TableHead>Windsurf</TableHead>
                    <TableHead>Cursor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {category.features.map((feature) => (
                    <TableRow key={feature.id}>
                      <TableCell className="font-medium">{feature.name}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{feature.windsurf.name}</div>
                          <div className="text-sm text-muted-foreground">{feature.windsurf.description}</div>
                          <div className="mt-2 flex items-center">
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary" 
                                style={{ width: `${feature.windsurf.rating * 10}%` }}
                              />
                            </div>
                            <span className="ml-2 text-sm font-medium">{feature.windsurf.rating}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{feature.cursor.name}</div>
                          <div className="text-sm text-muted-foreground">{feature.cursor.description}</div>
                          <div className="mt-2 flex items-center">
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary" 
                                style={{ width: `${feature.cursor.rating * 10}%` }}
                              />
                            </div>
                            <span className="ml-2 text-sm font-medium">{feature.cursor.rating}</span>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
} 