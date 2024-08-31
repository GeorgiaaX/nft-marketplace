import React, { useState, useMemo, useCallback, useContext } from "react";
import Image from "next/image";
import {useDropzone} from "react-dropzone";

import Style from "../styles/account.module.css";
import images from "../img";
import Form from "../AccountPage/Form/Form";

const Account = () => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    setFileUrl(acceptedFile[0]);
  }, []);

  const {getRootProps, getInputProps} = useDropzone({
    onDrop, 
    accept: "image/*",
    maxSize: 5000000
  });

  return (
    <div className={Style.account}>
      <div className={Style.account_info}>
        <h1>Profile settings</h1>
        <p>
          You can set preferred display name, create your profile URL and other
          personal settings.{" "}
        </p>
      </div>

      <div className={Style.account_box}>
        <div className={Style.account_box_img} {...getRootProps()}>
          <input {...getInputProps()}/>
          <Image
            src={images.user1}
            alt="account upload"
            widht={150}
            height={150}
            className={Style.account_box_img_img}
          />
          <p className={Style.account_box_img_para}>Change Image</p>
        </div>

        <div className={Style.account_box_form}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Account;