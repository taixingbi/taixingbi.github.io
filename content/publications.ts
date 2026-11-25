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

// TODO for each 2026 paper: co-authors, venue/status (mark the four IEEE BigData 2026 papers),
// abstract, and pdf / arxiv / code links.
export const publications: Publication[] = [
  {
    id: "bi2026ragfailbench",
    title: "RAGFailBench: An Automated Regression Testing Framework for Enterprise RAG",
    authors: [ME, "others"],
    year: 2026,
    selected: true,
  },
  {
    id: "bi2026adaptiveadmission",
    title: "Adaptive SLO-Aware Admission Control for Multi-Tenant Managed LLM Gateways",
    authors: [ME, "others"],
    year: 2026,
    selected: true,
  },
  {
    id: "bi2026hierarchicaladmission",
    title: "Hierarchical Admission Control for Opaque Multi-Tenant Managed LLM APIs",
    authors: [ME, "others"],
    year: 2026,
    selected: true,
  },
  {
    id: "bi2026guardrails",
    title: "Guardrails Under Retrieval-Mediated Attacks",
    authors: [ME, "others"],
    year: 2026,
    selected: true,
  },
  {
    id: "bi2026failureaware",
    title: "Failure-Aware Evaluation for Enterprise RAG Model Selection",
    authors: [ME, "others"],
    year: 2026,
    selected: true,
  },
  {
    id: "bi2026corpusmutation",
    title: "Behaviorally Validated Corpus Mutation for Retrieval Robustness Evaluation",
    authors: [ME, "others"],
    year: 2026,
    selected: true,
  },
  {
    id: "bi2012impedance",
    title: "A Novel Approach to Impedance-based Fault Location for High Voltage Cables",
    authors: [ME, "others"], // TODO: co-authors
    year: 2012,
    venue: "IEEE Industry Applications Society (IAS) Annual Meeting",
    venueShort: "IEEE IAS",
  },
];
