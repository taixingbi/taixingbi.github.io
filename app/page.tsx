import { PublicationItem } from "@/components/PublicationItem";
import { education, experience } from "@/content/cv";
import { news } from "@/content/news";
import { profile } from "@/content/profile";
import { publications } from "@/content/publications";

function formatMonth(d: string) {
  return new Date(d + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

export default function Home() {
  const selected = publications.filter((p) => p.selected);
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>{profile.name}</h1>
          <p className="affil">
            {profile.position}
            <br />
            {profile.department}
            <br />
            {profile.institution}
          </p>
          <p className="affil muted">Advisor: {profile.advisor}</p>
          <p className="contact">
            {profile.links.map((l, i) => (
              <span key={l.label}>
                {i > 0 && <span className="sep"> / </span>}
                <a href={l.href} target={l.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
                  {l.label}
                </a>
              </span>
            ))}
            {profile.cvPdf && (
              <>
                <span className="sep"> / </span>
                <a href={profile.cvPdf}>CV</a>
              </>
            )}
          </p>
        </div>
        {profile.photo && <img className="photo" src={profile.photo} alt={profile.name} />}
      </section>

      <section className="prose">
        <p>
          I am a part-time Ph.D. student in Computer Science at the New Jersey Institute of Technology, advised by{" "}
          {profile.advisor}. My research is on <b>reliable LLM systems</b>: how to share, protect, and evaluate large
          language model services when many tenants, strict latency targets, and safety requirements compete for the
          same capacity.
        </p>
        <p>
          My recent work studies <b>admission control for multi-tenant LLM gateways</b>, including SLO-aware scheduling
          over managed, opaque model APIs and treating safety-guardrail capacity as a budgeted, schedulable resource. I
          also build <b>benchmarks and evaluation methods for retrieval-augmented generation</b>, from controllable
          failure injection (RAGFailBench) to behaviorally validated corpus mutation for measuring retrieval
          robustness.
        </p>
        <p>
          Alongside my Ph.D., I work as a Senior ML/AI Engineer at JPMorgan Chase in New York. Over 7+ years in industry
          I have built and operated production ML and LLM systems, and those deployments are where my research questions
          come from.
        </p>
        <p className="interests">
          <span className="label">Research interests:</span> {profile.interests.join(" · ")}
        </p>
      </section>

      <section>
        <h2>News</h2>
        <ul className="news">
          {news.map((n) => (
            <li key={n.date + n.text}>
              <span className="news-date">[{formatMonth(n.date)}]</span>{" "}
              <span dangerouslySetInnerHTML={{ __html: n.text }} />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Publications</h2>
        <ol className="pubs">
          {selected.map((p) => (
            <PublicationItem key={p.id} p={p} />
          ))}
        </ol>
      </section>

      <section>
        <h2>Industry Experience</h2>
        <ul className="timeline">
          {experience.map((r) => (
            <li key={r.org}>
              <span className="tl-main">
                <b>{r.org}</b>, {r.title}
              </span>
              <span className="tl-date">{r.period}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <ul className="timeline">
          {education.map((e) => (
            <li key={e.school}>
              <span className="tl-main">
                <b>{e.school}</b>, {e.degree}
              </span>
              <span className="tl-date">{e.period}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
