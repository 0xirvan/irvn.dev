import React from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  institution: string;
  period: string;
  description?: string;
  logo?: string;
  isLast?: boolean;
}

export function TimelineItem({
  title,
  institution,
  period,
  description,
  logo,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12">
      {!isLast && (
        <div className="absolute top-0 left-[7px] bottom-0 w-[2px] bg-primary/20"></div>
      )}

      <div className="absolute top-1 left-0 w-4 h-4 rounded-full bg-primary"></div>

      <div className="flex flex-col md:flex-row gap-4">
        {logo && (
          <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border border-border">
            <img
              src={logo}
              alt={institution}
              className="w-full h-full object-contain p-1"
            />
          </div>
        )}
        <div>
          <div className="text-sm text-muted-foreground">{period}</div>
          <h3 className="text-xl font-bold mt-1">{title}</h3>
          <div className="text-lg text-primary">{institution}</div>
          {description && (
            <p className="mt-2 text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

interface EducationTimelineProps {
  items: Array<Omit<TimelineItemProps, "isLast">>;
  className?: string;
}

export function EducationTimeline({
  items,
  className,
}: EducationTimelineProps) {
  return (
    <div className={cn("mt-8", className)}>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
}
