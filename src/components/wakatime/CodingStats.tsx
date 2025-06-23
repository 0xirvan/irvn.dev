import type { WakaTimeLanguage } from "@/types/wakatime";

interface CodingStatsProps {
  languages: WakaTimeLanguage[];
  started: string;
  totalTime: string;
}

export const languageColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#f1e05a",
  PHP: "#777BB4",
  HTML: "#e34c26",
  "Vue.js": "#4FC08D",
  "Blade Template": "#F05340",
  C: "#555555",
  ["C++"]: "#f34b7d",
  ["C#"]: "#178600",
  SQL: "#e38c00",
  Markdown: "#083fa1",
  Java: "#b07219",
  Python: "#3572A5",
  JSON: "#292929",
  Ruby: "#701516",
  Go: "#00ADD8",
  Swift: "#ffac45",
  Kotlin: "#F18E33",
  Shell: "#89e051",
  Rust: "#dea584",
  Dart: "#00B4AB",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Vue: "#41b883",
  Bash: "#4EAA25",
  TOML: "#9C4121",
};

export default function CodingStats({
  languages,
  started,
  totalTime,
}: CodingStatsProps) {
  const topLanguages = languages.slice(0, 8);

  const primaryLanguage = topLanguages.length > 0 ? topLanguages[0] : null;
  const primaryLanguageColor = primaryLanguage
    ? languageColors[primaryLanguage.name] || primaryLanguage.color
    : null;

  return (
    <div className="bg-gradient-to-br from-muted/40 to-muted/20 backdrop-blur-sm p-8 rounded-xl border border-muted/50 shadow-sm">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">Coding Activity</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Activity tracked since {started}
        </p>
      </div>

      {topLanguages.length > 0 ? (
        <div className="space-y-5">
          {topLanguages.map((lang) => {
            const color = languageColors[lang.name] || lang.color;
            return (
              <div key={lang.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div
                      className="w-4 h-4 rounded-sm mr-3 shadow-sm flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: color }}
                    />
                    <span className="font-medium">{lang.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground bg-muted/40 px-2 py-0.5 rounded-full">
                      {lang.percent.toFixed(1)}%
                    </span>
                    <span className="font-mono text-sm">{lang.text}</span>
                  </div>
                </div>
                <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out group-hover:brightness-110 shadow-sm"
                    style={{
                      width: `${lang.percent}%`,
                      backgroundColor: color,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-muted/20 border border-muted/40 rounded-lg p-6 text-center">
          <p className="text-muted-foreground">
            No coding activity data available.
          </p>
        </div>
      )}

      {topLanguages.length > 0 && (
        <div className="mt-8 pt-6 border-t border-muted/30">
          <div className="flex flex-wrap gap-4 justify-between">
            <div className="bg-muted/30 p-4 rounded-lg text-center flex-1 min-w-[120px]">
              <div className="text-xs text-muted-foreground mb-1">
                Top Language
              </div>
              <div className="font-semibold">{primaryLanguage?.name}</div>
              <div
                className="h-1 w-10 mx-auto mt-2 rounded-full"
                style={{ backgroundColor: primaryLanguageColor || "#888" }}
              />
            </div>

            <div className="bg-muted/30 p-4 rounded-lg text-center flex-1 min-w-[120px]">
              <div className="text-xs text-muted-foreground mb-1">
                Languages
              </div>
              <div className="font-semibold">{languages.length}</div>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg text-center flex-1 min-w-[120px]">
              <div className="text-xs text-muted-foreground mb-1">
                Coding Time
              </div>
              <div className="font-semibold">{totalTime}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
