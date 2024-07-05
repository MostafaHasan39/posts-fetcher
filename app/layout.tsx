import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Posts Fetcher",
  description: "Dummy App to fetch posts from JSONPlaceholder API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="max-w-[1440px] mx-auto my-4 px-4">{children}</main>
      </body>
    </html>
  );
}
