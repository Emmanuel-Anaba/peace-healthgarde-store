import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppContextProvider from "./context";
import Sidebar from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Peace Healthgarde Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <Navbar />
          <Sidebar />
          {children}
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            limit={3}
            closeOnClick
            theme="colored"
          />
        </AppContextProvider>
      </body>
    </html>
  );
}
