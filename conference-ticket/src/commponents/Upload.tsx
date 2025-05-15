import { useState, useRef, useEffect } from "react";
import upload_icon from "../assets/images/icon-upload.svg";
import info_icon from "../assets/images/icon-info.svg";

interface UploadProps {
  avatar: File | null;
  setAvatar: (avatar: File | null) => void;
  error?: string;
}

export default function Upload({ avatar, setAvatar, error }: UploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const MAX_FILE_SIZE = 500 * 1024;
  const [sizeError, setSizeError] = useState<string | null>(null);

  useEffect(() => {
    if (!avatar) {
      setPreview(null);
    } else {
      const objectUrl = URL.createObjectURL(avatar);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [avatar]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };
  const handleFiles = (files: FileList) => {
    const file = files[0];
    if (file.size > MAX_FILE_SIZE) {
      setSizeError(
        `File size is ${(file.size / (1024 * 1024)).toFixed(2)}MB. Pleas upload a photo under 500kb.`,
      );
      return;
    }
    setSizeError(null);
    setAvatar(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleRemove = () => {
    setAvatar(null);
    setPreview(null);
  };

  const handleClick = () => {
    inputRef.current?.click(); // basically we are redirecting the click on div to click on input
  };

  return (
    <div className="form-section">
      <label>Upload Avatar</label>
      {preview ? (
        <div className="upload-box no-bg-hover">
          <img className="upload-box-img" src={preview} alt="avatar" />
          <div className="flex-center gap-1">
            <button className="upload-btn" onClick={handleRemove}>
              Remove Image
            </button>

            <label>
              <input
                type="file"
                id="avatar"
                onChange={handleChange}
                ref={inputRef}
                accept=".png, .jpg, .jpeg"
                hidden
              />
              <span className="upload-btn">Change Image</span>
            </label>
          </div>
        </div>
      ) : (
        <div
          className={`upload-box ${dragActive ? "drag-active" : ""}`}
          onDrop={handleDrop}
          onDragOver={handleDrag}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onClick={handleClick}
        >
          <img className="upload-box-img" src={upload_icon} alt="icon" />
          <br />
          <input
            type="file"
            id="avatar"
            onChange={handleChange}
            ref={inputRef}
            accept=".png, .jpg, .jpeg"
          />
          <label htmlFor="avatar">Drag and drop or click to upload </label>
        </div>
      )}
      {error || sizeError ? (
        <small className="form-error form-tip flex">
          <img className="" src={info_icon} alt="icon" />
          {error || sizeError}
        </small>
      ) : (
        <small className="form-tip flex">
          <img className="" src={info_icon} alt="icon" />
          Upload your photo (JPG or PNG, max size: 500KB).
        </small>
      )}
    </div>
  );
}
