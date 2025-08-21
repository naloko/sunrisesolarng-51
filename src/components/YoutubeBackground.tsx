
import { useState, useEffect } from 'react';

interface YoutubeBackgroundProps {
  videoId?: string; // For YouTube videos
  videoFile?: string; // For local video files
  fallbackImage?: string; // For fallback background image
}

const YoutubeBackground = ({ videoId, videoFile, fallbackImage }: YoutubeBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay loading the video for better initial page load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Ensure video path is correctly formatted for both dev and production
  const getVideoPath = (path: string): string => {
    if (!path) return '';
    
    // Just use the filename directly without any path manipulation
    return path.startsWith('/') ? path : `/${path}`;
  };

  return (
    <div className="hero-video-container">
      {isLoaded && (
        videoFile ? (
          // Local video file
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster={fallbackImage || "/placeholder.svg"}
            key={videoFile} // Add key to force remount when path changes
          >
            <source src={getVideoPath(videoFile)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : videoId ? (
          // YouTube embed
          <iframe 
            className="hero-video"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&version=3&vq=hd720&enablejsapi=1&iv_load_policy=3&fs=0&annotation=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Sunrise Solar Solutions Background Video"
          ></iframe>
        ) : fallbackImage ? (
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${fallbackImage})` }}
          ></div>
        ) : (
          <div className="w-full h-full bg-gray-900"></div>
        )
      )}
      <div className="hero-overlay"></div>
    </div>
  );
};

export default YoutubeBackground;
