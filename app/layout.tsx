import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    >
      <body>{children}</body>
    </html>
  );
}
