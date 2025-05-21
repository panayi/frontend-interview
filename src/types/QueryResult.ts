export type QueryResult = {
  id: string;
  query: string;
  status: 'running' | 'completed' | 'failed';
  durationMs: number;
};
