import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Book.css'
const Book = (props) => {
    const {handleWishlist, book} = props;
    const {id, name, image, price} = book;
    return (
        <div className='book-card'>
            <img src={image} alt=""/>
            <div className="book-info">
                <h3>Name:{name}</h3>
                <p>Price:${price}</p>
            </div>
            <button onClick={() => handleWishlist(book)} className='btn-wishlist'>Add to Booklist <FontAwesomeIcon icon={faBook}></FontAwesomeIcon></button>
        </div>
    );
};

export default Book;