import type { Metadata } from "next";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const arealMono = localFont({
  src: "./fonts/ABCArealMonoVariable.woff2",
  variable: "--font-arealMono",
  weight: "100 900",
});
const arealSans = localFont({
  src: "./fonts/ABCArealVariable.woff2",
  variable: "--font-arealSans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aditya Roychoudhary",
  description:
    "Mostly self taught software engineer. Frontend and Backend. Still a student.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${arealMono.variable} ${arealSans.variable} h-full antialiased`}
        suppressHydrationWarning
      >
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-20">
              <header className="flex flex-col gap-2 [view-transition-name:main-nav]">
                <h1 className="fade-in [--i:0]">Aditya Roychoudhary</h1>
                <Navbar />
              </header>
              {children}
            </main>
            <SmoothScroll />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
