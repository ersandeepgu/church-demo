import { client } from "@/sanity/lib/client";
import { Calendar, MapPin, Clock } from "lucide-react";

interface EventItem {
  _id: string;
  title: string;
  eventDate: string;
  location: string;
  description: string;
}

async function getEvents(): Promise<EventItem[]> {
  const query = `*[_type == "event"] | order(eventDate asc)[0..3]{
    _id,
    title,
    eventDate,
    location,
    description
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export default async function Events() {
  const events = await getEvents();

  return (
    <section id="events" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold">
            Community Gatherings
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Upcoming Events
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Mark your calendar and join us for upcoming worship services, conferences, and fellowships.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.length > 0 ? (
            events.map((evt) => {
              const d = evt.eventDate ? new Date(evt.eventDate) : null;
              const dateStr = d ? d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'TBA';
              const timeStr = d ? d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : '';

              return (
                <div
                  key={evt._id}
                  className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    {/* Badge */}
                    <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 w-fit border border-indigo-500/20">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{dateStr}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white">{evt.title}</h3>

                    {evt.description && (
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {evt.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
                    {timeStr && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-indigo-400" />
                        <span>{timeStr}</span>
                      </div>
                    )}
                    {evt.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-indigo-400" />
                        <span>{evt.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12 text-slate-500 border border-dashed border-slate-800 rounded-3xl">
              No upcoming events scheduled right now. Check back soon!
            </div>
          )}
        </div>

      </div>
    </section>
  );
}