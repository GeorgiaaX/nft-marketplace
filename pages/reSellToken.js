import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

import Style from "../styles/resellToken.module.css";
import formStyle from "../accountPage/Form/Form.module.css";
import { Button } from "@/components/componentsindex";

import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";

const ResellToken = () => {

    const {createSale} = useContext(NFTMarketplaceContext)
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const router = useRouter(); 
    const {id, tokenURI} = router.query;

    const fetchNFT = async () => {
        if(!tokenURI) return;

        const {data} = await axios.get(tokenURI);

        // setPrice(data.price);
        setImage(data.image)
    };

    useEffect(() => {
        fetchNFT()
    }, [id]);

    const resell = async() => {
        try {
            await createSale(tokenURI, price, true, id);
            router.push("/author");
        } catch (error) {
            console.log(error)
        }
       
    }

  return (
    <div className={Style.resellToken}>
      <div className={Style.resellToken_box}>
        <h1>Resell your token, Set your price</h1>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="price">Price</label>
          <div className={formStyle.Form_box_input_box}>
            <input
              type="number"
              min={0.0000001}
              placeholder="Resell Price"
              className={formStyle.Form_box_input_username}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className={Style.resellToken_box_image}>
            {
                image && (
                    <Image src={image} alt="resell nft" width={400} height={400}/>
                )
            }
        </div>

        <div className={Style.resellToken_box_btn}>
            <Button btnName="resell NFT" handleClick={() => resell()} />
        </div>
      </div>
    </div>
  );
};

export default ResellToken;
