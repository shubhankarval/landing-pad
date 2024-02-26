import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/hydra">Hydra</Link>
      </div>
      <div>
        <Link href="/analytics">Analytics</Link>
      </div>
      <div>
        <Link href="/finance">Finance</Link>
      </div>
      <div>
        <Link href="/fashion">Fashion</Link>
      </div>
    </main>
  );
}
