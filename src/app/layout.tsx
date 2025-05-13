import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { CartProvider } from "@/components/cart/cart-context";
import { cookies } from "next/headers";
import { getCart } from "@/lib/shopify";
import { manrope } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Deham Care | All-Natural Daily Supplement for Relief",
  description:
    "ActiveMg is a blend of vitamins, essential mineral elements and plant extracts, all designed to work together to relieve the symptoms. Menoxcel, a menopause relief formula contains a unique amino acid complex specifically formulated to combat the symptoms of menopause.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cartId = cookies().get("cartId")?.value;
  const cart = getCart(cartId);
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} font-manrope antialiased bg-light-ivory text-dark-green`}
      >
        <CartProvider cartPromise={cart}>{children}</CartProvider>
      </body>
    </html>
  );
}
