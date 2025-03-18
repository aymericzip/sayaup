import { useEffect, useState } from "react";

type FormSectionProps = {
  askNewQuestion: (newQuestion: string) => void;

  isLoading: boolean;
};

export const FormSection = ({
  askNewQuestion,
  isLoading,
}: FormSectionProps) => {
  const [newQuestion, setNewQuestion] = useState("");

  useEffect(() => {
    setNewQuestion("");
  }, [isLoading]);

  return (
    <form className="mt-5 flex flex-row justify-center items-center gap-3 item-end">
      <textarea
        rows={5}
        placeholder="Ask me anything..."
        className="w-full h-10 max-h-[250px] px-4 py-2 border-none rounded-3xl scrollbar-hide"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        onInput={(e) => {
          const blox = e.target as HTMLTextAreaElement;
          const value = blox.value;

          let numberOfLineBreaks = (value.match(/\n/g) || []).length;
          let newHeight = 35 + numberOfLineBreaks * 30 + 20 + 2; // min-height + lines x line-height + padding + border

          blox.style.height = newHeight + "px";
        }}
      ></textarea>
      <button
        className="w-auto"
        onClick={(e) => {
          e.preventDefault();
          if (!isLoading) {
            askNewQuestion(newQuestion);
          }
        }}
        disabled={isLoading}
      >
        Send
      </button>
    </form>
  );
};
