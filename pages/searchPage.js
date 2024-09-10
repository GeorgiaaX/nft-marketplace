import React, { useState, useEffect, useContext } from "react";

import Style from "../styles/searchPage.module.css";
import { Slider, Brand, Filter, Loader } from "../components/componentsindex";
import { SearchBar } from "@/searchPage/searchBarIndex";
import { NFTCardTwo, Banner } from "@/collectionPage/Collectionindex";
import images from "../img";

import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";

const searchPage = () => {

    const {fetchNFTs} = useContext(NFTMarketplaceContext);
    const [nfts, setNfts] = useState([]);
    const [nftsCopy, setNftsCopy] = useState([]);

    useEffect(() => {
      fetchNFTs()
      .then((item) => {
        setNfts(item.reverse());
        setNftsCopy(item);
      })
    }, [])

    const onHandleSearch = (value) => {
      const filteredNFTS = nfts.filter(({name}) => name.toLowerCase().includes(value.toLowerCase()))

      if (filteredNFTS.length === 0) {
        setNfts(nftsCopy);
      } else {
        setNfts(filteredNFTS);
      }
    }

    const onClearSearch = () => {
        if(nfts.length && nftsCopy.length) {
          setNfts(nftsCopy);
        }
    }

  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2}/>
      <SearchBar onHandleSearch={onHandleSearch} onClearSearch={onClearSearch}/>
      <Filter />
      {nfts.length == 0 ? <Loader /> : <NFTCardTwo NFTData={nfts}/>}
      <Slider />
      <Brand />
    </div>
  );
};

export default searchPage;
