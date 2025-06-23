import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { UseLanyard } from "@/hooks/UseLanyard";
import { DiscordActivityCard } from "@/components/activity/ActivityCard";

export const DiscordActivity = () => {
  const { data, isLoading } = UseLanyard();

  if (isLoading) {
    return (
      <div className="w-full">
        <Alert className="flex flex-col items-center gap-3 border-none bg-muted text-center sm:flex-row sm:text-left animate-pulse">
          <Skeleton className="h-20 w-20 rounded" />
          <div className="w-full space-y-2">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-2 w-full" />
            <Skeleton className="h-4 w-20" />
          </div>
        </Alert>
      </div>
    );
  }

  if (!data || !data.data) {
    return (
      <Alert className="border-none bg-muted">
        <AlertTitle>Discord Status</AlertTitle>
        <AlertDescription>Unable to fetch Discord activity.</AlertDescription>
      </Alert>
    );
  }

  if (!data.data.activities || data.data.activities.length === 0) {
    return (
      <Alert className="border-none bg-muted">
        <AlertTitle>Discord Status</AlertTitle>
        <AlertDescription>Not doing anything at the moment.</AlertDescription>
      </Alert>
    );
  }

  const customStatus = data.data.activities.find(
    (activity) => activity.name === "Custom Status"
  );
  const otherActivities = data.data.activities.filter(
    (activity) => activity.name !== "Custom Status"
  );

  return (
    <div className="flex flex-grow flex-col gap-2">
      {customStatus && (
        <p className="text-sm text-muted-foreground">{customStatus.state}</p>
      )}

      {otherActivities.length > 0 ? (
        otherActivities.map((activity, index) => (
          <DiscordActivityCard key={index} activity={activity} data={data} />
        ))
      ) : (
        <Alert className="border-none bg-muted">
          <AlertTitle>Discord Status</AlertTitle>
          <AlertDescription>Not doing anything at the moment.</AlertDescription>
        </Alert>
      )}
    </div>
  );
};
