import Link from "next/link";
import { profile } from "@/content/profile";

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="nav-name">
          {profile.name}
        </Link>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/publications/">Publications</Link>
          <Link href="/cv/">CV</Link>
        </nav>
      </div>
    </header>
  );
}
