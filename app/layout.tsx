import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Client Red Flag Detector — Analyze Payment Risk Before You Start",
  description: "Check client email domains, LinkedIn profiles, and payment blacklists to generate risk scores for potential clients. Protect your freelance income."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="39edc6e7-c69a-42b7-8d63-6db6d2df9aee"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
