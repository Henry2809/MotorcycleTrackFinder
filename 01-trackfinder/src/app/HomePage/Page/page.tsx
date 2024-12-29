"use client";
import { useRouter } from "next/navigation";
import NavBar from "@/app/NavBar";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 opacity-100">
      <NavBar />

      <main className="flex-grow flex items-center justify-center min-h-screen">
        <div className="flex justify-center items-center space-y-4">
          <h1 className="relative text-6xl font-bold text-white ml-5">
            <span className="relative text-black">
              TESTING
            </span>
          </h1>
        </div>
      </main>
    </div>
  );
}
