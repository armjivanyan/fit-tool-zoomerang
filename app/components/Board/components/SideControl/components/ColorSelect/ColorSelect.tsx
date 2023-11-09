"use client";
import React, { useState } from "react";
import styles from "./ColorSelect.module.css";

interface ColorSelectProps {
  setBackgroundColor: (backgroundColor: string) => void;
}

const ColorSelect = ({ setBackgroundColor }: ColorSelectProps) => {
  let colors = [
    "#ffffff",
    "#a8edea",
    "#150135",
    "#a6c1ee",
    "#a8edea",
    "#d1fdff",
    "#61ffd9",
    "#23ecf9",
    "#ecfdc7",
    "#ffa1a9",
    "#abecea",
    "#4fb0fb",
    "#ea7c65",
    "#f0bbe8",
    "#c6f0bb",
  ];
  const [selectedColorKey, setSelectedColorKey] = useState<number>();

  function handleColorSelect(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    let prev = document.getElementById("color_" + selectedColorKey);
    prev?.classList.remove(styles.selected);

    let newKey: number = +(e.target as HTMLDivElement).id.split("_")[1];
    setSelectedColorKey(newKey);

    (e.target as HTMLDivElement).classList.add(styles.selected);
    setBackgroundColor(colors[newKey]);
  }

  let result = colors.map((cur, i) => {
    return (
      <div
        onClick={(e) => handleColorSelect(e)}
        className="flex w-14 h-14 m-1 rounded-md border-2 cursor-pointer transition"
        id={"color_" + i}
        style={{
          backgroundColor: cur,
        }}
      ></div>
    );
  });
  return <div className="flex flex- flex-wrap">{result}</div>;
};

export default ColorSelect;
