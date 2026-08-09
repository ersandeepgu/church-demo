import { client } from "@/sanity/lib/client";
import { Sparkles } from "lucide-react";

interface Service {
  _id: string;
  title: string;
  description: string;
}

// Sanity se dynamic data fetch karne ka function
async function getServices(): Promise<Service[]> {
  const query = `*[_type == "service"]{
    _id,
    title,
    description
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export default async function Features() {
  const services = await getServices();

  return (
    <section id="services" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-bold">
            Live Sanity CMS Content
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Church Services</span>
          </p>
        </div>

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.length > 0 ? (
            services.map((item) => (
              <div
                key={item._id}
                className="p-8 rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="p-3 w-fit rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-6">
                  <Sparkles className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))
          ) : (
            <p className="text-slate-500 text-center col-span-full">
              No services added yet in Sanity Studio.
            </p>
          )}
        </div>

      </div>
    </section>
  );
}