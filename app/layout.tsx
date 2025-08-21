import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/app/_styles/globals.css";
import Logo from "@/app/_components/Logo";
import { Josefin_Sans } from "next/font/google";
import Header from "@/app/_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  // title: "The Wild Oasis",
  // description: "App for next.js ",
  title: {
    template: "%s The Wild Oasis",
    default: "Welcome / The wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomities, surrounded by the beautiful mountains and dark forests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className}antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 ">
          {" "}
          <main className="max-w-7xl mx-auto ">{children}</main>
        </div>
      </body>
    </html>
  );
}
