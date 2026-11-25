import type { Metadata } from "next";
import { PublicationItem } from "@/components/PublicationItem";
import { publications } from "@/content/publications";

export const metadata: Metadata = { title: "Publications" };

export default function Publications() {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);
  return (
    <>
      <h1 className="page-title">Publications</h1>
      {years.map((y) => (
        <section key={y}>
          <h2 className="year">{y}</h2>
          <ol className="pubs">
            {publications
              .filter((p) => p.year === y)
              .map((p) => (
                <PublicationItem key={p.id} p={p} />
              ))}
          </ol>
        </section>
      ))}
    </>
  );
}
