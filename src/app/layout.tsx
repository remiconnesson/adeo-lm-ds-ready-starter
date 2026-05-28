import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { Sidebar } from "@/components/showcase/Sidebar";
import styles from "./layout.module.scss";

const lmSans = localFont({
  src: [
    { path: "../../public/fonts/LeroyMerlinSans-Web-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/LeroyMerlinSans-Web-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../../public/fonts/LeroyMerlinSans-Web-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/LeroyMerlinSans-Web-Italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/LeroyMerlinSans-Web-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/LeroyMerlinSans-Web-SemiBoldItalic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-lm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mozaic Showcase",
  description: "React showcase of the Mozaic design system components",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lmSans.variable}>
      <body>
        <div className={styles.shell}>
          <Sidebar />
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
