// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

// import Style from "./Slider.module.css";
// import SliderCard from "./SliderCard/SliderCard";

// const Slider = () => {
//   const sliderArray = [1, 2, 3, 4, 5, 6];
//   const [width, setWidth] = useState(0);
//   const dragSlider = useRef();

//   useEffect(() => {
//     setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
//   });

//   const handleScroll = (direction) => {
//     const { current } = dragSlider;
//     const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
  
//     if (direction == "left") {
//       console.log(current.scrollLeft)
//       current.scrollLeft -= scrollAmount;
//     } else {
//       current.scrollLeft += scrollAmount;
//       console.log(current.scrollLeft)

//     }
//   };

//   return (
//     <div className={Style.slider}>
//       <div className={Style.slider_box}>
//         <h2>Explore NFTs video</h2>
//         <div className={Style.slider_box_button}>
//           <p>Click on play icon and enjoy NFTs</p>
//           <div className={Style.slider_box_button_btn}>
//             <div
//               className={Style.slider_box_button_btn_icon}
//               onClick={() => handleScroll("left")}
//             >
//               <TiArrowLeftThick />
//             </div>
//             <div
//               className={Style.slider_box_button_btn_icon}
//               onClick={() => handleScroll("right")}
//             >
//               <TiArrowRightThick />
//             </div>
//           </div>
//         </div>

//         <motion.div className={Style.slider_box_items} ref={dragSlider}>
//           <motion.div
//           ref={dragSlider}
//             className={Style.slider_box_item}
//             drag="x"
//             dragConstraints={{ right: 0, left: -width }}
//           >
//             {sliderArray.map((el, i) => (
//               <SliderCard key={i + 1} el={el} i={i} />
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Slider;


// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

// import Style from "./Slider.module.css";
// import SliderCard from "./SliderCard/SliderCard";

// const Slider = () => {
//   const sliderArray = [1, 2, 3, 4, 5, 6];
//   const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
//   const dragSlider = useRef();

//   useEffect(() => {
//     if (dragSlider.current) {
//       const containerWidth = dragSlider.current.offsetWidth;
//       const contentWidth = dragSlider.current.scrollWidth;

//       const cardWidth = dragSlider.current.querySelector(`.${Style.slider_box_item}`).firstChild.offsetWidth;

//       const rightConstraint = containerWidth - contentWidth + cardWidth;

//       setDragConstraints({ left: 0, right: rightConstraint });
//     }
//   }, [dragSlider]);

//   const handleScroll = (direction) => {
//     const { current } = dragSlider;
//     const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

//     if (current) {
//       if (direction === "left") {
//         current.scrollLeft -= scrollAmount;
//       } else {
//         current.scrollLeft += scrollAmount;
//       }
//     }
//   };

//   return (
//     <div className={Style.slider}>
//       <div className={Style.slider_box}>
//         <h2>Explore NFTs video</h2>
//         <div className={Style.slider_box_button}>
//           <p>Click on play icon and enjoy NFTs</p>
//           <div className={Style.slider_box_button_btn}>
//             <div
//               className={Style.slider_box_button_btn_icon}
//               onClick={() => handleScroll("left")}
//             >
//               <TiArrowLeftThick />
//             </div>
//             <div
//               className={Style.slider_box_button_btn_icon}
//               onClick={() => handleScroll("right")}
//             >
//               <TiArrowRightThick />
//             </div>
//           </div>
//         </div>

//         <motion.div className={Style.slider_box_items} ref={dragSlider}>
//           <motion.div
//             className={Style.slider_box_item}
//             drag="x"
//             dragConstraints={dragConstraints}
//           >
//             {sliderArray.map((el, i) => (
//               <SliderCard key={i + 1} el={el} i={i} />
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Slider;



import React, { useRef } from "react";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

import Style from "./Slider.module.css";
import SliderCard from "./SliderCard/SliderCard";

const Slider = () => {
  const sliderArray = [1, 2, 3, 4, 5, 6];
  const dragSlider = useRef();

  const handleScroll = (direction) => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (current) {
      if (direction === "left") {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className={Style.slider}>
      <div className={Style.slider_box}>
        <h2>Explore NFTs video</h2>
        <div className={Style.slider_box_button}>
          <p>Click on play icon and enjoy NFTs</p>
          <div className={Style.slider_box_button_btn}>
            <div
              className={Style.slider_box_button_btn_icon}
              onClick={() => handleScroll("left")}
            >
              <TiArrowLeftThick />
            </div>
            <div
              className={Style.slider_box_button_btn_icon}
              onClick={() => handleScroll("right")}
            >
              <TiArrowRightThick />
            </div>
          </div>
        </div>

        <div className={Style.slider_box_items} ref={dragSlider}>
          <div className={Style.slider_box_item}>
            {sliderArray.map((el, i) => (
              <SliderCard key={i + 1} el={el} i={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

