"use client";
import { useEffect, useState } from "react";
import "../app/globals.css";

interface Candidate {
  id: string;
  name: string;
  votes: number;
}

interface Election {
  id: string;
  title: string;
  description: string;
  candidates: Candidate[];
}

export default function ElectionDetail({ election }: { election: Election }) {
  const [candidates, setCandidates] = useState<Candidate[]>(() =>
    election.candidates.map((c) => ({ ...c }))
  );
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const key = `voted:${election.id}`;
    const stored = localStorage.getItem(key);
    if (stored === "1") setVoted(true);
  }, [election.id]);

  function vote(candidateId: string) {
    if (voted) return;
    setCandidates((prev) =>
      prev.map((c) =>
        c.id === candidateId ? { ...c, votes: c.votes + 1 } : c
      )
    );
    setVoted(true);
    if (typeof window !== "undefined")
      localStorage.setItem(`voted:${election.id}`, "1");
  }

  const totalVotes = candidates.reduce((s, c) => s + c.votes, 0) || 0;

  return (
    <div className="election-detail">
      <h1 className="election-detail-title">{election.title}</h1>
      <p className="election-detail-desc">{election.description}</p>

      <div className="candidates-list">
        {candidates.map((c) => (
          <div key={c.id} className="candidate-card">
            <div>
              <div className="candidate-name">{c.name}</div>
              <div className="candidate-votes">{c.votes} votes</div>
            </div>
            <div>
              <button
                onClick={() => vote(c.id)}
                disabled={voted}
                className={`btn-vote ${voted ? "disabled" : ""}`}
              >
                {voted ? "Voted" : "Vote"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="total-votes">Total votes: {totalVotes}</div>
    </div>
  );
}
