import { Geist, Geist_Mono, Tenor_Sans, Antic_Didone } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"], // Tenor Sans only has weight 400
  display: "swap",
  variable: "--font-tenor", // Creates a CSS variable
});

const anticDidone = Antic_Didone({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-anticdidone", // Creates a CSS variable
});


export const metadata = {
  title: "Middeglam",
  description: "Micro blading beauty salon",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tenorSans.variable} ${anticDidone.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
