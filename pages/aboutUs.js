import React from "react";
import Image from "next/image";

import Style from "../styles/aboutUs.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const AboutUs = () => {
  const founderArray = [
    {
      name: "John Doe",
      position: "Co-founder and Chief Execute",
      image: images.user1,
    },
    {
      name: "John Doe",
      position: "Co-founder and Chief Execute",
      image: images.user2,
    },
    {
      name: "John Doe",
      position: "Co-founder and Chief Execute",
      image: images.user3,
    },
    {
      name: "John Doe",
      position: "Co-founder and Chief Execute",
      image: images.user4,
    },
  ];

  const factsArray = [
    {
      title: "10 million",
      info: "Articles have been public around the world"
    },  {
      title: "100,000",
      info: "Articles have been public around the world"
    },  {
      title: "220+",
      info: "Articles have been public around the world"
    }
  ]
  return (
    <div className={Style.aboutUs}>
      <div className={Style.aboutUs_box}>
        <div className={Style.aboutUs_box_hero}>
          <div className={Style.aboutUs_box_hero_left}>
            <h1>About us</h1>
            <p> LOREM ipsum </p>
          </div>

          <div className={Style.aboutUs_box_hero_right}>
            <Image src={images.hero} 
            width={400}
            height={400}
            />
          </div>
        </div>

        <div className={Style.aboutUs_box_title}>
          <h2>Founder</h2>
          <p>lorem ipsum</p>
        </div>

        <div className={Style.aboutUs_box_founder}>
          <div className={Style.aboutUs_box_founder_box}>
            {founderArray.map((el, i) => (
                <div className={Style.aboutUs_box_founder_box_img}>
                   <Image src={el.image} alt={el.name} 
                   className={Style.aboutUs_box_founder_box_img_img}/> 
                   <h3>{el.name}</h3>
                   <p>{el.position}</p>
                </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutUs_box_title}>
          <h2>Fast Facts</h2>
          <p>We're impartial and independent,and every day we create distinctive, world-class programmes and content</p>
        </div>

        <div className={Style.aboutUs_box_facts}>
        <div className={Style.aboutUs_box_facts_box}>
          { factsArray.map((el, i) => (
            <div className={Style.aboutUs_box_facts_box_info}>
              <h3>{el.title}</h3>
              <p>{el.info}</p>
            </div>
          ))

          }
        </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default AboutUs;
