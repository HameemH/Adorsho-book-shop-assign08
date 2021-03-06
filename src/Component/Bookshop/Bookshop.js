import React, { useState } from 'react';
import Book from '../Book/Book';
import Wishlist from '../Wishlist/Wishlist';
import './Bookshop.css';



const Bookshop = () => {
    const Books = [
        {id:1, name: 'The Psychology of Money', price:10, image:'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80'},
        {id:2, name: 'Milk and Honey', price:10, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},
        {id:3, name: 'How Innovation Works', price:10, image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80'},
        {id:4, name: 'Narnia', price:10, image: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=390&q=80'},
        {id:5, name: 'Pic of Dorian Gray', price:10, image: 'https://images.unsplash.com/photo-1633477189729-9290b3261d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80'},
        {id:6, name: 'White Canvas', price:10, image: 'https://images.unsplash.com/photo-1519764340700-3db40311f21e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80'},
        {id:7, name: 'Storytelling Workbook', price:10, image: 'https://images.unsplash.com/photo-1612969308146-066d55f37ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
        {id:8, name: 'The Two Towers', price:10, image: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'},
        {id:9, name: 'Design Anthology', price:10, image: 'https://images.unsplash.com/photo-1542871793-fd7e2b3cd0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80'},
        
    ];
    const [wishlist, setWishlist] = useState([])
    const [randomlist, setrandomlist] = useState([])
    console.log(randomlist);
    const handleWishlist = (book) =>{
       const newWishlist = [...wishlist, book];
       setWishlist(newWishlist)
    }
    console.log(wishlist);
    function randomNumber(min=0 , max) {
        return Math.floor(Math.random() * max);
      }
    const handleRandomFromWishlist = (wishlist) =>{
      const randomNumberBook = randomNumber(0, wishlist.length);
      const randomBookList = []
       const newRandomBookList = wishlist[randomNumberBook];
       randomBookList.push(newRandomBookList)
         setrandomlist(randomBookList);
         console.log(randomBookList);
    } 
    const handleChoseAgain =() =>{
        setWishlist([])
        setrandomlist([]);
    }
    
    return (
        <div className='bookshop-container'>
            <div className="book-container">
            {
                Books.map(book => <Book key={book.id} book={book} handleWishlist={handleWishlist}></Book>)
            }
            </div>
            <div className='booklist-conatianer'>
                <h1>Wishlist</h1>
            {wishlist.map(book =><Wishlist key={book.id} wishlist={book}></Wishlist>)}
                <div>
                    <button onClick={()=>handleRandomFromWishlist(wishlist)} className="buttons">Chose 1 for me</button>
                    <button  onClick={() =>handleChoseAgain()} className="buttons">Chose again</button>
                </div>
                <div className='randomBook'>
                    {
                        randomlist.map(book => <p>{book.name}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookshop;