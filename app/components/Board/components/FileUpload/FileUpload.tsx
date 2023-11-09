"use client";
import React, { useState } from "react";
import styles from "./FileUpload.module.css";

interface FileUploadProps {
  setSelectedImage: (selectedImage: File | undefined) => void;
}
const FileUpload = ({ setSelectedImage }: FileUploadProps) => {
  const imageChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      setSelectedImage(e.currentTarget.files[0]);
    }
  };

  function onDropHandler(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedImage(e.dataTransfer.files[0]);
    }
  }

  return (
    <div
      onDragStart={(e) => e.preventDefault()}
      onDragLeave={(e) => e.preventDefault()}
      onDragOver={(e) => e.preventDefault()}
      className="flex grow justify-center"
    >
      <label
        onDragStart={(e) => e.preventDefault()}
        onDragLeave={(e) => e.preventDefault()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDropHandler(e)}
        className={
          styles.largeGaps +
          " flex justify-center w-4/12 h-64 px-4 bg-slate-200 cursor-pointer"
        }
      >
        <span className="flex flex-col justify-center items-center space-x-2">
          <span className="flex justify-center items-center bg-white rounded-full w-20 h-20 mb-3">
            <img className="w-9 h-9" src="/upload.png" alt="" />
          </span>
          <span>
            <h3 className="font-bold text-2xl text-center">
              Drag & drop File or <span className="text-rose-500">Upload</span>
            </h3>
            <h6 className="text-md text-center">
              <span className="text-gray-400">Supported File:</span>{" "}
              <span className="font-semibold">MP4,AVI,PNG.</span>
            </h6>
          </span>
        </span>
        <input
          accept="image/*"
          type="file"
          onChange={imageChange}
          name="file_upload"
          className="hidden"
        />
      </label>
    </div>
  );
};

export default FileUpload;
