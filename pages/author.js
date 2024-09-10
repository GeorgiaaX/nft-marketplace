import React, { useState, useEffect, useContext } from "react";

import Style from "../styles/author.module.css";
import { Banner, NFTCardTwo } from "../collectionPage/Collectionindex";
import { Brand, Title } from "../components/componentsindex";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import {
  AuthorProfileCard,
  AuthorTaps,
  AuthorNFTCardBox,
} from "../authorPage/componentsIndex";
import images from "../img";

import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";

const author = () => {
  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground4,
      user: images.user7,
    },
  ];
  const [collectables, setCollectables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(NFTMarketplaceContext);

  const [nfts, setNfts] = useState([]);
  const [myNfts, setMyNfts] = useState([]);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
      setNfts(items);
    })
  }, [])

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchMyNFTs").then((items) => {
      setMyNfts(items);
    })
  }, [])

  return (
    <div className={Style.author}>
      <Banner bannerImage={images.creatorbackground10} />
      <AuthorProfileCard currentAccount={currentAccount}/>
      <AuthorTaps
        setCollectables={setCollectables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorNFTCardBox
        collectables={collectables}
        created={created}
        like={like}
        follower={follower}
        following={following}
        nfts={nfts}
        myNfts={myNfts}
      />
      <Title
        heading="Popular Creators"
        paragraph="Click on music icon and enjoy NFT music or audio"
      />

      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard key={i + 1} i={i} el={el} />
        ))}
      </div>
      <Brand />
    </div>
  );
};

export default author;
