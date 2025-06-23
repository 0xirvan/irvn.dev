import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TimelineItemProps {
  date: string;
  title: string;
  institution: string;
  description: string;
  isLast?: boolean;
}

export function TimelineItem({
  date,
  title,
  institution,
  description,
  isLast = false,
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative flex items-start pb-12 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-0 flex flex-col items-center">
        <motion.div
          className="h-6 w-6 rounded-full border-[3px] border-primary bg-background z-10 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: 0.2,
          }}
        >
          <div className="h-2 w-2 rounded-full bg-primary"></div>
        </motion.div>

        {!isLast && (
          <motion.div
            className="h-full w-0.5 bg-gradient-to-b from-primary/80 to-primary/20"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.div>
        )}
      </div>

      <div className="ml-12 flex-1">
        <div className="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
          <div className="flex flex-col gap-1">
            <time className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit">
              {date}
            </time>

            <h3 className="text-xl font-bold mt-3">{title}</h3>

            <p className="text-lg font-medium text-muted-foreground">
              {institution}
            </p>

            <div className="mt-3 text-muted-foreground">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return <div className={cn("relative pl-6", className)}>{children}</div>;
}
