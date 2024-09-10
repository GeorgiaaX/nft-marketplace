import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

import Style from "./Dropzone.module.css";
import images from "../../img";

const Dropzone = ({
  title,
  heading,
  subHeading,
  name,
  website,
  description,
  royalties,
  fileSize,
  category,
  properties,
  uploadToIPFS,
  setImage
}) => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    const url = await uploadToIPFS(acceptedFile[0]);
    setFileUrl(url);
    setImage(url);
    console.log("url: ", url);
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });
  return (
    <div className={Style.Dropzone}>
      <div className={Style.Dropzone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.Dropzone_box_input}>
          <p>{title}</p>
          <div className={Style.Dropzone_box_input_img}>
            <Image
              src={images.upload}
              alt="upload"
              width={100}
              height={100}
              objectFit="contain"
              className={Style.Dropzone_box_input_img_img}
            />
          </div>

          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>

      {fileUrl && (
        <aside className={Style.Dropzone_box_aside}>
          <div className={Style.Dropzone_box_aside_box}>
            <Image
              src={fileUrl}
              alt="nft image"
              width={200}
              height={200}
            />

            <div className={Style.Dropzone_box_aside_box_preview}>
              <div className={Style.Dropzone_box_aside_box_preview_one}>
                <p>
                  <span>NFT Name: </span> {name || ""}
                </p>
              </div>

              <div className={Style.Dropzone_box_aside_box_preview_two}>
                <p>
                  <span>Website: </span> {website || ""}
                </p>
                <p>
                  <span>Description: </span>
                  {description || ""}
                </p>
              </div>

              <div className={Style.Dropzone_box_aside_box_preview_three}>
                <p>
                  <span>Royalties: </span>
                  {royalties || ""}
                </p>
                <p>
                  <span>File Size: </span>
                  {fileSize || ""}
                </p>
                <p>
                  <span>Properties: </span>
                  {properties || ""}
                </p>
                <p>
                  <span>Category: </span>
                  {category || ""}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Dropzone;
