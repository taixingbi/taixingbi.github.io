export type Role = {
  org: string;
  title: string;
  location?: string;
  period?: string;
  bullets: string[];
};

export const summary =
  "Part-time Ph.D. student in Computer Science at NJIT and senior AI platform engineer with 7+ years of experience taking models from research into production systems. Research focus: admission control and guardrail capacity for multi-tenant LLM gateways, failure analysis for enterprise RAG, and evaluation methodology that measures whether answers are correct rather than merely plausible.";

export const experience: Role[] = [
  {
    org: "JPMorgan Chase & Co.",
    title: "Senior AI Platform Engineer",
    location: "New York, NY",
    period: "Oct 2026 – Present",
    bullets: [], // TODO
  },
  {
    org: "Saks.com",
    title: "Senior AI Platform Engineer",
    location: "New York, NY",
    period: "Aug 2021 – Dec 2025",
    bullets: [
      "Architected a multi-tenant Enterprise LLM Gateway on AWS Bedrock enforcing tenant isolation, certified-model-only routing, and bounded-time policy revocation.",
      "Implemented fail-closed safety guardrails (Bedrock ApplyGuardrail) with budget-aware admission control, treating guardrail capacity as a schedulable resource so enforcement holds under load.",
      "Designed the evaluation and QA framework gating every release — offline retrieval metrics (NDCG/MAP/MRR), golden datasets, prompt versioning, and regression tests for hallucination and quality.",
      "Developed RAG pipelines over internal knowledge (hybrid retrieval, reranking, citation grounding) so answers are source-traceable and verifiable.",
      "Built LLM-powered operational-intelligence agents with tool calling and LangGraph multi-step execution; owned the reliability layer (routing, retries, circuit breakers, fallbacks) and event-driven GPU inference (vLLM).",
    ],
  },
  {
    org: "Kaden Health",
    title: "AI Platform Engineer",
    location: "Remote",
    period: "Jul 2019 – Aug 2021",
    bullets: [
      "Built speech-processing and transcription pipelines for clinical documentation in a regulated healthcare setting.",
      "Built Kafka streaming pipelines for low-latency transcription and real-time inference; supported vocal-biomarker model deployment with validation and monitoring.",
    ],
  },
  {
    org: "CGMAX",
    title: "AI Platform Engineer",
    location: "New York, NY",
    period: "Jan 2018 – Jul 2019",
    bullets: [
      "Partnered directly with quantitative researchers to turn research needs into production ML systems for financial forecasting and sentiment analysis.",
      "Designed event-driven data platforms (Spark, Hadoop, Kafka, HBase) with evaluation, validation, and backtesting frameworks.",
    ],
  },
  {
    org: "NVIDIA",
    title: "AI Platform Engineer, GPU Telemetry & Observability",
    location: "Santa Clara, CA",
    period: "Sep 2015 – Jan 2018",
    bullets: [
      "Built internal tools and backend services collecting and analyzing GPU performance, utilization, and diagnostic data at scale.",
    ],
  },
];

export const education = [
  {
    school: "New Jersey Institute of Technology (NJIT)",
    degree: "Ph.D., Computer Science (part-time) — Advisor: Prof. Xiaoning Ding",
    period: "Fall 2026 – Present",
  },
  {
    school: "Harrisburg University of Science and Technology",
    degree: "M.S., Analytics (Machine Learning & NLP)",
    period: "2019 – 2022",
  },
  {
    school: "University of Alabama in Huntsville",
    degree: "M.S., Electrical & Computer Engineering",
    period: "2013 – 2015",
  },
];

export const skills: { area: string; items: string }[] = [
  {
    area: "Research & Evaluation",
    items:
      "Golden-dataset regression testing, hallucination detection, NDCG/MAP/MRR, retrieval robustness, failure-aware evaluation, DeepEval, Ragas, Promptfoo, Langfuse, LangSmith, MLflow",
  },
  {
    area: "LLM Systems & Agents",
    items:
      "Admission control, guardrails (Bedrock ApplyGuardrail, NeMo Guardrails), tool calling, multi-agent orchestration, LangGraph, LangChain, LlamaIndex, MCP",
  },
  { area: "Models & Training", items: "LoRA, SFT, DPO, PyTorch, TensorFlow, Hugging Face, vLLM, Qwen, AWS Bedrock" },
  {
    area: "Retrieval & Data",
    items:
      "RAG, hybrid retrieval, reranking, citation grounding, Qdrant, Elasticsearch/OpenSearch, Neo4j, Databricks, Snowflake, PostgreSQL, Spark",
  },
  {
    area: "Engineering & Infrastructure",
    items:
      "Python (async, FastAPI), TypeScript, Java, Kafka, AWS (EKS, Lambda, MSK, Bedrock), GCP, Kubernetes, Terraform, Helm, ArgoCD, Prometheus, Grafana",
  },
];
