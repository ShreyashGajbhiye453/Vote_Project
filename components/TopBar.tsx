"use client";

import { useState } from "react";
import SignIn from "./Signin"; // Import your component
import "../app/globals.css";

export default function Topbar() {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <>
      <header className="topbar">
        <div className="topbar-title">Smart Student Election</div>
        <div className="topbar-actions">
          <button className="btn-signin" onClick={() => setShowSignIn(true)}>
            Sign In
          </button>
        </div>
      </header>

      {showSignIn && <SignIn />}
    </>
  );
}