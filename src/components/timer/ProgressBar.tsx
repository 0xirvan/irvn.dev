import { calculateProgress } from "@/lib/time";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

interface SpotifyBarProps {
  start: number;
  end: number;
}

export const ProgressBar = ({ start, end }: SpotifyBarProps) => {
  const [progress, setProgress] = useState(calculateProgress(start, end));
  const [currentTime, setCurrentTime] = useState<number>(Date.now() - start);

  function formatTime(timestamp: number): string {
    const minutes = Math.floor(timestamp / 60000);
    const seconds = ((timestamp % 60000) / 1000).toFixed(0);
    return `${minutes}:${parseInt(seconds) < 10 ? "0" : ""}${seconds}`;
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress(calculateProgress(start, end));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [start, end]);

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - start;
      setCurrentTime(elapsedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [start, end]);

  return (
    <div className="flex items-center gap-2 py-1">
      <div className="w-[30px]">{formatTime(currentTime)}</div>
      <Progress
        value={progress}
        className="h-[0.5rem] w-[230px] sm:w-[300px]"
      />
      <div className="flex w-[30px] justify-end">{formatTime(end - start)}</div>
    </div>
  );
};
