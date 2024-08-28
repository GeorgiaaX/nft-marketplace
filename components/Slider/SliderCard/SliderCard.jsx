import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Style from "./SliderCard.module.css";
import images from "../../../img";

const SliderCard = () => {
  return (
    <motion.div className={Style.sliderCard}>
      <div className={Style.sliderCard_box}>
        <motion.div className={Style.sliderCard_box_img}>
          <Image
            src={images.creatorbackground10}
            className={Style.sliderCard_box_img_img}
            alt="slider profile"
            width={500}
            height={300}
          />
        </motion.div>
        <div className={Style.sliderCard_box_title}>
          <p>NFT Video #4659</p>
          <div className={Style.sliderCard_box_title_like}>
            <small>1 of 100</small>
          </div>
        </div>

        <div className={Style.sliderCard_box_price}>
          <div className={Style.sliderCard_box_price_box}>
            <small>Current Bid</small>
            <p>1.000 ETH</p>
          </div>

          <div className={Style.sliderCard_box_price_time}></div>
          <small>Remaining Time</small>
          <p>3h : 15m : 20s</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;
