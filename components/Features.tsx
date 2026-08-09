"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Cpu, Globe } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-indigo-400" />,
    title: "Sanity CMS Powered",
    description: "Manage content in real-time with an intuitive dashboard and live preview capabilities.",
    className: "md:col-span-2 bg-gradient-to-br from-slate-900 to-indigo-950/40 border-indigo-500/30",
  },
  {
    icon: <Cpu className="w-8 h-8 text-purple-400" />,
    title: "Ultra-Fast Next.js",
    description: "Built on Next.js App Router for lightning-fast server-side rendering.",
    className: "md:col-span-1 bg-slate-900/80 border-slate-800",
  },
  {
    icon: <Globe className="w-8 h-8 text-emerald-400" />,
    title: "Global Vercel CDN",
    description: "Deployed edge-to-edge for sub-100ms load times worldwide.",
    className: "md:col-span-1 bg-slate-900/80 border-slate-800",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-pink-400" />,
    title: "Enterprise Security",
    description: "SSL encryption, API token protection, and environment security.",
    className: "md:col-span-2 bg-gradient-to-br from-slate-900 to-purple-950/40 border-purple-500/30",
  },
];

export default function Features() {
  return (
    <section id="services" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-bold">
            Why Choose Our Platform
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Engineered for <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Performance</span> & Scale
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl border transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:shadow-indigo-500/10 ${item.className}`}
            >
              <div className="p-3 w-fit rounded-2xl bg-slate-800/80 border border-slate-700 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}