import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1 className="page-title">page not found</h1>
      <p>
        Go back to the <Link href="/">home page</Link>.
      </p>
    </>
  );
}
