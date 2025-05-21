import React, { useState, useMemo } from "react";
import { mockQueries } from "../data/queries";
import { QueryResult } from "../types/QueryResult";

const statuses = ["all", "running", "completed", "failed"] as const;
type StatusFilter = typeof statuses[number];

export const QueryTable = () => {
  const [filter, setFilter] = useState<StatusFilter>("all");

  const filteredQueries = useMemo(() => {
    return filter === "all"
      ? mockQueries
      : mockQueries.filter((q) => q.status === filter);
  }, [filter]);

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            style={{
              fontWeight: filter === s ? "bold" : "normal",
              textTransform: "capitalize"
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Query</th>
            <th>Status</th>
            <th>Duration (s)</th>
          </tr>
        </thead>
        <tbody>
          {filteredQueries.map((q: QueryResult) => (
            <tr key={q.id} style={q.status === "failed" ? { color: "red" } : {}}>
              <td>{q.id}</td>
              <td>{q.query}</td>
              <td>{q.status}</td>
              <td>{(q.durationMs / 1000).toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
