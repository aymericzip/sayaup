import { useEffect, useRef, useState } from "react";
import { ChatBumble, ChatBumbleType } from "./ChatBumble";
import { ChatCompletionRequestMessage } from "openai";

interface MessagesListProps {
  storedPromt: ChatCompletionRequestMessage[];
  stream: ChatCompletionRequestMessage | null;
}

export const MessagesList = ({ storedPromt, stream }: MessagesListProps) => {
  const lastPromt = storedPromt[storedPromt.length - 1];

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastPromt.role === "user") {
      // Scroll to the end
      chatContainerRef.current?.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [lastPromt]);

  useEffect(() => {
    if (stream?.content) {
      const div = chatContainerRef.current as HTMLDivElement;
      const scrollPosition = div.scrollTop;
      const scrollMax = div.scrollHeight - div.clientHeight - 100; // 100 is  the margin
      const isScrollEnd = scrollPosition >= scrollMax;

      if (isScrollEnd) {
        // Scroll to the end
        chatContainerRef.current?.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }, [stream?.content]);

  return (
    <div
      className="answer-container overflow-auto flex flex-col gap-4 pb-5 relative"
      ref={chatContainerRef}
    >
      {storedPromt.map((promt, index) => (
        <ChatBumble
          key={index}
          type={
            promt.role === "user"
              ? ChatBumbleType.QUESTION
              : ChatBumbleType.ANSWER
          }
        >
          {promt.content}
        </ChatBumble>
      ))}
      {stream?.content && (
        <ChatBumble type={ChatBumbleType.ANSWER}>{stream.content}</ChatBumble>
      )}
    </div>
  );
};
