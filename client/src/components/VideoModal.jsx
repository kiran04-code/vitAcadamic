import React, { useEffect, useState } from 'react';
import { X, ExternalLink, PlayCircle, Youtube, Loader2 } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const playlistMatch = url.match(/[?&]list=([a-zA-Z0-9_-]+)/);
    if (playlistMatch) return { type: 'playlist', id: playlistMatch[1] };
    
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^#&?]*)/,
      /youtu\.be\/|youtube\.com\/v\/([^#&?]*)/,
      /youtube\.com\/watch\?.*v=([^#&?]*)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1] && match[1].length === 11) {
        return { type: 'video', id: match[1] };
      }
    }
    return null;
  };

  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setIsLoading(true); // Reset loading state when opening
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const videoData = getYouTubeVideoId(videoUrl);
  const isPlaylist = videoData?.type === 'playlist';
  const videoId = videoData?.id;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-8">
      {/* Overlay - Increased Opacity for focus */}
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose} 
      />
      
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-5xl rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[95vh] z-10 transition-all transform duration-300 scale-100">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-100 bg-white">
          <div className="flex items-center gap-3 min-w-0">
            <div className="hidden xs:flex w-10 h-10 bg-[#33A491]/10 rounded-xl items-center justify-center text-[#33A491] shrink-0">
              <PlayCircle size={24} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#33A491]">Now Viewing</p>
              <h2 className="text-sm md:text-base font-bold text-slate-900 truncate">
                {title || (isPlaylist ? 'Video Playlist' : 'Lecture Video')}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 text-slate-400 hover:text-red-500 rounded-xl transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* Video Body - Forces 16:9 while allowing container to shrink */}
        <div className="relative w-full bg-black flex-shrink-0 aspect-video">
          {isLoading && videoId && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 bg-slate-900">
              <Loader2 className="w-10 h-10 text-[#33A491] animate-spin" />
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Loading Media...</p>
            </div>
          )}

          {videoId ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={isPlaylist 
                ? `https://www.youtube.com/embed/videoseries?list=${videoId}&autoplay=1&rel=0`
                : `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 p-6 text-center">
              <Youtube size={48} className="text-slate-300 mb-2" />
              <p className="text-sm font-bold text-slate-500 uppercase">Unable to load video</p>
              <p className="text-xs text-slate-400 mt-1">Please verify the URL: {videoUrl}</p>
            </div>
          )}
        </div>

        {/* Footer - Scrollable on mobile if height is tight */}
        <div className="p-4 md:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-[#33A491] animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Secure Stream</span>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-6 py-2.5 text-slate-500 font-bold text-xs uppercase hover:text-slate-900 transition-colors"
            >
              Close
            </button>
            {videoId && (
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#33A491] text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase hover:bg-[#2a8a7a] transition shadow-lg shadow-[#33a49133]"
              >
                <ExternalLink size={14} /> View on YouTube
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;  