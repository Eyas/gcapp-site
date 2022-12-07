import "./globals.scss";

import { Inter } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <header>
          <div className="sizer">
            <Link href="/">
              <Image
                src="/512x512.png"
                alt="St. Anthony Hall"
                width={512}
                height={512}
              />
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </footer>
      </body>
    </html>
  );
}
