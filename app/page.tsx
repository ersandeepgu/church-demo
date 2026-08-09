export const dynamic = 'force-dynamic'; // Har refresh par fresh Sanity data layega

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Sermons from "@/components/Sermons";
import Events from "@/components/Events";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Sermons />
      <Events />
    </main>
  );
}