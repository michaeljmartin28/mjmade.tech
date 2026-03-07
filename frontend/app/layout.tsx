// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Nav from "./components/Nav";
import Agent from "./components/agent/Agent";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="max-w-3xl mx-auto">
        <Nav />
        <main className="p-6">{children}</main>
        <div>
          <Agent></Agent>
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

export const metadata = {
  title: "mjmade.tech",
  icons: {
    icon: "/logo.svg",
  },
};
