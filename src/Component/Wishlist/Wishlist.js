import React from 'react';

const Wishlist = ({wishlist}) => {
  
   console.log(wishlist);
    return (
        <div>
            <h1>{wishlist.name}</h1>
        </div>
    );
};

export default Wishlist;