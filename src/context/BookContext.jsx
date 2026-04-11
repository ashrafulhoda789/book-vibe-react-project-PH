import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({children}) => {

    const [storedBooks, setStoredBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) =>{
        // step 1: store book id
        // step 2: where to store
        // step 2: array or collection
        // step 3: duplicate handle by showing toast
        // step 4: add the book to the array or collection
        // console.log(bookId);

        // const isExistInWishList = wishList.find(book => book.bookId == currentBook.bookId);

        // if(isExistInWishList){
        //     toast('This book already in Wish list');
        //     return;
        // }

        const isExistBook = storedBooks.find(book => book.bookId == currentBook.bookId)

        if(isExistBook){
            toast.warn('The book is already exist in Read List');
        }
        else{
            setStoredBooks([...storedBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added to Read List`)
        }

    }

    const handleWishList = (currentBook) =>{
        // step 1: store book id
        // step 2: where to store
        // step 2: array or collection
        // step 3: duplicate handle by showing toast
        // step 4: add the book to the array or collection
        // console.log(bookId);

        const isExistInReadList = storedBooks.find(book => book.bookId == currentBook.bookId);

        if(isExistInReadList){
            toast('This book already in Read list');
            return;
        }

        const isExistBook = wishList.find(book => book.bookId == currentBook.bookId)

        if(isExistBook){
            toast.warn('The book is already exist in Wish List');
        }
        else{
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added`)
        }

    }

    const data = {
        storedBooks, setStoredBooks, handleMarkAsRead,
        wishList, setWishList, handleWishList
    };

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;