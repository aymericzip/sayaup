"use client";

import {
  OpenAIApi,
  Configuration,
  ChatCompletionRequestMessage,
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
} from "openai";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FormSection } from "./FormSection";
import { MessagesList } from "./MessagesList";
import { fistMessages, initPrompt } from "./setupPrompt";
import { wait } from "../../utils/wait";

export interface StoredValue {
  question: string | undefined;
  answer: string | undefined;
}

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

delete configuration.baseOptions.headers["User-Agent"];

export const ChatBot = () => {
  const openai = useMemo(() => new OpenAIApi(configuration), []);

  const [storedPromt, setStoredPromt] = useState<
    ChatCompletionRequestMessage[]
  >([...fistMessages]);

  const [stream, setStream] = useState<ChatCompletionRequestMessage | null>({
    role: "assistant",
    content: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const managesStream = useCallback(
    async (data: CreateChatCompletionResponse) => {
      let buffer = "";
      let gptMessage = "";

      for (const chunk of data as unknown as string) {
        buffer += chunk.toString();
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for await (const line of lines) {
          const message = line.replace(/^data: /, "");

          if (message === "[DONE]") {
            setStoredPromt((storedPromt) => {
              return [
                ...storedPromt,
                {
                  role: "assistant",
                  content: gptMessage,
                },
              ];
            });

            setStream(null);
            return;
          }

          if (message.length === 0) {
            continue;
          }

          try {
            const json = JSON.parse(message);
            const token = json.choices[0].delta.content;

            if (token) {
              gptMessage += token;

              const timeToWait = Math.random() * 300 + 50; // 50 - 300 ms

              await wait(timeToWait);

              setStream({
                role: "assistant",
                content: gptMessage,
              });
            }
          } catch (error) {
            console.error("Error parsing message:", error);
            continue;
          }
        }
      }
    },
    []
  );

  const generateResponse = useCallback(async () => {
    setIsLoading(true);

    const completeOptions: CreateChatCompletionRequest = {
      model: "gpt-3.5-turbo",
      temperature: 0.2, // 0 (deterministic) - 2 (random)
      // top_p: 1, // dont put this with temperature
      max_tokens: 1000,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stream: true,
      stop: ["/"],
      messages: [
        ...initPrompt,
        ...storedPromt,
      ] satisfies ChatCompletionRequestMessage[],
    };

    await openai
      .createChatCompletion(completeOptions, {})
      .catch((err) => {
        throw err;
      })
      .then(async (res) => managesStream(res.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, [openai, storedPromt, managesStream]);

  useEffect(() => {
    if (storedPromt.length > 0) {
      const isNewQuestion = storedPromt[storedPromt.length - 1].role === "user";

      if (isNewQuestion) {
        generateResponse();
      }
    }
  }, [storedPromt, generateResponse]);

  return (
    <div className=" max-w-[450px] h-[80vh] flex flex-col items-center overflow-hidden justify-between rounded-lg backdrop-blur bg-slate-100 bg-opacity-80 shadow-2xl">
      <div className="bg-primary w-full py-3 px-6 text-white text-xl font-bold tracking-widest">
        SayaUp
      </div>

      <div className="h-full overflow-auto flex flex-col items-center justify-between px-4 py-3 gap-5">
        <MessagesList storedPromt={storedPromt} stream={stream} />

        <div>
          <FormSection
            askNewQuestion={(newQuestion) => {
              setStoredPromt((storedPromt) => {
                return [...storedPromt, { role: "user", content: newQuestion }];
              });
            }}
            isLoading={isLoading}
          />
          <i className="block mt-4 ml-auto text-[12px] text-slate-400 text-right ">
            ⓘ Chat based on ChatGPT
          </i>
        </div>
      </div>
    </div>
  );
};
