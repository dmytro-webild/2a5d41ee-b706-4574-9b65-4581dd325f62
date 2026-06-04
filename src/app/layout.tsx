import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Poppins } from "next/font/google";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'The Modern Barber | Premium Haarschnitte & Bartpflege',
  description: 'Erleben Sie meisterhaftes Handwerk für den modernen Mann. Buchen Sie Ihren Termin für Haarschnitte, Bartpflege und Rasur in unserem stilvollen Barbershop.',
  openGraph: {
    "title": "The Modern Barber | Ihr Stil beginnt hier",
    "description": "Professionelle Haarschnitte und Bartpflege für Männer. Jetzt Termin online buchen oder anrufen.",
    "url": "https://www.themodernbarber.de",
    "siteName": "The Modern Barber",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/young-man-barber-s-shop-getting-his-beard-trimmed_23-2149186494.jpg",
        "alt": "Moderner Barbershop"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "The Modern Barber | Haarschnitte & Bartpflege",
    "description": "Premium-Services für den modernen Mann in unserem Barbershop. Online-Buchung und Kontakt.",
    "images": [
      "http://img.b2bpic.net/free-photo/young-man-barber-s-shop-getting-his-beard-trimmed_23-2149186494.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
