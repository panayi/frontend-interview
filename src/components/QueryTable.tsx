import React from "react";

// TASK:
// 1. Fetch and display mockQueries.
// 2. Filter by status: all| running | completed | failed. Highlight active button.
// 3. Format duration (ms → seconds)
// 4. BONUS: highlight failed queries in red

export const QueryTable = () => {
  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        {/* TODO: buttons to filter by status */}
        <button>All</button>
        <button>Running</button>
        {/* etc */}
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Query</th>
            <th>Status</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO entry 1 */}
          {/* TODO entry 2 */}
        </tbody>
      </table>
    </div>
  );
};
