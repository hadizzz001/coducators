import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conductors",
  description:
    "Inspiring a love for coding in kids while helping them gain practical skills proudly at Conductors Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
