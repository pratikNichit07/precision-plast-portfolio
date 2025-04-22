import React, { useState } from "react";
import { Play, Pause } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface CorporateFilmProps {
  className?: string;
}

const CorporateFilm: React.FC<CorporateFilmProps> = ({ className = "" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const isMobile = useIsMobile();

  const toggleVideo = () => {
    const video = document.getElementById(
      "corporate-video"
    ) as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      className={`section-padding bg-white ${className} animate-on-scroll`}
    >
      <div className="container mx-auto container-padding">
        <div className="text-center mb-10">
          <h2 className="section-heading animate-item">Corporate Film</h2>
          <div className="accent-bar mx-auto animate-item"></div>
          <p className="text-sanika-gray text-lg max-w-3xl mx-auto mb-8 animate-item">
            Take a virtual tour of our state-of-the-art manufacturing facility
            and learn about our innovative processes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-item">
          <div
            className="relative rounded-lg overflow-hidden shadow-lg group"
            onClick={toggleVideo}
          >
            {/* Video player */}
            <div className="aspect-w-16 aspect-h-9">
              <video
                id="corporate-video"
                className="w-full h-full object-cover"
                poster="public/image.png"
                preload="metadata"
                controls
                onClick={(e) => e.stopPropagation()}
                onEnded={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)} // Sync state on play
                onPause={() => setIsPlaying(false)} // Sync state on pause
              >
                {/* Sample video - replace this with your actual video */}
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Play/Pause button overlay - only show when not playing */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-sanika-blue bg-opacity-80 rounded-full p-3 md:p-4 transform transition-transform duration-300 group-hover:scale-110">
                  <Play
                    className="h-6 w-6 md:h-8 md:w-8 text-white"
                    fill="white"
                  />
                </div>
              </div>
            )}

            {/* Overlay gradient - only show when not playing */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-gradient-to-t from-sanika-darkgray to-transparent opacity-40"></div>
            )}

            {/* Caption - only show when not playing */}
            {!isPlaying && (
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-semibold text-lg md:text-xl">
                  Experience the Sanika Advantage
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 text-sm text-sanika-gray text-center">
            {isPlaying
              ? "Click to pause the video"
              : "Click to play our corporate film"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateFilm;
