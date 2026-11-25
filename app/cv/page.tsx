import type { Metadata } from "next";
import { education, experience, skills, summary } from "@/content/cv";
import { profile } from "@/content/profile";
import { publications } from "@/content/publications";

export const metadata: Metadata = { title: "CV" };

export default function CV() {
  return (
    <>
      <div className="cv-head">
        <h1 className="page-title">Curriculum Vitae</h1>
        {profile.cvPdf && (
          <a className="chip" href={profile.cvPdf}>
            Download PDF
          </a>
        )}
      </div>
      <p className="headline">{profile.headline}</p>
      <p>{summary}</p>

      <h2>Experience</h2>
      {experience.map((r) => (
        <div className="cv-role" key={r.org}>
          <div className="cv-row">
            <div>
              <b>{r.org}</b> — {r.title}
            </div>
            <div className="muted cv-meta">{[r.period, r.location].filter(Boolean).join(" · ")}</div>
          </div>
          {r.bullets.length > 0 && (
            <ul>
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <h2>Publications</h2>
      <ul>
        {publications.map((p) => (
          <li key={p.id}>
            {p.title}
            {p.venueShort ? ` — ${p.venueShort}` : ""} ({p.year})
          </li>
        ))}
      </ul>

      <h2>Education</h2>
      {education.map((e) => (
        <div className="cv-row" key={e.school}>
          <div>
            <b>{e.school}</b> — {e.degree}
          </div>
          <div className="muted cv-meta">{e.period}</div>
        </div>
      ))}

      <h2>Skills</h2>
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.area}>
            <dt>{s.area}</dt>
            <dd>{s.items}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}
