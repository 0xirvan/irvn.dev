"use client";
import { discordTimestamp } from "@/lib/time";
import { useEffect, useState } from "react";

interface TimestampProps {
  unixTimestamp: number;
}

export const ElapsedTime = ({ unixTimestamp }: TimestampProps) => {
  const [timeAgo, setTimeAgo] = useState(discordTimestamp(unixTimestamp));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeAgo(discordTimestamp(unixTimestamp));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [unixTimestamp]);

  return <>{timeAgo}</>;
};
