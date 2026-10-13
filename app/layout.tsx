import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const arealMono = localFont({
  src: "./fonts/ABCArealMonoVariable.woff2",
  variable: "--font-arealMono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aditya Roychoudhary",
  description: "Mostly self taught software engineer. Frontend and Backend. Still a student.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${arealMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>
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
