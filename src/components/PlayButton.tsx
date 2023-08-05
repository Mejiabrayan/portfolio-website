'use client';
import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

interface PlayButtonProps {
  audioSrc: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ audioSrc }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <button
        onClick={playAudio}
        className='w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out'
      >
        <Play />
      </button>
      {/* Audio element to play the audio */}
      <audio ref={audioRef}>
        <source src={audioSrc} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default PlayButton;
