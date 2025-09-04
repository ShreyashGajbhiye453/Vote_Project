"use client";

import { useState } from "react";
import Link from "next/link";
import "../app/globals.css";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Signing in with Email: ${email}`);
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h1 className="signin-title">Welcome Back</h1>
        <p className="signin-subtitle">Sign in to continue</p>

        <form onSubmit={handleSubmit} className="signin-form">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <button type="submit">Sign In</button>
        </form>

        <p className="signin-footer">
          Don’t have an account? <Link href="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
