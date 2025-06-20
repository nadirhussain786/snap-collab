import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@fontsource/poppins/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/fira-code/400.css";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "SnapCollab – Real-Time Slide Collaboration",
  description:
    "The fastest way to collaborate on slides with Supabase + Next.js",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.className} 
          font-body 
          antialiased 
          bg-background 
          text-foreground
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
