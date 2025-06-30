import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { LayoutWrapper } from "@/components/layout-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Windsurf vs Cursor Comparison",
  description: "Comprehensive comparison of Windsurf and Cursor AI coding assistants",
  icons: {
    icon: "/favicon.ico",
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen bg-background`}>
        <LayoutWrapper>
          <Navbar />
          <main className="container mx-auto px-4 py-6">
            {children}
          </main>
          <footer className="border-t py-6 md:py-8">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Windsurf vs Cursor Comparison. All data compiled from public sources.</p>
            </div>
          </footer>
        </LayoutWrapper>
      </body>
    </html>
  );
}
