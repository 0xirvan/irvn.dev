import HeadingText from "@/components/heading-text";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, Code } from "lucide-react";

export default function Loading() {
  return (
    <main>
      <HeadingText>stats</HeadingText>
      <div className="grid gap-6 max-w-full">
        <div>
          <h3 className="text-sm mb-2">current activity</h3>
          <Skeleton className="h-24 w-full" />
        </div>

        <div>
          <h3 className="text-sm mb-2">codin stats</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <div>
                  <h3 className="text-lg font-medium">codin hours</h3>
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
              <div>
                <Skeleton className="h-8 w-20" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                <h3 className="font-medium">top languages</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Skeleton className="h-3 w-3 rounded-full" />
                    <div className="flex-grow min-w-0 flex justify-between items-baseline">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-12" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
