import { Clock, Code } from "lucide-react";
import { Languages as Languagestype } from "@/types";
import { languageColors } from "@/lib/language-colors";

interface LanguagesProps {
  languages: Languagestype[];
  started: string;
  totalTime: string;
}

export default function CodingStats({
  languages,
  started,
  totalTime,
}: LanguagesProps) {
  const data = languages.slice(0, 10);

  return (
    <div>
      <h3 className="text-sm mb-2">codin stats</h3>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5" />
            <div>
              <h3 className="text-lg font-medium">codin hours</h3>
              <p className="text-sm">{started}</p>
            </div>
          </div>
          <div>
            <span className="text-2xl font-mono">{totalTime}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            <h3 className="font-medium">top languages</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.map((lang) => (
              <div key={lang.name} className="flex items-center space-x-3">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor:
                      languageColors[lang.name as keyof typeof languageColors],
                  }}
                />
                <div className="flex-grow min-w-0 flex justify-between items-baseline">
                  <span className="text-sm truncate">{lang.name}</span>
                  <span className="text-xs font-mono">
                    {lang.hours}:{lang.minutes.toString().padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
