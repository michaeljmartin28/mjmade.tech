// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Nav from "./components/Nav";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto">
        <Nav />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
