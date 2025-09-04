"use client";

import Link from "next/link";
import "../app/globals.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <Link href="/" className="sidebar-link">
          Dashboard
        </Link>
        <Link href="/elections" className="sidebar-link">
          Elections
        </Link>
        <Link href="/results" className="sidebar-link">
          Results
        </Link>
        <Link href="/admin" className="sidebar-link">
          Admin
        </Link>
      </nav>
    </aside>
  );
}
