
import React from "react";
import { DiscoverButton } from "./Discover.style";

export const DiscoverMore = () => {
    return (
        <DiscoverButton className="mt-8 ">
<a className='animated-arrow flex justify-start items-center'>
    <span className='the-arrow -left'>
      <span className='shaft '></span>
    </span>
    <span className='main '>
      <span className='text hover:m-12' style={{}}>
        Discover More
      </span>
     <span className='the-arrow -right'>
      <span className='shaft'></span>
    </span>
    </span>
  </a>
 </DiscoverButton>
    );
};
