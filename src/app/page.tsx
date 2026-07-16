import { Navbar } from "@/components/sections/navbar/Navbar";
import { Hero } from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
    </main>
  );
}