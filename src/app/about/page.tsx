"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div>
      <h2>About Us</h2>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
      >
        Go Home
      </button>
    </div>
  );
}
