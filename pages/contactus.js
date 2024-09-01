// import React from "react";
// import {
//   TiSocialFacebook,
//   TiSocialLinkedin,
//   TiSocialTwitter,
//   TiSocialYoutube,
//   TiSocialInstagram,
// } from "react-icons/ti";
// import { HiOutlineMail } from "react-icons/hi";

// import Style from "../styles/contactUs.module.css";
// import formStyle from "../accountPage/Form/Form.module.css";
// import { Button } from "@/components/componentsindex";

// const ContactUs = () => {
//   return (
//     <div className={Style.contactUs}>
//       <div className={Style.contactUs_box}>
//         <h1>Contact</h1>
//       </div>
//       <div className={Style.contactUs_box_box}>
//         <div className={Style.contactUs_box_box_left}>
//           <div className={Style.contactUs_box_box_left_item}>
//             <h3>Address</h3>
//             <p>lorem ipsum text</p>
//           </div>
//           <div className={Style.contactUs_box_box_left_item}>
//             <h3>Email</h3>
//             <p>lorem ipsum text</p>
//           </div>
//           <div className={Style.contactUs_box_box_left_item}>
//             <h3>Phone</h3>
//             <p>lorem ipsum text</p>
//           </div>
//           <div className={Style.contactUs_box_box_left_item}>
//             <h3>Socials</h3>
//             <a href="#">
//                 <TiSocialFacebook />
//             </a>
//             <a href="#">
//                 <TiSocialTwitter />
//             </a>
//             <a href="#">
//                 <TiSocialInstagram />
//             </a>
//             <a href="#">
//                 <TiSocialLinkedin />
//             </a>
//             <a href="#">
//                 <TiSocialYoutube />
//             </a>
//           </div>
//         </div>
//         <div className={formStyle.contactUs_box_box_right}>
//             <form>

//             <div className={formStyle.Form_box_input}>
//             <label htmlFor="name">Full name</label>
//             <div className={formStyle.Form_box_input_box}>
//               <input
//                 type="text"
//                 placeholder="shoaib Bhai"
//                 className={formStyle.Form_box_input_username}
//               />
//             </div>
//           </div>

//           <div className={formStyle.Form_box_input}>
//             <label htmlFor="email">Email</label>
//             <div className={formStyle.Form_box_input_box}>
//               <div className={formStyle.Form_box_input_box_icon}>
//                 <HiOutlineMail />
//               </div>
//               <input type="text" placeholder="Email" />
//             </div>
//           </div>

//           <div className={formStyle.Form_box_input}>
//             <label htmlFor="description">Message</label>
//             <textarea
//               name=""
//               id=""
//               cols="30"
//               rows="6"
//               placeholder="send us a message"
//             ></textarea>
//           </div>
//               <Button btnName="Send Message" handleClick={() => {}} classStyle={Style.button}/>
//             </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;


import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import Style from "../styles/contactUs.module.css";
import formStyle from "../accountPage/Form/Form.module.css";
import { Button } from "@/components/componentsindex";

const ContactUs = () => {
  return (
    <div className={Style.contactUs}>
      <div className={Style.contactUs_box}>
        <h1>Contact</h1>
      </div>
      <div className={Style.contactUs_box_box}>
        <div className={Style.contactUs_box_box_left}>
          <div className={Style.contactUs_box_box_left_item}>
            <h3>
              <span role="img" aria-label="address">
                <FaMapMarkerAlt /> {" "}
              </span>
              Address
            </h3>
            <p>lorem ipsum text</p>
          </div>
          <div className={Style.contactUs_box_box_left_item}>
            <h3>
              <span role="img" aria-label="email">
                <HiOutlineMail />  {" "}
              </span>
              Email
            </h3>
            <p>lorem ipsum text</p>
          </div>
          <div className={Style.contactUs_box_box_left_item}>
            <h3>
              <span role="img" aria-label="phone">
                <FaPhoneAlt />  {" "}
              </span>
              Phone
            </h3>
            <p>lorem ipsum text</p>
          </div>
          <div className={Style.contactUs_box_box_left_item}>
            <h3>
              <span role="img" aria-label="socials">  {" "}
                🌐
              </span>
              Socials
            </h3>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>
        <div className={formStyle.contactUs_box_box_right}>
          <form>
            <div className={formStyle.Form_box_input}>
              <label htmlFor="name">Full name</label>
              <div className={formStyle.Form_box_input_box}>
                <input
                  type="text"
                  placeholder="shoaib Bhai"
                  className={formStyle.Form_box_input_username}
                />
              </div>
            </div>

            <div className={formStyle.Form_box_input}>
              <label htmlFor="email">Email</label>
              <div className={formStyle.Form_box_input_box}>
                <div className={formStyle.Form_box_input_box_icon}>
                  <HiOutlineMail />
                </div>
                <input type="text" placeholder="Email" />
              </div>
            </div>

            <div className={formStyle.Form_box_input}>
              <label htmlFor="description">Message</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="6"
                placeholder="send us a message"
              ></textarea>
            </div>
            <Button
              btnName="Send Message"
              handleClick={() => {}}
              classStyle={Style.button}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
