import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Outfit({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Online Course Portal",
  description: "Online Course Portal This Website in Enroll Course and watch free and paid Course",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children} <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
