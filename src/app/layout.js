import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "../components/NavbarComponent/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime List",
  description: "Website that provides a list of Anime films",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavbarComponent />
        {children}
        <script
          src="https://kit.fontawesome.com/de0d5c5a2a.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
