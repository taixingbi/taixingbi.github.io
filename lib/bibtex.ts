import type { Publication } from "@/content/publications";

// "Taixing Bi" -> "Bi, Taixing"
function bibName(full: string): string {
  if (full === "others") return full;
  const parts = full.trim().split(/\s+/);
  if (parts.length < 2) return full;
  const last = parts.pop()!;
  return `${last}, ${parts.join(" ")}`;
}

export function toBibtex(p: Publication): string {
  const type = p.venue ? "inproceedings" : "misc";
  const fields: [string, string | undefined][] = [
    ["title", p.title],
    ["author", p.authors.map(bibName).join(" and ")],
    [p.venue ? "booktitle" : "note", p.venue ?? p.status],
    ["year", String(p.year)],
    ["doi", p.doi],
    ["eprint", p.arxiv],
    ["archivePrefix", p.arxiv ? "arXiv" : undefined],
  ];
  const body = fields
    .filter(([, v]) => v)
    .map(([k, v]) => `  ${k} = {${v}}`)
    .join(",\n");
  return `@${type}{${p.id},\n${body}\n}`;
}
