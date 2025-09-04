"use client";

import { elections } from "../lib/elections";
import "../app/globals.css";

export default function ResultsPage() {
  return (
    <div className="results-page">
      <h1 className="results-title">Results</h1>
      <div className="results-list">
        {elections.map((e) => {
          const total = e.candidates.reduce((s, c) => s + c.votes, 0) || 1;
          return (
            <div key={e.id} className="result-card">
              <div className="result-title">{e.title}</div>
              <div className="candidates-results">
                {e.candidates.map((c) => (
                  <div key={c.id} className="candidate-result">
                    <div className="candidate-name">{c.name}</div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${Math.round((c.votes / total) * 100)}%` }}
                      />
                    </div>
                    <div className="candidate-votes">{c.votes} votes</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
