import { QueryResult } from "../types/QueryResult";

export const mockQueries: QueryResult[] = [
  { id: 'q1', query: 'SELECT * FROM users', status: 'running', durationMs: 3000 },
  { id: 'q2', query: 'SELECT * FROM orders', status: 'completed', durationMs: 12000 },
  { id: 'q3', query: 'DELETE FROM logs', status: 'failed', durationMs: 500 },
  { id: 'q4', query: 'UPDATE products SET price = price * 1.1', status: 'completed', durationMs: 4300 },
  { id: 'q5', query: 'SELECT COUNT(*) FROM visits', status: 'running', durationMs: 800 },
  { id: 'q6', query: 'DROP TABLE temp_users', status: 'failed', durationMs: 700 },
  { id: 'q7', query: 'ALTER TABLE payments ADD COLUMN confirmed', status: 'completed', durationMs: 6000 },
  { id: 'q8', query: 'SELECT * FROM error_logs', status: 'running', durationMs: 2100 },
  { id: 'q9', query: 'DELETE FROM sessions WHERE expired = true', status: 'completed', durationMs: 1100 },
  { id: 'q10', query: 'TRUNCATE TABLE old_backups', status: 'failed', durationMs: 300 },
  { id: 'q11', query: 'SELECT DISTINCT country FROM users', status: 'completed', durationMs: 2400 },
  { id: 'q12', query: 'SELECT * FROM users WHERE email LIKE "%@test.com"', status: 'running', durationMs: 3300 },
  { id: 'q13', query: 'REINDEX TABLE search_index', status: 'completed', durationMs: 7100 },
  { id: 'q14', query: 'SELECT * FROM transactions WHERE amount > 1000', status: 'running', durationMs: 9200 },
  { id: 'q15', query: 'VACUUM FULL ANALYZE', status: 'completed', durationMs: 16000 }
];
