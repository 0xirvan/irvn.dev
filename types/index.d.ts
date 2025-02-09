export type SiteConfig = {
    name: string;
    title: string;
    description: string;
    links: {
      github: string;
      facebook: string;
      linkedin: string;
      twitter: string;
    };
  };
  
  //Github
  export type GithubRepo = {
    repo: string;
    description: string;
    language: string;
    languageColor: string;
    stars: number;
    link: string;
    website: string;
  };
  
  //Wakatime
  export type Languages = {
    name: string;
    total_seconds: number;
    percent: number;
    digital: string;
    decimal: string;
    text: string;
    hours: number;
    minutes: number;
  };
  
  //Discord
  export type DiscordUser = {
    id: string;
    username: string;
    avatar: string;
    global_name: string;
  };
  
  export type Status = string | "online" | "offline" | "idle" | "dnd";
  
  export type Activity = {
    name: string;
    state?: string;
    details?: string;
    application_id?: string;
    timestamps?: {
      start?: number;
      end?: number;
    };
    assets?: {
      large_image?: string;
      large_text?: string;
      small_image?: string;
      small_text?: string;
    };
  };
  
  export type DiscordApiContent = {
    spotify: {
      track_id: string;
      album_art_url: string;
    };
    discord_user: DiscordUser;
    activities: Activity[];
    discord_status: string;
  } & DiscordKeyString;
  
  export type DiscordKeyString = {
    [key: string]: DiscordApiContent;
  };
  
  export type DiscordApiResponse = {
    data: DiscordApiContent;
  };