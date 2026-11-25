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
          <Link href="/">about</Link>
          <Link href="/publications/">publications</Link>
          <Link href="/cv/">cv</Link>
        </nav>
      </div>
    </header>
  );
}
