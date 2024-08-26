import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen">
      <main className="w-full">
        <div className="flex justify-center h-[50vh] flex-col items-center py-5">
          <h1>Front-end development</h1>
          <p>Welcome to the home page.</p>
        </div>
      </main>
    </div>
  );
}
