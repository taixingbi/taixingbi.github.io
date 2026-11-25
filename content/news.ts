// Newest first. `text` may contain simple inline HTML (<b>, <a>).
export const news: { date: string; text: string }[] = [
  {
    date: "2026-11-25",
    text: "I am looking for a <b>part-time PhD</b> position in the NYC / NJ area. Feel free to reach out!",
  },
  {
    date: "2026-11-01", // TODO: real acceptance date
    text: 'Four papers accepted at <b>IEEE BigData 2026</b>, on admission control for multi-tenant LLM gateways, RAG failure benchmarking, and retrieval robustness evaluation. See <a href="/publications/">publications</a>.',
  },
  {
    date: "2026-10-01",
    text: "Joined <b>JPMorgan Chase</b> as a Senior AI Platform Engineer.",
  },
];
