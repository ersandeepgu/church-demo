import { client } from "@/sanity/lib/client";
import { Play, Calendar, User } from "lucide-react";

interface Sermon {
  _id: string;
  title: string;
  speaker: string;
  youtubeUrl: string;
  date: string;
  description: string;
}

async function getSermons(): Promise<Sermon[]> {
  const query = `*[_type == "sermon"] | order(date desc)[0..5]{
    _id,
    title,
    speaker,
    youtubeUrl,
    date,
    description
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

// YouTube URL se Embed Link banane ka helper
function getYouTubeEmbedUrl(url: string) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : null;
}

export default async function Sermons() {
  const sermons = await getSermons();

  return (
    <section id="sermons" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold">
            Spiritual Nourishment
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Recent Sermons & Preachings
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Watch and listen to powerful messages from our Pastors and guest speakers.
          </p>
        </div>

        {/* Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.length > 0 ? (
            sermons.map((sermon) => {
              const embedUrl = getYouTubeEmbedUrl(sermon.youtubeUrl);
              return (
                <div
                  key={sermon._id}
                  className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-xl hover:border-indigo-500/40 transition-all flex flex-col justify-between"
                >
                  {/* YouTube Embed Container */}
                  <div className="relative aspect-video w-full bg-slate-900">
                    {embedUrl ? (
                      <iframe
                        src={embedUrl}
                        title={sermon.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-slate-500 text-sm">
                        <Play className="w-8 h-8 mr-2" /> No Video Link
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4 text-xs text-indigo-400">
                        {sermon.speaker && (
                          <span className="flex items-center gap-1">
                            <User className="w-3.5 h-3.5" />
                            {sermon.speaker}
                          </span>
                        )}
                        {sermon.date && (
                          <span className="flex items-center gap-1 text-slate-400">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(sermon.date).toLocaleDateString()}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold line-clamp-2 text-white">
                        {sermon.title}
                      </h3>

                      {sermon.description && (
                        <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                          {sermon.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12 text-slate-500 border border-dashed border-slate-800 rounded-3xl">
              No sermons published yet. Add your first sermon from Sanity Studio!
            </div>
          )}
        </div>

      </div>
    </section>
  );
}