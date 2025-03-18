import React, { ReactNode, useState } from "react";

export enum ChatBumbleType {
  QUESTION = "question",
  ANSWER = "answer",
}

interface ChatBumbleProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  type: ChatBumbleType;
}

const copyText = (text: string) => {
  navigator.clipboard.writeText(text);
};

export const ChatBumble = ({ children, type, ...props }: ChatBumbleProps) => {
  const [isCopied, setIsCopied] = useState(false);

  let bumbleStyle = "rounded-xl p-4 cursor-pointer";
  let copiedTextStyle = "text-sm text-slate-400";

  if (type === ChatBumbleType.QUESTION) {
    bumbleStyle =
      bumbleStyle + " ml-auto bg-fushia-300 rounded-tr-none w-[90%]";
    copiedTextStyle = copiedTextStyle + " text-right";
  } else if (type === ChatBumbleType.ANSWER) {
    bumbleStyle = bumbleStyle + " mr-auto bg-slate-200 rounded-tl-none w-[90%]";
  }

  return (
    <>
      <span
        className={bumbleStyle}
        {...props}
        onClick={() => {
          if (typeof children === "string") {
            copyText(children), setIsCopied(true);

            setTimeout(() => {
              setIsCopied(false);
            }, 3000);
          }
        }}
      >
        {children}
      </span>
      {isCopied && <i className={copiedTextStyle}>ⓘ Text copied</i>}
    </>
  );
};
