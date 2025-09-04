"use client";

import Link from "next/link";
import "../app/globals.css";

interface Election {
  id: string;
  title: string;
  description: string;
  status: string;
}

export default function ElectionCard({ election }: { election: Election }) {
  return (
    <div className="election-card">
      <div className="election-card-title">{election.title}</div>
      <div className="election-card-desc">{election.description}</div>
      <div className="election-card-footer">
        <span className="election-status">{election.status}</span>
        <Link href={`/election/${election.id}`} className="btn-view">
          View
        </Link>
      </div>
    </div>
  );
}
