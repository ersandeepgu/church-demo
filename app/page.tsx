import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}