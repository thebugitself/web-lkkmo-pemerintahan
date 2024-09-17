import Navbar from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { AuthContextProvider } from "./AuthContext";
import ButtonBringToTop from "@/components/button/BringToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bandarlampung",
  description: "Website Pemerintah Bandarlampung",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify h-screen">
         
            <Navbar/>
              <div className="mt-16 md:mt-24">
                {children}
                <ButtonBringToTop/>
              </div>
            <Footer/>
        
        </div>
      </body>
    </html>
  );
}
