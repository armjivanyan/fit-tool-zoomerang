import React, { useEffect, useState } from "react";
import styles from "./Presets.module.css";
interface PresetsProps {
  applyPreset: (presetName: string) => void;
  activePreset: string;
  setActivePreset: React.Dispatch<React.SetStateAction<string>>;
}
const Presets = ({
  applyPreset,
  activePreset,
  setActivePreset,
}: PresetsProps) => {
  let [prevCopy, setPrevCopy] = useState("custom");

  function updateSelectedPreset(newPreset: string) {
    document.getElementById(prevCopy)?.classList.remove(styles.selectedPreset);
    document.getElementById(newPreset)?.classList.add(styles.selectedPreset);
  }

  function handlePresetChange(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    newPreset: string
  ) {
    setActivePreset(newPreset);
    setPrevCopy(newPreset);
    updateSelectedPreset(newPreset);
  }

  useEffect(() => {
    applyPreset(activePreset);
    updateSelectedPreset(activePreset);
  }, [activePreset]);

  return (
    <div className={styles.menu}>
      <div
        id="landscape"
        onClick={(e) => handlePresetChange(e, "landscape")}
        className="flex justify-center flex-column items-center w-48 mb-2 bg-white text-slate-500 rounded-3xl h-10 shadow-md"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.375"
            y="5.5"
            width="19.25"
            height="11"
            rx="1.375"
            stroke="#A5A9C0"
            strokeWidth="1.375"
          />
        </svg>
        <span className="ml-2">Landscape</span>
      </div>
      <div
        id="portrait"
        onClick={(e) => handlePresetChange(e, "portrait")}
        className="flex justify-center items-center w-48 mb-2 bg-white text-slate-500 rounded-3xl h-10 shadow-md"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="16.5"
            y="1.375"
            width="19.25"
            height="11"
            rx="1.375"
            transform="rotate(90 16.5 1.375)"
            stroke="#A5A9C0"
            strokeWidth="1.375"
          />
        </svg>
        <span className="ml-2">Portrait</span>
      </div>
      <div
        id="square"
        onClick={(e) => handlePresetChange(e, "square")}
        className="flex justify-center items-center w-48 mb-2 bg-white text-slate-500 rounded-3xl h-10 shadow-md"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="17.875"
            y="4.125"
            width="13.75"
            height="13.75"
            rx="1.375"
            transform="rotate(90 17.875 4.125)"
            stroke="#A5A9C0"
            strokeWidth="1.375"
          />
        </svg>
        <span className="ml-2">Square</span>
      </div>
      <div
        id="custom"
        onClick={(e) => handlePresetChange(e, "custom")}
        className="flex z-50 justify-center items-center w-48 mb-2 bg-white text-slate-500 rounded-3xl h-10 shadow-md"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="17.875"
            y="4.125"
            width="13.75"
            height="13.75"
            rx="1.375"
            transform="rotate(90 17.875 4.125)"
            stroke="#A5A9C0"
            strokeWidth="1.375"
            strokeLinecap="round"
            strokeDasharray="4.12 4.12"
          />
        </svg>
        <span className="ml-2">Custom</span>
      </div>
    </div>
  );
};

export default Presets;
