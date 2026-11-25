import { ME, type Publication } from "@/content/publications";
import { toBibtex } from "@/lib/bibtex";

function Authors({ names: all }: { names: string[] }) {
  const etAl = all[all.length - 1] === "others";
  const names = etAl ? all.slice(0, -1) : all;
  return (
    <>
      {names.map((n, i) => (
        <span key={n + i}>
          {i > 0 && (i === names.length - 1 ? (names.length > 2 ? ", and " : " and ") : ", ")}
          {n === ME ? <strong>{n}</strong> : n}
        </span>
      ))}
      {etAl && " et al."}
    </>
  );
}

export function PublicationItem({ p }: { p: Publication }) {
  const links = [
    p.pdf && { label: "PDF", href: p.pdf },
    p.arxiv && { label: "arXiv", href: `https://arxiv.org/abs/${p.arxiv}` },
    p.code && { label: "Code", href: p.code },
    p.doi && { label: "DOI", href: `https://doi.org/${p.doi}` },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <li className="pub">
      <div className="pub-badge">{p.venueShort ?? p.year}</div>
      <div className="pub-body">
        <div className="pub-title">{p.title}</div>
        <div className="pub-authors">
          <Authors names={p.authors} />
        </div>
        {(p.venue || p.status) && (
          <div className="pub-venue">
            {p.venue && <em>{p.venue}</em>}
            {p.venue && p.status && " · "}
            {p.status}
          </div>
        )}
        <div className="pub-actions">
          {links.map((l) => (
            <a key={l.label} className="chip" href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
          {p.abstract && (
            <details>
              <summary className="chip">Abstract</summary>
              <p className="pub-abstract">{p.abstract}</p>
            </details>
          )}
          <details>
            <summary className="chip">BibTeX</summary>
            <pre className="pub-bib">{toBibtex(p)}</pre>
          </details>
        </div>
      </div>
    </li>
  );
}
