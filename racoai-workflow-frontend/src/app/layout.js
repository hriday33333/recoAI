import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RacoHub.com",
  description: "RacoHub.com is a role-based project marketplace where buyers create projects and problem solvers deliver solutions through structured workflows. It enables smooth project assignment, task management, and ZIP file submissions with clear, animated state transitions.",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {children}

      </body>
    </html>
  );
}
