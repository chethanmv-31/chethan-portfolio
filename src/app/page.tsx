import { Navbar } from "@/components/sections/navbar/Navbar";
import { Hero } from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />

      {/* Projects anchor: ensures "#projects" targets a real element */}
      <section id="projects" className="min-h-[24rem] bg-transparent" />
    </main>
  );
}