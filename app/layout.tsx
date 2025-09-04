"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/TopBar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="layout-body">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-content">
            <Topbar />
            <main className="layout-main">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
