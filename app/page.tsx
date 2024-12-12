import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-2xl font-bold">Welcome to DevFlow</h1>
      <h1 className="text-center font-space-grotesk text-2xl font-bold">
        Welcome to DevFlow
      </h1>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </>
  );
}
