
import React from "react";
import { DiscoverButton } from "./Discover.style";

export const DiscoverMore = () => {
    return (
        <DiscoverButton className="mt-8">
<a className='animated-arrow flex justify-start items-center'>
    <span className='the-arrow -left hover:m-12'>
      <span className='shaft hover:m-12'></span>
    </span>
    <span className='main hover:m-12'>
      <span className='text hover:m-12'>
        Discover More
      </span>
     <span className='the-arrow -right hover:hidden'>
      <span className='shaft'></span>
    </span>
    </span>
  </a>
 </DiscoverButton>
    );
};
