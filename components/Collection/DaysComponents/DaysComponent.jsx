import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

import Style from "./DaysComponent.module.css";

const DaysComponent = ({i, el}) => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image
            src={el.background}
            className={Style.daysComponent_box_img_img}
            alt="profile background"
            width={500}
            height={300}
          />
        </div>

        <div className={Style.daysComponent_box_profile}>
          <Image
            src={el.background}
            className={Style.daysComponent_box_img_1}
            alt="profile collection"
            width={200}
            height={200}
          />
          <Image
            src={el.background}
            className={Style.daysComponent_box_img_2}
            alt="profile collection"
            width={200}
            height={200}
          />
          <Image
            src={el.background}
            className={Style.daysComponent_box_img_3}
            alt="profile collection"
            width={200}
            height={200}
          />
        </div>

        <div className={Style.daysComponent_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <Image
                src={el.user}
                className={Style.daysComponent_box_title_info_profile_img}
                alt="profile collection"
                width={30}
                height={30}
              />
              <p>
                Creator 
                <span>
                  Shoaib Bhai 
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>

            <div className={Style.daysComponent_box_title_info_price}>
              <small>1.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponent;



