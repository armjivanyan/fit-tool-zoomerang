"use client";
import React, { useEffect, useState } from "react";
import FileUpload from "./components/FileUpload/FileUpload";
import EditArea from "./components/EditArea/EditArea";
import PresetMenu from "./components/PresetMenu/PresetMenu";
import SideControl from "./components/SideControl/SideControl";

const Board = () => {
  const [selectedImage, setSelectedImage] = useState<File>();
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>();
  const [showPresets, setShowPresets] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [showSides, setShowSides] = useState(false);

  useEffect(() => {
    if (selectedImage) {
      setSelectedImageUrl(URL.createObjectURL(selectedImage));
      setShowSides(true);
    }
  }, [selectedImage]);

  return (
    <main className="flex h-screen min-h-screen pt-16 justify-center items-center bg-gray-100">
      {selectedImage && (
        <PresetMenu showPresets={showPresets} setShowPresets={setShowPresets} />
      )}
      {!selectedImage ? (
        <FileUpload setSelectedImage={setSelectedImage} />
      ) : (
        <EditArea
          showPresets={showPresets}
          selectedImageUrl={selectedImageUrl}
          setSelectedImage={setSelectedImage}
          backgroundColor={backgroundColor}
        />
      )}
      {selectedImage && <SideControl setBackgroundColor={setBackgroundColor} />}
    </main>
  );
};

export default Board;
