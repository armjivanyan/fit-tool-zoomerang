import React from "react";
import RangeInput from "./components/RangeInput/RangeInput";
import UpscaleCheckbox from "./components/UpscaleCheckbox/UpscaleCheckbox";
import ColorSelect from "./components/ColorSelect/ColorSelect";
import styles from "./SideControl.module.css";
interface SideControlProps {
  setBackgroundColor: (backgroundColor: string) => void;
  isDisabled: boolean;
}
const SideControl = ({ setBackgroundColor, isDisabled }: SideControlProps) => {
  let values = ["360p", "480p", "640p", "720p", "1080p"];
  return (
    <div className="flex-none px-6 justify-center w-96 h-full bg-white">
      <RangeInput name="Count" min={1} max={5} type="select" />
      <RangeInput name="Count" min={10} max={50} type="range" />
      <RangeInput
        name="Resolution"
        min={0}
        max={values.length - 1}
        type="enum"
        values={values}
      />
      <UpscaleCheckbox />
      <hr className="my-5 h-0.5 bg-gray-300 border-0 dark:bg-gray-700" />
      <ColorSelect setBackgroundColor={setBackgroundColor} />
      <div className={isDisabled ? styles.disableDiv : "hidden"}></div>
    </div>
  );
};

export default SideControl;
