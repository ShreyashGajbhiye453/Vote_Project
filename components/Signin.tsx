"use client";

import { useState } from "react";
import "../app/globals.css";
import Signup from "./Signup";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // Toggle view

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Signing in with Email: ${email}`);
  };

  return (
    <div className="signin-container">
      {!isSignUp ? (
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
            Don’t have an account?{" "}
            <button className="btn-signin" onClick={() => setIsSignUp(true)}>
              Sign Up
            </button>
          </p>
        </div>
      ) : (
        <>
          <Signup />
          <p className="signin-footer">
            Already have an account?{" "}
            
          </p>
        </>
      )}
    </div>
  );
}