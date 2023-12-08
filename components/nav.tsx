import Link from "next/link";

export default function Nav() {
  return (
    <nav className="px-10 py-10 bg-zinc-100">
      <Link className="text-xl" href="/">
        Home
      </Link>
    </nav>
  );
}
