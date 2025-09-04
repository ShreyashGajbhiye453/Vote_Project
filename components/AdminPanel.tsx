"use client";
import React, { useState } from "react";
import "../app/globals.css";

export default function AdminPanel() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [candidatesText, setCandidatesText] = useState("");
  const [list, setList] = useState<any[]>([]);

  const createElection = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cand = candidatesText.split("\n").map((s) => s.trim()).filter(Boolean);
    if (!title || cand.length < 2) return;
    const now = Date.now();
    const newE = {
      id: String(now),
      title,
      description,
      status: "upcoming",
      candidates: cand.map((n, i) => ({ id: `${now}-${i}`, name: n, votes: 0 })),
    };
    setList((p) => [newE, ...p]);
    setTitle("");
    setDescription("");
    setCandidatesText("");
  };

  function endElection(id: string) {
    setList((p) => p.map((x) => (x.id === id ? { ...x, status: "ended" } : x)));
  }

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Panel</h1>

      <div className="admin-grid">
        <form onSubmit={createElection} className="admin-form">
          <h2>Create New Election</h2>

          <div className="form-group">
            <label>Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter election title"
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
            />
          </div>

          <div className="form-group">
            <label>Candidates (one per line)</label>
            <textarea
              value={candidatesText}
              onChange={(e) => setCandidatesText(e.target.value)}
              rows={4}
              placeholder="Enter candidate names"
            />
          </div>

          <button type="submit" className="btn-primary">
            Create Election
          </button>
        </form>

        <div className="admin-manage">
          <h2>Manage Elections</h2>

          {list.length === 0 ? (
            <p className="admin-empty">No elections created yet.</p>
          ) : (
            <div className="admin-election-list">
              {list.map((e) => (
                <div key={e.id} className="admin-election">
                  <div className="admin-election-info">
                    <div className="admin-election-title">{e.title}</div>
                    <div className="admin-election-status">{e.status}</div>
                  </div>
                  <button
                    onClick={() => endElection(e.id)}
                    className="btn-danger"
                  >
                    End
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
