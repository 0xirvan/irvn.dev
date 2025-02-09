"use client";

import { DiscordApiContent, DiscordApiResponse } from "@/types";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useEffect, useState } from "react";
import { env } from "@/env.mjs";

interface MessageData {
  op: number;
  t: string;
  d: DiscordApiContent;
}

export const UseLanyard = () => {
  const [data, setData] = useState<DiscordApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const discordId = env.NEXT_PUBLIC_DISCORD_ID;
  const socketUrl = "wss://api.lanyard.rest/socket";

  const initMessage = () => {
    sendMessage(
      JSON.stringify({ op: 2, d: { subscribe_to_ids: [discordId] } })
    );
  };

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => {
      initMessage();
    },
    shouldReconnect: () => true,
  });

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      initMessage();
    }
  }, [readyState, "discordId", sendMessage]);

  const handleEvent = (messageData: MessageData) => {
    const eventData = messageData.d;
    switch (messageData.t) {
      case "INIT_STATE":
        setData({ data: eventData && eventData[discordId] });
        setIsLoading(false);
        break;
      case "PRESENCE_UPDATE":
        setData({ data: eventData });
        setIsLoading(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (lastMessage) {
      const messageData = JSON.parse(lastMessage.data);
      handleEvent(messageData);
    }
  }, [lastMessage]);

  return { data, isLoading, readyState };
};
