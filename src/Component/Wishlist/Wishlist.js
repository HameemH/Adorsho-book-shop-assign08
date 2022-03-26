import React from 'react';
import './Wishlist.css'

const Wishlist = ({wishlist}) => {
  
    return (
        <div className='wishlist'>
            <p>{wishlist.name}</p>
            
        </div>
        
    );
};

export default Wishlist;