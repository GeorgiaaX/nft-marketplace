import React from "react";
import Link from "next/link";

import Style from "./Discover.module.css"

const Discover = () => {

  const discover = [
    {
      name: "Collection",
      link: "collection"
    }, {
      name: "Search",
      link: "search"
    }, {
      name: "Author Profile",
      link: "author"
    }, {
      name: "NFT Details",
      link: "NFT-details"
    }, {
      name: "Account Settings",
      link: "account-settings"
    }, {
      name: "Blog",
      link: "blog"
    }
  ];

  // Discover Navigation menu
  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;