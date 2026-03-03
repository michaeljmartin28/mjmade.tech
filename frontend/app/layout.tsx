// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Nav from "./components/Nav";
import Agent from "./components/agent/Agent";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto">
        <Nav />
        <main className="p-6">{children}</main>
        <div>
          <Agent></Agent>
        </div>
      </body>
    </html>
  );
}
