import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume, Volume1Icon, VolumeXIcon, Volume2Icon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function VideoPlayer({ videoUrl, poster }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [volume, setVolume] = useState(1);
  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
    // console.log(currentTime)
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
    console.log(duration)
  };

  const handleSeek = (event) => {
    const seekTime = (event.target.value / 100) * duration;
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const disableRightClick = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.addEventListener('contextmenu', disableRightClick);

    return () => {
      videoElement.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  const handleVolumeChange = (event) => {
    const volume = event.target.value / 100; // Convert range value to 0-1 scale
    videoRef.current.volume = volume;
    setVolume(volume);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setControlsVisible(true)}
      onMouseLeave={() => setControlsVisible(false)}
    >
      <video
        ref={videoRef}
        width={1000}
        height={300}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        key={videoUrl}
        className="rounded-md"
        poster={poster}
        controls={false}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      {controlsVisible && (
        <div className="absolute  flex  gap-2 bottom-0 left-0 right-0 backdrop-blur-xl rounded-md bg-gradient-to-t  to-transparent p-2  items-end justify-between transition-opacity duration-300 opacity-100">
          <button onClick={handlePlayPause} className="text-white ">
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <div className='relative flex w-full'>
          <span className="absolute -top-7 left-0 text-white text-sm">
            {duration?<>{Math.round(currentTime)} / {Math.round(duration)}</>:'00/00'}
          </span>
          <span className="absolute -top-7 right-4 text-white text-sm flex gap-2 items-center ">
          {volume === 0 ? <VolumeXIcon /> : (volume > 0.5 ? <Volume2Icon /> : <Volume1Icon />)}

          <input
            type="range"
            min="0"
            max="100"
            value={volume * 100}
            onChange={handleVolumeChange}
            className="w-24 h-2 bg-gray-200 rounded-lg overflow-hidden appearance-none cursor-pointer"
            
            />
          </span>
          <input
            type="range"
            min="0"
            max="100"
            value={(currentTime / duration) * 100}
            onChange={handleSeek}
            className=" bg-gray-200 w-full h-[5px] rounded-sm overflow-hidden appearance-none cursor-pointer"
          />
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
