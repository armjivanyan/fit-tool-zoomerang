"use client";
import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";

import styles from "./EditArea.module.css";

import Presets from "./components/Presets/Presets";
import DeleteButton from "./components/DeleteButton/DeleteButton";
import SaveButton from "./components/SaveButton/SaveButton";

interface EditAreaProps {
  selectedImageUrl: string | undefined;
  setSelectedImage: (selectedImage: File | undefined) => void;
  showPresets: boolean;
  backgroundColor: string;
}

const EditArea = ({
  selectedImageUrl,
  setSelectedImage,
  showPresets,
  backgroundColor,
}: EditAreaProps) => {
  const removeSelectedImage = () => {
    setSelectedImage(undefined);
  };

  const borderWidth = 3,
    presetsMenuWidth = 48,
    headerWidth = 64;

  let img = useRef<HTMLImageElement>(null);
  let div = useRef<HTMLDivElement>(null);

  let [drag, setDrag] = useState("");
  let [width, setWidth] = useState<number>(0);
  let [height, setHeight] = useState<number>(0);

  let [divTop, setDivTop] = useState<number | string>();
  let [divLeft, setDivLeft] = useState<number | string>();

  let [imgTop, setImgTop] = useState<number | string>();

  let [activePreset, setActivePreset] = useState("");

  function setDivSizes() {
    if (img.current) {
      setWidth(img.current.width);
      setHeight(img.current.height);

      setDivTop(`calc(50% - ${img.current.height / 2}px - ${borderWidth}px)`);
      setDivLeft(img.current.offsetLeft - borderWidth);

      setImgTop(`calc(50% - ${img.current.height / 2}px)`);
    }
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!img.current || !div.current) {
      return;
    }
    if (drag) {
      setActivePreset("custom");
    }
    switch (drag) {
      case "left":
        if (
          e.clientX > presetsMenuWidth &&
          e.clientX <= presetsMenuWidth + img.current.offsetLeft - borderWidth
        ) {
          let change = presetsMenuWidth + div.current.offsetLeft - e.clientX;
          setDivLeft(div.current.offsetLeft - change);
          setWidth(width + change);
        }
        break;
      case "right":
        if (
          e.clientX >=
          presetsMenuWidth +
            img.current.offsetLeft +
            img.current.width -
            borderWidth
        ) {
          let change =
            e.clientX - (div.current.offsetLeft + width + presetsMenuWidth);
          setWidth(width + change);
        }
        break;
      case "top":
        if (
          e.clientY > headerWidth &&
          e.clientY <= headerWidth + img.current.offsetTop
        ) {
          let change =
            headerWidth + div.current.offsetTop + borderWidth - e.clientY;
          setDivTop(div.current.offsetTop - change);
          setHeight(height + change);
        }
        break;
      case "bottom":
        if (
          e.clientY >=
          headerWidth + img.current.offsetTop + img.current.height
        ) {
          let change =
            e.clientY -
            (headerWidth + div.current.offsetTop + height + borderWidth);
          setHeight(height + change);
        }
        break;
    }
  }

  const applyPreset = (presetName: string) => {
    if (img.current) {
      switch (presetName) {
        case "landscape":
          setHeight(img.current.height);
          setDivTop(img.current.offsetTop - borderWidth);

          let newWidth = Math.max(img.current.height, img.current.width) * 2;

          setWidth(newWidth);
          setDivLeft(
            img.current.offsetLeft - (newWidth - img.current.width) / 2
          );

          break;
        case "portrait":
          setWidth(img.current.width);
          setDivLeft(img.current.offsetLeft - borderWidth);

          let newHeight =
            img.current.height > img.current.width * 1.5
              ? img.current.height + 100
              : Math.max(img.current.height, img.current.width) * 2;

          setHeight(newHeight);
          setDivTop(
            img.current.offsetTop - (newHeight - img.current.height) / 2
          );

          break;
        case "square":
          let maxSide = Math.max(img.current.width, img.current.height) + 50;

          setWidth(maxSide);
          setHeight(maxSide);

          setDivTop(
            img.current.offsetTop -
              (maxSide - img.current.height) / 2 -
              borderWidth
          );
          setDivLeft(
            img.current.offsetLeft -
              (maxSide - img.current.width) / 2 -
              borderWidth
          );
      }
    }
  };

  const downloadImage = () => {
    const divToSave: HTMLElement | null = document.getElementById("target");
    const imgToSave = document.getElementById("imgToSave");
    let newImg = imgToSave?.cloneNode();
    if (!div.current || !divLeft || !divToSave || !newImg) {
      return;
    }

    let prev = divToSave.style.cssText;
    divToSave.style.cssText += `
      top: ${div.current.offsetTop + borderWidth + "px"};
      left: ${+divLeft + borderWidth + "px"};
      width: ${width - 2 * borderWidth + "px"};
      height: ${height - 2 * borderWidth + "px"};
      border-color: ${backgroundColor}
    `;

    divToSave.appendChild(newImg);
    divToSave.classList.toggle("border-rose-500");
    divToSave.classList.toggle(styles.hideHandles);

    html2canvas(divToSave, {
      allowTaint: false,
      useCORS: true,
    })
      .then(function (canvas) {
        const link = document.createElement("a");
        link.download = "table.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      })
      .then(function () {
        divToSave.style.cssText = prev;

        newImg && divToSave.removeChild(newImg);
        divToSave.classList.toggle("border-rose-500");
        divToSave.classList.toggle(styles.hideHandles);
      });
  };

  return (
    <div
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseUp={() => setDrag("")}
      className="flex grow h-full animate__animated animate__fadeInDown"
    >
      <div>
        <div
          className={
            styles.resizableDiv +
            " z-0 border-4 border-rose-500 " +
            (!showPresets && "hidden")
          }
          style={{
            width: width,
            height: height,
            top: divTop,
            left: divLeft,
            backgroundColor: backgroundColor,
          }}
          ref={div}
          id="target"
        >
          <div
            className={styles.leftHandle}
            onMouseDown={(e) => setDrag("left")}
          ></div>
          <div
            className={styles.rightHandle}
            onMouseDown={(e) => setDrag("right")}
          ></div>
          <div
            className={styles.topHandle}
            onMouseDown={(e) => setDrag("top")}
          ></div>
          <div
            className={styles.bottomHandle}
            onMouseDown={(e) => setDrag("bottom")}
          ></div>
        </div>
      </div>
      <img
        ref={img}
        className={styles.imageToEdit + " w-64"}
        src={selectedImageUrl}
        alt="Uploaded Image"
        draggable="false"
        id="imgToSave"
        onLoad={() => setDivSizes()}
        style={{
          top: imgTop,
        }}
      />
      <DeleteButton removeSelectedImage={removeSelectedImage} />
      {showPresets && (
        <>
          <SaveButton downloadImage={downloadImage} />
          <Presets
            applyPreset={applyPreset}
            activePreset={activePreset}
            setActivePreset={setActivePreset}
          />
        </>
      )}
    </div>
  );
};

export default EditArea;
