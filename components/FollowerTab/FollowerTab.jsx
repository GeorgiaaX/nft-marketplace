import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";

import Style from "./FollowerTab.module.css";
// import images from "../../img";

const FollowerTab = () => {
  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const followingArray = [1, 2, 3, 4, 5, 6];
  const newsArray = [1, 2, 3, 4, 5];
  return (
    <div className={Style.followerTab}>
      <div className={Style.followerTab_title}>
        <h2>Top Creators List...</h2>
        <div className={Style.followerTab_tabs}>
          <div className={Style.followerTab_tabs_btn}>
            <button onClick={() => openPopular()}>
                <RiUserFollowFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;
