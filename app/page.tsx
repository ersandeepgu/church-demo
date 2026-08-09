export const dynamic = 'force-dynamic';

import Navbar from "@/components/Navbar";
import FullChurchTemplate from "@/components/FullChurchTemplate";
import Sermons from "@/components/Sermons";
import Events from "@/components/Events";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <FullChurchTemplate />
      <Sermons />
      <Events />
    </main>
  );
}