import React from 'react';
import { Youtube, Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  const videos = [
    {
      title: 'Fittr Kids - Healthy Eating for Kids | Nutrition Guide',
      thumbnail: 'https://img.youtube.com/vi/aX-UZg9j-uo/mqdefault.jpg',
      duration: '5:30',
      url: 'https://youtu.be/aX-UZg9j-uo?si=9QB9pzLC-krYJGj8'
    },
    {
      title: 'Fittr Kids - Fun Morning Exercise Routine for Kids',
      thumbnail: 'https://img.youtube.com/vi/bGrrF6VoyWU/mqdefault.jpg',
      duration: '6:15',
      url: 'https://youtu.be/bGrrF6VoyWU?si=NM4dLy5QzJxQwzRy'
    },
    {
      title: 'Fittr Kids - Mindfulness and Relaxation for Kids',
      thumbnail: 'https://img.youtube.com/vi/rpG6R-sOolE/mqdefault.jpg',
      duration: '4:45',
      url: 'https://youtu.be/rpG6R-sOolE?si=oO9Ec_mYZ6rhx3OD'
    }
  ];

  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com/@fittrkids7942/videos', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800">
            Video Library <span className="text-brand-red-500">Preview</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get a taste of our fun and educational content for kids and parents
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
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
            </a>
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
    </section>
  );
};

export default VideoSection;