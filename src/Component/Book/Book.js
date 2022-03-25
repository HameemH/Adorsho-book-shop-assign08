import React from 'react';
import './Book.css'
const Book = (props) => {
    console.log(props.book);
    const {id, name, image, price} = props.book;
    return (
        <div className='book-card'>
            <img src={image} alt="" />
        </div>
    );
};

export default Book;