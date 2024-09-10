// import React, { useState } from "react";
// import Image from "next/image";
// import { BsImage } from "react-icons/bs";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import { MdVerified, MdTimer } from "react-icons/md";

// import Style from "./NFTCardTwo.module.css";
// import { LikeProfile } from "@/components/componentsindex";
// import images from "../../img";
// import { TiSocialLinkedinCircular } from "react-icons/ti";

// const NFTCardTwo = ({ NFTData }) => {
//   const [like, setLike] = useState(false);
//   const [likeInc, setLikeInc] = useState(22);

//   const likeNFT = () => {
//     if (!like) {
//       setLike(true);
//       setLikeInc(23);
//     } else {
//       setLike(false);
//       setLikeInc(23 - 1);
//     }
//   };
//   return (
//     <div className={Style.NFTCardTwo}>
//       {NFTData.map((el, i) => (
//         <div className={Style.NFTCardTwo_box} key={i + 1}>
//           <div className={Style.NFTCardTwo_box_like}>
//             <div className={Style.NFTCardTwo_box_like_box}>
//               <div className={Style.NFTCardTwo_box_like_box_box}>
//                 <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
//                 <p onClick={() => likeNFT()}>
//                   {like ? <AiOutlineHeart /> : <AiFillHeart />}{" "}
//                   <span>{likeInc + 1}</span>
//                 </p>
//               </div>
//             </div>

//             <div className={Style.NFTCardTwo_box_img}>
//               <Image
//                 className={Style.NFTCardTwo_box_img_img}
//                 src={el}
//                 alt="NFT"
//                 widht={500}
//                 height={500}
//                 objectFit="cover"
//               />
//             </div>

//             <div className={Style.NFTCardTwo_box_info}>
//               <div className={Style.NFTCardTwo_box_info_left}>
//                 <LikeProfile />
//                 <p>Clone #{i + 1}</p>
//               </div>
//               <small>4{i + 2}</small>
//             </div>

//             <div className={Style.NFTCardTwo_box_price}>
//               <div className={Style.NFTCardTwo_box_price_box}>
//                 <small> Current Bid</small>
//                 <p>1{i + 5}.000 ETH</p>
//               </div>
//               <p className={Style.NFTCardTwo_box_price_stock}>
//                 <MdTimer />
//                 <span>{i + 1} hours left</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NFTCardTwo;


import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import Link from "next/link"

import Style from "./NFTCardTwo.module.css";
import { LikeProfile } from "@/components/componentsindex";
import images from "../../img";

const NFTCardTwo = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(22);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc((prev) => prev + 1);
    } else {
      setLike(false);
      setLikeInc((prev) => prev - 1);
    }
  };

  return (
    <div className={Style.NFTCardTwo}>
      {NFTData.map((el, i) => (

        <Link href={{ pathname: "nftDetails", query: el}} key={i + 1}>
        <div className={Style.NFTCardTwo_box} key={i + 1}>
          <div className={Style.NFTCardTwo_box_like}>
            <div className={Style.NFTCardTwo_box_like_box}>
              <div className={Style.NFTCardTwo_box_like_box_box}>
                <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                <p onClick={likeNFT}>
                  {like ? <AiFillHeart /> : <AiOutlineHeart />}{" "}
                  <span>{likeInc}</span>
                </p>
              </div>
            </div>
          </div>

          <div className={Style.NFTCardTwo_box_img}>
            <Image
              className={Style.NFTCardTwo_box_img_img}
              src={el.image}
              alt="NFT"
              width={500}
              height={500}
              objectFit="cover"
            />
          </div>

          <div className={Style.NFTCardTwo_box_info}>
            <div className={Style.NFTCardTwo_box_info_left}>
              <LikeProfile />
              <p>{el.name}</p>
            </div>
            <small>4{i + 2}</small>
          </div>

          <div className={Style.NFTCardTwo_box_price}>
            <div className={Style.NFTCardTwo_box_price_box}>
              <small> Current Bid</small>
              <p>{el.price}</p>
            </div>
            <p className={Style.NFTCardTwo_box_price_stock}>
              <MdTimer />
              <span>{i + 1} hours left</span>
            </p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCardTwo;
