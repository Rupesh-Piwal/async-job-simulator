import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-amber-200 flex-0 h-screen w-full flex justify-center items-center ">
      <Link
        href="/workflow"
        className="bg-amber-600 border-4 border-black text-black p-2"
      >
        Open Builder
      </Link>
    </div>
  );
}
