export type Publication = {
  id: string; // also the BibTeX key
  title: string;
  authors: string[]; // full names, in order; "Taixing Bi" is bolded; a final "others" renders as "et al."
  year: number;
  venue?: string; // e.g. "IEEE International Conference on Big Data (BigData)"
  venueShort?: string; // badge text, e.g. "BigData 2026"
  status?: string; // e.g. "Accepted, to appear"
  abstract?: string;
  pdf?: string; // "/papers/x.pdf" (file in public/papers/) or a URL
  arxiv?: string; // arXiv id, e.g. "2511.01234"
  code?: string;
  doi?: string;
  selected?: boolean; // shown on the home page
};

export const ME = "Taixing Bi";

const BIGDATA = "IEEE International Conference on Big Data (BigData 2026)";

// TODO for each paper: co-authors (replace "others"), abstract, and pdf / arxiv / doi once available.
export const publications: Publication[] = [
  {
    id: "bi2026ragfailbench",
    title: "RAGFailBench: Automated Construction and Controllable Failure-Injection Benchmarking for Retrieval-Augmented Generation",
    authors: [ME, "others"],
    year: 2026,
    venue: BIGDATA,
    venueShort: "BigData 2026",
    status: "Short Paper",
    code: "https://github.com/taixingbi/RAGFailBench",
    selected: true,
  },
  {
    id: "bi2026corpusmutation",
    title: "Behaviorally Validated Corpus Mutation for Retrieval Robustness Evaluation",
    authors: [ME, "others"],
    year: 2026,
    venue: BIGDATA,
    venueShort: "BigData 2026",
    status: "Regular Paper",
    code: "https://github.com/taixingbi/corpus-mutation-retrieval-robustness",
    selected: true,
  },
  {
    id: "bi2026adaptiveadmission",
    title: "Adaptive SLO-Aware Admission Control for Multi-Tenant Managed LLM Gateways",
    authors: [ME, "others"],
    year: 2026,
    venue: BIGDATA,
    venueShort: "BigData 2026",
    status: "Regular Paper",
    code: "https://github.com/taixingbi/adaptive-LLM-gateway",
    selected: true,
  },
  {
    id: "bi2026safetyschedulable",
    title: "Safety as a Schedulable Resource: Budget-Aware Admission Control for Multi-Tenant LLM Gateways",
    authors: [ME, "others"],
    year: 2026,
    venue: BIGDATA,
    venueShort: "BigData 2026",
    status: "Special Session",
    code: "https://github.com/taixingbi/guardrail-admission-control",
    selected: true,
  },
];
