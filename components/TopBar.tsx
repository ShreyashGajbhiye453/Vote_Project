"use client";

import "../app/globals.css";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-title">Smart Student Election</div>
      <div className="topbar-actions">
        <button className="btn-signin">Sign In</button>
      </div>
    </header>
  );
}
