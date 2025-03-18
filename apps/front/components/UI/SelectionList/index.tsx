import React, { ReactNode } from "react";

interface Item {
  title: string;
  id: string;
  children: ReactNode;
}

interface SelectionListProps {
  items: Item[];
  onChange?: (value: string) => void;
}

export const SelectionList = ({
  items,
  onChange = () => {},
}: SelectionListProps) => {
  return (
    <select
      data-te-select-init
      onChange={(e) => onChange(e.currentTarget.value)}
    >
      {items.map((item, index) => (
        <option value={item.title} key={index}>
          {item.title}
        </option>
      ))}
    </select>
  );
};
