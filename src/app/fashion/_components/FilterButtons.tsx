"use client";

import { useState } from "react";
import {twJoin} from 'tailwind-merge';

interface FilterButtonProps {
  categories: string[];
  filterItems: any;
}

export default function FilterButtons({
  categories,
  filterItems,
}: FilterButtonProps) {
  const [selected, setSelected] = useState<string>("all");

  return (
    <div className="my-16 flex gap-10">
      <div>
        <button
          onClick={() => {
            filterItems();
            setSelected("all");
          }}
          className={twJoin("uppercase", selected === 'all' && 'font-bold')}
          >
          all
        </button>
        {selected === "all" && <div className="h-0.5 w-full bg-navy-blue"></div>}
      </div>
      {categories.map((item, index) => (
        <div key={index}>
          <button
            className={twJoin("uppercase", selected === item && 'font-bold')}
            onClick={() => {
              filterItems(item);
              setSelected(item);
            }}
          >
            {item}
          </button>
          {selected === item && <div className="h-0.5 w-full bg-navy-blue"></div>}
        </div>
      ))}
    </div>
  );
}
