import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/todos" className="font-bold text-3xl flex justify-center">TodoApp</Link>
    </div>
  );
}
