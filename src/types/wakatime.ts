export interface WakaTimeLanguage {
  name: string;
  total_seconds: number;
  percent: number;
  text: string;
  digital: string;
  hours: number;
  minutes: number;
  color?: string;
}

export interface WakaTimeProject {
  name: string;
  total_seconds: number;
  percent: number;
  text: string;
  digital: string;
  hours: number;
  minutes: number;
}

export interface WakaTimeEditor {
  name: string;
  total_seconds: number;
  percent: number;
  text: string;
  digital: string;
  hours: number;
  minutes: number;
}

export interface WakaTimeCategory {
  name: string;
  total_seconds: number;
  percent: number;
  text: string;
  digital: string;
}

export interface WakaTimeAverage {
  dailyAverage: number;
  totalSeconds: number;
  humanReadableDailyAverage: string;
  humanReadableTotal: string;
}

export interface WakaTimeStats {
  languages: WakaTimeLanguage[];
  projects: WakaTimeProject[];
  editors: WakaTimeEditor[];
  categories: WakaTimeCategory[];
  daily_average: number;
  total_seconds: number;
  human_readable_daily_average: string;
  human_readable_total: string;
  human_readable_range: string;
  human_readable_total_including_other_language: string;
}
