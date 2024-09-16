import Navbar from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { AuthContextProvider } from "./AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bandarlampung",
  description: "Website Pemerintahan Bandarlampung",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-between h-screen">
          <AuthContextProvider>
            <Navbar/>
              <div className="mt-16 md:mt-24">
                {children}
                <ButtonBringToTop/>
              </div>
            <Footer/>
          </AuthContextProvider>
        </div>
      </body>
    </html>
  );
}
