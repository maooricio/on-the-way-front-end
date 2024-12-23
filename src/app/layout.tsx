import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/index.scss";

const PoppinsSans = Poppins({
  weight: ['400', '500', '700', '800'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "On The Way",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${PoppinsSans}`}>{children}</body>
    </html>
  );
}