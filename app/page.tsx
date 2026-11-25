import Link from "next/link";
import { PublicationItem } from "@/components/PublicationItem";
import { news } from "@/content/news";
import { profile } from "@/content/profile";
import { publications } from "@/content/publications";

function formatDate(d: string) {
  return new Date(d + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function Home() {
  const selected = publications.filter((p) => p.selected);
  return (
    <>
      <section className="hero">
        <div>
          <h1>{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p className="muted">
            {profile.affiliation} · {profile.location}
          </p>
          <ul className="links">
            {profile.links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target={l.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
            {profile.cvPdf && (
              <li>
                <a href={profile.cvPdf}>CV (PDF)</a>
              </li>
            )}
          </ul>
        </div>
        {profile.photo && <img className="photo" src={profile.photo} alt={profile.name} />}
      </section>

      <section className="prose">
        <p>
          I am a part-time <b>Ph.D. student in Computer Science at New Jersey Institute of Technology (NJIT)</b>,
          advised by Prof. Xiaoning Ding. I am also a <b>Senior ML/AI Engineer at JPMorgan Chase</b> in New York.
          Over 7+ years I have taken models from research into production at NVIDIA, CGMAX, Kaden Health and Saks.com.
        </p>
        <p>My research studies how LLM systems behave under real production constraints:</p>
        <ul>
          <li>
            <b>Admission control for multi-tenant LLM gateways.</b> SLO-aware scheduling across tenants of managed LLM
            APIs, and treating safety guardrail capacity as a budgeted, schedulable resource.
          </li>
          <li>
            <b>Failure analysis for RAG.</b> Benchmarking retrieval-augmented generation with automated construction and
            controllable failure injection (RAGFailBench).
          </li>
          <li>
            <b>Evaluation methodology.</b> Measuring whether answers are <i>correct</i>, not just plausible: golden
            datasets, behaviorally validated corpus mutation, and retrieval robustness.
          </li>
        </ul>
        <p>
          Four of my papers have been accepted at <b>IEEE BigData 2026</b>, each with open-source code.
        </p>
        <p>
          Before NJIT, I earned an M.S. in Analytics (Machine Learning &amp; NLP) from Harrisburg University and an M.S.
          in Electrical &amp; Computer Engineering from the University of Alabama in Huntsville.
        </p>
        <p className="callout">
          I am happy to talk about research collaborations on LLM systems, retrieval, or evaluation. Reach me at{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      </section>

      <section>
        <h2>news</h2>
        <table className="news">
          <tbody>
            {news.map((n) => (
              <tr key={n.date + n.text}>
                <th>{formatDate(n.date)}</th>
                <td dangerouslySetInnerHTML={{ __html: n.text }} />
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>selected publications</h2>
        <ol className="pubs">
          {selected.map((p) => (
            <PublicationItem key={p.id} p={p} />
          ))}
        </ol>
        <p>
          <Link href="/publications/">All publications →</Link>
        </p>
      </section>
    </>
  );
}
