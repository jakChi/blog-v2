import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> 
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
