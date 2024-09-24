import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { UserButton } from "@/ui/user-button";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GPT App",
  description: "Chat with GPT",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiase`}
      >
        <header className="flex justify-between items-center p-4">
          <div className="">
            <Link href="/">GPT Chat</Link>
            <Link href="/about" className="ml-5 font-light">
              About
            </Link>
          </div>
          <UserButton session={session} />
        </header>
        <div className="flex flex-col md:flex-row">
          <div className="flex-grow container mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
