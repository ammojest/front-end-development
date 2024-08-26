import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen">
      <main className="w-full max-w-7xl">
        <div className="flex justify-center flex-col items-center my-5">
          <h1>Home</h1>
          <p>Welcome to the home page.</p>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/guides/react" className="underline">
                React
              </Link>
            </li>
            <li>
              <Link href="/guides/google-analytics">Google Analytics</Link>
            </li>
            <li>
              <Link href="/guides/next">Next JS</Link>
            </li>
            <li>
              <Link href="/guides/react/components">React Components</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
