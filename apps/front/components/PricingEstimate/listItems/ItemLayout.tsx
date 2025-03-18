import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Section } from "../estimateContent";

interface ItemWrapperProps {
  level: number;
  children: ReactNode;
  section?: Section;
  rightParam?: ReactNode;
  onContentClick?: () => void;
}

export const ItemLayout = ({
  level,
  section,
  children,
  rightParam,
  onContentClick,
}: ItemWrapperProps) => {
  let containerStyle =
    "p-4 mt-3 rounded-md section hover:bg-slate-100 [&:has(.section:hover)]:bg-transparent transition";
  let titleStyle = "";
  let descriptionStyle = " text-sm text-slate-400 pl-3";
  const container = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(
    container?.current?.clientWidth ?? 1000 < 640
  );

  switch (level) {
    case 0:
      containerStyle += " ";
      titleStyle = "text-3xl";
      break;

    case 1:
      containerStyle += " ";
      titleStyle = "text-xl";
      break;

    case 2:
      containerStyle += " hover:bg-slate-100 ";
      titleStyle = "text-lg";
      break;

    case 3:
      containerStyle += "";
      titleStyle = "text-base";
      break;

    case 4:
      containerStyle += "";
      titleStyle = "text-base";
      break;

    case 5:
      containerStyle += "";
      titleStyle = "text-base";
      break;

    default:
      break;
  }

  const handleResize = useCallback(() => {
    setIsMobile((container?.current?.clientWidth ?? 1000) < 640);
  }, [container]);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div className={containerStyle} ref={container}>
      <div
        className={`flex ${
          isMobile ? "flex-col" : "flex-row"
        } justify-between ${onContentClick ? "cursor-pointer" : ""}`}
        onClick={onContentClick}
      >
        {section && (
          <div>
            <span className={titleStyle}>{section.title}</span>
            <p className={descriptionStyle}>{section.description}</p>
          </div>
        )}
        {rightParam && (
          <div className="flex justify-between items-center w-full sm:w-auto p-3">
            {rightParam}
          </div>
        )}
      </div>
      {children}
    </div>
  );
};
