// import React, { useState, useEffect, useContext } from "react";
// import web3Modal from "web3modal";
// import { ethers } from "ethers";
// import Router from "next/router";
// import axios from "axios";
// import { create as ipfsHttpClient } from "ipfs-http-client";

// const projectId = "45c73e5a547148aeb3d811c99233b6c7";
// const projectSecretKey = "b2cS6IaEUcdlVJtPQV/zf2UWWGynDkO3dpdPWe4jIGYMG0XkPXpImQ";
// const auth = `Basic${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
//   "base64"
// )}`;
// const subdomain = "";

// const client = ipfsHttpClient({
//   host: "infura-ipfs.io",
//   port: 5001,
//   protocol: "https",
//   headers: {
//     authorization: auth,
//   },
// });

// import { NFTMarketplaceABI, NFTMarketplaceAddress } from "./constants";

// const fetchContract = (signerOrProvider) =>
//   new ethers.Contract(
//     NFTMarketplaceABI,
//     NFTMarketplaceAddress,
//     signerOrProvider
//   );

// const connectingWithSmartContract = async () => {
//   try {
//     const web3Modal = new web3Modal();
//     const connection = await web3Modal.connect();
//     const provider = new ethers.providers.Web3Provider(connection);
//     const signer = provider.getSigner();
//     const contract = fetchContract(signer);
//     return contract;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const NFTMarketplaceContext = React.createContext();

// export const NFTMarketplaceProvider = ({ children }) => {
//   const [currentAccount, setCurrentAccount] = useState("");

//   const checkIfWalletConnected = async () => {
//     try {
//       if (!window.ethereum) return console.log("Install Metamask");

//       const accounts = await window.ethereum.request({
//         method: "eth_accounts",
//       });

//       if (accounts.length) {
//         setCurrentAccount(accounts[0]);
//       } else {
//         console.log("No account found");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     checkIfWalletConnected();
//   }, []);

//   const connectWallet = async () => {
//     try {
//       if (!window.ethereum) return console.log("Install Metamask");

//       const accounts = await window.ethereum.request({
//         method: "eth_requestAccounts",
//       });

//       setCurrentAccount(accounts[0]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const uploadToIPFS = async (file) => {
//     try {
//       const added = await client.add({ content: file });
//       const url = `${subdomain}/ipfs/${added.path}`;
//       return url;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const createNFT = async (formInput, fileUrl, router) => {
//     const { name, description, price } = formInput;
//     if (!name || !description || !price || !fileUrl)
//       return console.log("missing data");

//     const data = JSON.stringify({ name, description, image: fileUrl });

//     try {
//       const added = await client.add(data);

//       const url = `https://infura-ipfs.io/ipfs/${added.path}`;

//       await createSale(url, price);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const createSale = async (url, formInputPrice, isReselling, id) => {
//     try {
//       const price = ethers.utils.parseUnits(formInputPrice, "ether");
//       const contract = await connectingWithSmartContract();

//       const listingPrice = await contract.getListingPrice();

//       const transaction = !isReselling
//         ? await contract.createToken(url, price, {
//             value: listingPrice.toString(),
//           })
//         : await contract.reSellToken(url, price, {
//             value: listingPrice.toString(),
//           });

//       await transaction.wait();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchNFTs = async () => {
//     try {
//       const provider = new ethers.proivders.JSONRpcProvider();
//       const contract = fetchContract(provider);

//       const data = await contract.fetchMarketItem();

//       const items = await Promise.all(
//         data.map(
//           async ({ tokenId, seller, owner, price: unformattedPrice }) => {
//             const tokenURI = await contract.tokenURI(tokenId);

//             const {
//               data: { image, name, description },
//             } = await axios.get(tokenURI);
//             const price = ethers.utils.formatUnits(
//               unformattedPrice.toString(),
//               "ether"
//             );

//             return {
//               price,
//               tokenId: tokenId.toNumber(),
//               seller,
//               owner,
//               image,
//               name,
//               description,
//               tokenURI,
//             };
//           }
//         )
//       );

//       return items;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchMyNFTsOrListedNFTs = async (type) => {
//     try {
//       const contract = await connectingWithSmartContract();

//       const data =
//         type == "fetchItemsListed"
//           ? await contract.fetchItemsListed()
//           : await contract.fetchMyNFT();

//       const items = await Promise.all(
//         data.map(
//           async ({ tokenId, seller, owner, price: unformattedPrice }) => {
//             const tokenURI = await contract.tokenURI(tokenId);
//             const {
//               data: { image, name, description },
//             } = await axios.get(tokenURI);
//             const price = ethers.utils.formatUnits(
//               unformattedPrice.toString(),
//               "ether"
//             );

//             return {
//               price,
//               tokenId: tokenId.toNumber(),
//               seller,
//               owner,
//               image,
//               name,
//               description,
//               tokenURI,
//             };
//           }
//         )
//       );

//       return items;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const buyNFT = async (nft) => {
//     try {
//       const contract = await connectingWithSmartContract();
//       const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

//       const transaction = await contract.createMarketSale(nft.tokenId, {
//         value: price,
//       });

//       await transaction.wait();
//     } catch (error) {
//       console.log("Error while buying NFT");
//     }
//   };

//   const titleData = "Discover, collect and sell NFTS";
//   return (
//     <NFTMarketplaceContext.Provider
//       value={{
//         checkIfWalletConnected,
//         connectWallet,
//         uploadToIPFS,
//         createNFT,
//         createSale,
//         fetchNFTs,
//         fetchMyNFTsOrListedNFTs,
//         buyNFT,
//         currentAccount,
//         titleData,
//       }}
//     >
//       {children}
//     </NFTMarketplaceContext.Provider>
//   );
// };

import React, { useState, useEffect, createContext } from "react";
import { ethers } from "ethers";
import axios from "axios";
import { useRouter } from "next/router";
require("dotenv").config();

import { NFTMarketplaceABI, NFTMarketplaceAddress } from "./constants";

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
  );

const connectingWithSmartContract = async () => {
  try {
    // Check if window.ethereum is available (Metamask or another web3 wallet)
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider(window.ethereum);

      // Request wallet connection
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const signer = await provider.getSigner();
      const contract = fetchContract(signer); // Initialize contract with signer
      return contract;
    } else {
      console.log("Please install Metamask or another web3 wallet.");
    }
  } catch (error) {
    console.log("Error connecting with smart contract:", error);
  }
};

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const router = useRouter();

  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) return console.log("Install Metamask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install Metamask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadToIPFS = async (file) => {
    const formData = new FormData();
    formData.append("file", file); // Ensure the field is named 'file'

    try {
      const response = await fetch("/api/uploadFile", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        return data.url; // Return the IPFS URL from Pinata
      } else {
        console.error(data.error);
        return null;
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };

  const uploadMetadataToIPFS = async (metadata) => {
    try {
      const response = await fetch("/api/uploadMetadata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(metadata),
      });

      const data = await response.json();

      if (response.ok) {
        return data.url; // Return the metadata IPFS URL
      } else {
        console.error(data.error);
        return null;
      }
    } catch (error) {
      console.error("Error uploading metadata:", error);
      return null;
    }
  };

  const createNFT = async (name, price, image, description, router) => {
    if (!name || !description || !price || !image)
      return alert("Missing data. Please fill in all fields");

    try {
      // Step 1: Check if `image` is already an IPFS URL
      const imageUrl =
        typeof image === "string" && image.startsWith("https://")
          ? image
          : await uploadToIPFS(image);

      if (!imageUrl) return console.log("Failed to upload image");

      // Step 2: Prepare metadata with the uploaded image URL
      const metadata = {
        name,
        description,
        image: imageUrl,
      };

      // Step 3: Upload metadata to IPFS (or wherever necessary)
      const metadataUrl = await uploadMetadataToIPFS(metadata);
      if (!metadataUrl) return console.log("Failed to upload metadata");

      // Step 4: Create NFT with metadata URL and price
      await createSale(metadataUrl, price);
      router.push("/searchPage");
    } catch (error) {
      console.log("Error creating NFT:", error);
    }
  };

  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.parseUnits(formInputPrice, "ether");
      const contract = await connectingWithSmartContract();

      const listingPrice = await contract.getListingPrice();
      const formattedPrice = ethers.formatUnits(listingPrice, "ether");
      console.log("Formatted Listing Price: ", formattedPrice);

      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.reSellToken(id, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNFTs = async () => {
    try {
      const provider = new ethers.JsonRpcProvider(
        `https://eth-sepolia.g.alchemy.com/v2/s-oNeieULgcV0DmI0fdG_cgXLtVxJfRu`
      );
      const contract = fetchContract(provider);

      const data = await contract.fetchMarketItem();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );

            return {
              price,
              tokenId: Number(tokenId),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );

      return items;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNFTs();
  }, []);

  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {
      const contract = await connectingWithSmartContract();

      const data =
        type == "fetchItemsListed"
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFT();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );

            return {
              price,
              tokenId: Number(tokenId),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );

      return items;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyNFTsOrListedNFTs();
  }, [])

  const buyNFT = async (nft) => {
    try {
      const contract = await connectingWithSmartContract();
      const price = ethers.parseUnits(nft.price.toString(), "ether");

      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });

      await transaction.wait();
      router.push("/author")
    } catch (error) {
      console.log("Error while buying NFT");
    }
  };

  const titleData = "Discover, collect and sell NFTs";

  return (
    <NFTMarketplaceContext.Provider
      value={{
        checkIfWalletConnected,
        connectWallet,
        uploadToIPFS,
        createNFT,
        createSale,
        fetchNFTs,
        fetchMyNFTsOrListedNFTs,
        buyNFT,
        currentAccount,
        titleData,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
