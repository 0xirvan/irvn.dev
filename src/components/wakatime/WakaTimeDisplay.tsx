import { fetchWakaTimeStats } from "@/lib/wakatime";
import CodingStats from "./CodingStats";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState } from "react";
import type { WakaTimeStats } from "@/types/wakatime";

export function WakaTimeDisplay() {
  const [data, setData] = useState<WakaTimeStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const stats = await fetchWakaTimeStats();
        setData(stats);
        setError(null);
      } catch (err) {
        setError("Failed to load WakaTime data");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="bg-muted/30 p-6 rounded-lg">
          <Skeleton className="h-6 w-32 mb-4" />
          <Skeleton className="h-4 w-full mb-6" />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="space-y-2 mb-4">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-12" />
              </div>
              <Skeleton className="h-2.5 w-full rounded-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {error ||
            "Failed to load WakaTime data. Make sure your API key is correct."}
        </AlertDescription>
      </Alert>
    );
  }

  const languages = data.languages || [];
  const started = data.human_readable_range || "past 7 days";
  const totalTime =
    data.categories?.[0]?.digital || data.human_readable_total || "0 hrs";

  return (
    <CodingStats
      languages={languages}
      started={started}
      totalTime={totalTime}
    />
  );
}
