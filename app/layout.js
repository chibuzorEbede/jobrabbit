import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JobRabbit - Find your next job",
  description:
    "Your gateway to countless career opportunities tailored to your skills and aspirations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}
