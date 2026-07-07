import type { Metadata } from "next";
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



export const metadata: Metadata = {

  title: "Sachin M V | Data Science & AI Portfolio",

  description:
    "Portfolio of Sachin M V, a Data Science professional specializing in Artificial Intelligence, Machine Learning, Natural Language Processing, Data Analysis, and engineering-driven solutions.",

  keywords: [
    "Sachin M V",
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Python",
    "Hugging Face",
    "Data Analyst",
    "AI Engineer",
  ],

  authors: [
    {
      name: "Sachin M V",
    },
  ],

  openGraph: {

    title: "Sachin M V | Data Science & AI Portfolio",

    description:
      "Data Science professional specializing in AI, Machine Learning, NLP, Data Analysis, and engineering solutions.",

    type: "website",

  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {children}

      </body>

    </html>

  );

}