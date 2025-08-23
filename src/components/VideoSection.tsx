import React, { useState, useEffect } from 'react';
import { Youtube, Play, X } from 'lucide-react';
import axios from 'axios';

interface Video {
  title: string;
  thumbnail: string;
  duration: string;
  url: string;
}

const VideoSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; // For Vite
  // const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY; // Uncomment for Create React App
  const videoIds = ['aX-UZg9j-uo', 'bGrrF6VoyWU', 'rpG6R-sOolE'];

  // Function to format ISO 8601 duration (e.g., PT5M30S) to MM:SS
  const formatDuration = (isoDuration: string): string => {
    const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = match?.[1] ? parseInt(match[1].replace('H', '')) : 0;
    const minutes = match?.[2] ? parseInt(match[2].replace('M', '')) : 0;
    const seconds = match?.[3] ? parseInt(match[3].replace('S', '')) : 0;
    return `${hours ? hours + ':' : ''}${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Fetch video details from YouTube API
  useEffect(() => {
    if (!API_KEY) {
      console.error('YouTube API key is missing. Please set VITE_YOUTUBE_API_KEY in .env');
      // Fallback to static data if API key is missing
      setVideos([
        {
          title: 'Fittr Kids - Healthy Eating for Kids | Nutrition Guide',
          thumbnail: 'https://img.youtube.com/vi/aX-UZg9j-uo/mqdefault.jpg',
          duration: '5:30',
          url: 'https://www.youtube.com/embed/aX-UZg9j-uo',
        },
        {
          title: 'Fittr Kids - Fun Morning Exercise Routine for Kids',
          thumbnail: 'https://img.youtube.com/vi/bGrrF6VoyWU/mqdefault.jpg',
          duration: '6:15',
          url: 'https://www.youtube.com/embed/bGrrF6VoyWU',
        },
        {
          title: 'Fittr Kids - Mindfulness and Relaxation for Kids',
          thumbnail: 'https://img.youtube.com/vi/rpG6R-sOolE/mqdefault.jpg',
          duration: '4:45',
          url: 'https://www.youtube.com/embed/rpG6R-sOolE',
        },
      ]);
      return;
    }

    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos`,
          {
            params: {
              part: 'snippet,contentDetails',
              id: videoIds.join(','),
              key: API_KEY,
            },
          }
        );

        const fetchedVideos = response.data.items.map((item: any) => ({
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          duration: formatDuration(item.contentDetails.duration),
          url: `https://www.youtube.com/embed/${item.id}`,
        }));

        setVideos(fetchedVideos);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        // Fallback to static data if API fails
        setVideos([
          {
            title: 'Fittr Kids - Healthy Eating for Kids | Nutrition Guide',
            thumbnail: 'https://img.youtube.com/vi/aX-UZg9j-uo/mqdefault.jpg',
            duration: '5:30',
            url: 'https://www.youtube.com/embed/aX-UZg9j-uo',
          },
          {
            title: 'Fittr Kids - Fun Morning Exercise Routine for Kids',
            thumbnail: 'https://img.youtube.com/vi/bGrrF6VoyWU/mqdefault.jpg',
            duration: '6:15',
            url: 'https://www.youtube.com/embed/bGrrF6VoyWU',
          },
          {
            title: 'Fittr Kids - Mindfulness and Relaxation for Kids',
            thumbnail: 'https://img.youtube.com/vi/rpG6R-sOolE/mqdefault.jpg',
            duration: '4:45',
            url: 'https://www.youtube.com/embed/rpG6R-sOolE',
          },
        ]);
      }
    };

    fetchVideos();
  }, [API_KEY]);

  const handleYouTubeClick = () => {
    window.open(
      'https://www.youtube.com/@fittrkids7942/videos',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-black mb-6 text-gray-800"
            style={{ fontFamily: '"Bubblegum Sans", cursive' }}
          >
            Video Library <span className="text-brand-red-500">Preview</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get a taste of our fun and educational content for kids and parents
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {videos.map((video, index) => (
            <div
              key={index}
              onClick={() => setActiveVideo(video.url)}
              className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-90 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-black" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black group-hover:text-brand-green-500 transition-colors duration-300">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleYouTubeClick}
            className="bg-black hover:bg-gray-800 text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <Youtube className="w-6 h-6" />
            Visit Our YouTube Channel
          </button>
        </div>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white rounded-3xl shadow-2xl relative w-[90%] md:w-[70%] lg:w-[60%] p-4 border-4 border-pink-300">
            <button
              className="absolute -top-3 -right-3 bg-pink-500 text-white rounded-full p-2 shadow hover:bg-pink-600 transition z-50"
              onClick={() => setActiveVideo(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src={`${activeVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;