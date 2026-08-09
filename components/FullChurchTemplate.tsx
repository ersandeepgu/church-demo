"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, Calendar, Heart, Play, MapPin, Clock, 
  Cross, ShieldCheck, Users, Music, Send, CheckCircle2 
} from "lucide-react";

export default function FullChurchTemplate({ sermons = [], events = [] }: { sermons?: any[], events?: any[] }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-indigo-500 selection:text-white font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-800/60">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs sm:text-sm text-indigo-400">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Welcome to Grace Church Community</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Connecting People to <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Faith, Hope & Purpose
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed">
            Join us this Sunday to experience uplifting worship, life-changing messages, and a vibrant spiritual family.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-2xl transition shadow-lg shadow-indigo-600/30">
              Plan Your Visit
            </a>
            <a href="#sermons" className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-semibold rounded-2xl transition flex items-center justify-center gap-2">
              <Play className="w-4 h-4 text-indigo-400" /> Watch Sermons
            </a>
          </div>
        </div>
      </section>

      {/* 2. SUNDAY TIMINGS & LOCATION BAR */}
      <section className="py-10 bg-slate-900/50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800/80">
            <Clock className="w-8 h-8 text-indigo-400 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-white">Sunday Worship</h4>
              <p className="text-xs text-slate-400">10:00 AM - 12:00 PM</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800/80">
            <MapPin className="w-8 h-8 text-purple-400 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-white">Main Sanctuary</h4>
              <p className="text-xs text-slate-400">123 Grace Street, Main City</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800/80">
            <Users className="w-8 h-8 text-pink-400 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-white">Youth & Kids Meet</h4>
              <p className="text-xs text-slate-400">Every Friday at 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MINISTRIES BENTO GRID */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-xs uppercase font-bold text-indigo-400 tracking-wider">Our Ministries</h2>
            <p className="text-3xl font-extrabold text-white mt-2">A Place For Everyone</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-indigo-500/30 md:col-span-2">
              <Users className="w-10 h-10 text-indigo-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Youth & Young Adults</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Empowering the next generation with faith, leadership, and meaningful community fellowship.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
              <ShieldCheck className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Kids Kingdom</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Safe, fun, and interactive Bible learning environment for children.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
              <Music className="w-10 h-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Worship & Arts</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Lifting up praises through music, media, and creative ministry.</p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-purple-950/40 border border-purple-500/30 md:col-span-2">
              <Heart className="w-10 h-10 text-red-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Community Outreach</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Serving the needy, organizing food drives, and spreading love in our local city.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ONLINE GIVING / TITHES */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="p-3 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl w-fit mx-auto">
            <Heart className="w-8 h-8 text-indigo-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-white">Generosity & Tithes</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Your generous contributions help us maintain the church, support local families, and spread the gospel.
          </p>
          
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl max-w-lg mx-auto text-left space-y-4">
            <h4 className="font-bold text-white text-lg border-b border-slate-800 pb-2">Direct Bank / UPI Transfer</h4>
            <div className="text-sm space-y-2 text-slate-300">
              <p><span className="text-slate-500">Account Name:</span> Grace Church Trust</p>
              <p><span className="text-slate-500">Account Number:</span> 987654321012</p>
              <p><span className="text-slate-500">IFSC Code:</span> HDFC0001234</p>
              <p><span className="text-slate-500">UPI ID:</span> gracechurch@upi</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRAYER REQUEST FORM */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-white">Need Prayer?</h2>
            <p className="text-slate-400 text-sm mt-2">Our prayer team stands with you. Submit your confidential request below.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Your Name</label>
              <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Phone / Email</label>
              <input required type="text" placeholder="+91 9876543210" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Prayer Request</label>
              <textarea required rows={4} placeholder="How can we pray for you?" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-indigo-500" />
            </div>

            <button type="submit" className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Send Request
            </button>

            {submitted && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Your prayer request has been received. God bless you!
              </div>
            )}
          </form>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-12 bg-slate-950 text-slate-500 text-xs text-center border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-white text-base">
            <Cross className="w-5 h-5 text-indigo-400" /> Grace Church
          </div>
          <p>© {new Date().getFullYear()} Grace Church. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/studio" className="hover:text-indigo-400 transition">Admin Studio Login</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}