"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, Calendar, Heart, Play, MapPin, Clock, 
  Cross, ShieldCheck, Users, Music, Send, CheckCircle2,
  Phone, Mail, BookOpen
} from "lucide-react";

export default function FullChurchTemplate() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-indigo-500 selection:text-white font-sans">
      
      {/* 1. HERO BANNER WITH BACKGROUND OVERLAY */}
      <section className="relative pt-36 pb-24 border-b border-slate-800/80 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-indigo-500/30 text-xs sm:text-sm text-indigo-400">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Welcome to Grace Fellowship & Faith Trust</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Transformed by Faith, <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              United in Worship & Love
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
            Welcome home! We are a community dedicated to preaching the gospel, building strong spiritual families, and impacting lives through grace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#timings" 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white font-semibold rounded-2xl transition shadow-xl shadow-indigo-600/25"
            >
              Join Us This Sunday
            </a>
            <a 
              href="#sermons" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-semibold rounded-2xl transition flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-indigo-400" /> Watch Online Preachings
            </a>
          </div>
        </div>
      </section>

      {/* 2. PASTOR'S WELCOME / ABOUT US SECTION */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">About Our Ministry</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              A Place Where Everyone Belongs & Grows
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Our church was founded on the firm foundation of Jesus Christ. Whether you are searching for answers, looking for a spiritual home, or seeking prayer, our doors and hearts are open for you.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <BookOpen className="w-6 h-6 text-indigo-400 mb-2" />
                <h4 className="font-bold text-white text-sm">Bible Centered</h4>
                <p className="text-xs text-slate-400">Rooted in Scripture</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <Users className="w-6 h-6 text-purple-400 mb-2" />
                <h4 className="font-bold text-white text-sm">Loving Community</h4>
                <p className="text-xs text-slate-400">Warm Fellowship</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Cross className="w-32 h-32 text-indigo-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Our Core Vision</h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>To proclaim the Gospel of Jesus Christ across all nations.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>To equip believers through prayer, worship, and Bible teaching.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>To serve society with compassion, food drives, and family counseling.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. SUNDAY TIMINGS & LOCATION BAR */}
      <section id="timings" className="py-20 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-xs uppercase font-bold text-indigo-400 tracking-wider">Service Timings</h2>
            <p className="text-3xl font-extrabold text-white mt-2">Join Our Worship Services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <Clock className="w-8 h-8 text-indigo-400 mb-4" />
              <h4 className="font-bold text-white text-lg">Sunday Morning Worship</h4>
              <p className="text-xs text-indigo-400 font-semibold mt-1">10:00 AM - 12:30 PM</p>
              <p className="text-xs text-slate-400 mt-2">Praise, Worship, Sermon & Holy Communion.</p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition">
              <Users className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="font-bold text-white text-lg">Midweek Prayer Meeting</h4>
              <p className="text-xs text-purple-400 font-semibold mt-1">Every Wednesday @ 7:00 PM</p>
              <p className="text-xs text-slate-400 mt-2">Intercessory prayer and Bible study.</p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 transition">
              <Sparkles className="w-8 h-8 text-pink-400 mb-4" />
              <h4 className="font-bold text-white text-lg">Youth & Kids Fellowship</h4>
              <p className="text-xs text-pink-400 font-semibold mt-1">Every Saturday @ 5:00 PM</p>
              <p className="text-xs text-slate-400 mt-2">Interactive activities, music & mentoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ONLINE GIVING / TITHES */}
      <section id="donate" className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="p-3 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl w-fit mx-auto">
            <Heart className="w-8 h-8 text-indigo-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-white">Online Giving & Tithes</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver." (2 Cor 9:7)
          </p>
          
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl max-w-lg mx-auto text-left space-y-4">
            <h4 className="font-bold text-white text-lg border-b border-slate-800 pb-2">Direct Bank / UPI Details</h4>
            <div className="text-sm space-y-2.5 text-slate-300">
              <p className="flex justify-between"><span className="text-slate-500">Account Name:</span> <strong className="text-white">Grace Fellowship Trust</strong></p>
              <p className="flex justify-between"><span className="text-slate-500">Bank Name:</span> <strong className="text-white">HDFC Bank</strong></p>
              <p className="flex justify-between"><span className="text-slate-500">Account No:</span> <strong className="text-white">50100987654321</strong></p>
              <p className="flex justify-between"><span className="text-slate-500">IFSC Code:</span> <strong className="text-white">HDFC0001234</strong></p>
              <p className="flex justify-between"><span className="text-slate-500">UPI ID:</span> <strong className="text-indigo-400">gracefellowship@upi</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRAYER REQUEST FORM */}
      <section id="contact" className="py-20 border-b border-slate-800">
        <div className="max-w-xl mx-auto px-4">
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-3xl font-extrabold text-white">Prayer Request & Contact</h2>
            <p className="text-slate-400 text-sm">Do you need prayer or guidance? Send us your confidential request.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1 font-medium">Your Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1 font-medium">Phone Number / Email</label>
              <input required type="text" placeholder="+91 9876543210" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1 font-medium">Prayer Request Details</label>
              <textarea required rows={4} placeholder="Write your prayer points here..." className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-indigo-500" />
            </div>

            <button type="submit" className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Submit Prayer Request
            </button>

            {submitted && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Your prayer request has been submitted. Our pastor and team will pray for you!
              </div>
            )}
          </form>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-12 bg-slate-950 text-slate-500 text-xs border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-bold text-white text-base">
            <Cross className="w-5 h-5 text-indigo-400" /> Grace Fellowship Trust
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#timings" className="hover:text-white transition">Timings</a>
            <a href="#donate" className="hover:text-white transition">Giving</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <Link href="/studio" className="text-indigo-400 hover:text-indigo-300 font-semibold">Admin Panel</Link>
          </div>
          <p>© {new Date().getFullYear()} Grace Fellowship Trust. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}