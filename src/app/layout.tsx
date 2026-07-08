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
  metadataBase: new URL("https://sachinmavelil.vercel.app"),

verification: {

  google: "415_gSn65OKRg6Ei06hX7OpVNJhk5snlOHMRtyjV-ZY",

},

  title: "Sachin M V | Data Science & AI Portfolio",

  description:
    "Portfolio of Sachin M V showcasing Artificial Intelligence, Machine Learning, Natural Language Processing, Computer Vision, Data Analysis, engineering experience, and professional projects.",

  keywords: [
    "Sachin M V",
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Python",
    "AI Engineer",
    "Data Analyst",
  ],

  authors: [
    {
      name: "Sachin M V",
    },
  ],

  openGraph: {
    title: "Sachin M V | Data Science & AI Portfolio",

    description:
      "Explore AI, Machine Learning, Data Science projects, engineering experience, certifications, and professional learning.",

    url: "https://sachinmavelil.vercel.app",

    siteName: "Sachin M V Portfolio",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sachin M V Data Science and AI Portfolio",
      },
    ],

    locale: "en_US",

    type: "website",
  },


  twitter: {
    card: "summary_large_image",

    title: "Sachin M V | Data Science & AI Portfolio",

    description:
      "Data Science, Artificial Intelligence, Machine Learning, NLP, and Computer Vision portfolio.",

    images: [
      "/opengraph-image.png",
    ],
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