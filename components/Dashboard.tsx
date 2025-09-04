"use client";

import { elections } from "@/lib/elections";
import Link from "next/link";
import "../app/globals.css";

export default function Dashboard() {
  const ongoing = elections.filter((e) => e.status === "ongoing");
  const upcoming = elections.filter((e) => e.status === "upcoming");
  const ended = elections.filter((e) => e.status === "ended");

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Ongoing</div>
          <div className="stat-value">{ongoing.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Upcoming</div>
          <div className="stat-value">{upcoming.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Ended</div>
          <div className="stat-value">{ended.length}</div>
        </div>
      </div>

      <h2 className="section-title">Active Elections</h2>
      <div className="election-grid">
        {ongoing.length === 0 ? (
          <div className="election-card">No active elections</div>
        ) : (
          ongoing.map((e) => (
            <div key={e.id} className="election-card">
              <div className="election-title">{e.title}</div>
              <div className="election-desc">{e.description}</div>
              <Link href={`/election/${e.id}`} className="btn-link">
                Open
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
