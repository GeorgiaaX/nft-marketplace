import React from "react";

import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  Slider,
  FollowerTab,
} from "@/components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading="Audio Collection"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <AudioLive />
      <Title
        heading="New Collection"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <FollowerTab />
      <Title
        heading="Explore NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <Filter />
      <NFTCard />
      <Title
        heading="Browse By Category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;
