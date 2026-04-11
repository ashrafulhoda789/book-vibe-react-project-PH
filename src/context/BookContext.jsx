import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, addWishListToLocalDB, getAllReadListFromLocalDB, getAllWishListFromLocalDB } from '../utilities/localDB';

export const BookContext = createContext();

const BookProvider = ({children}) => {

    const [readList, setReadList] = useState(() => getAllReadListFromLocalDB());
    const [wishList, setWishList] = useState(() => getAllWishListFromLocalDB());

    // useEffect(()=>{
    //     const getReadList = getAllReadListFromLocalDB();
    //     console.log(getReadList);
    //     setReadList(getReadList);
    // }, [])

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

        const isExistBook = readList.find(book => book.bookId == currentBook.bookId)

        if(isExistBook){
            toast.warn('The book is already exist in Read List');
        }
        else{
            addReadListToLocalDB(currentBook);
            setReadList([...readList, currentBook]);
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

        

        const isExistInReadList = readList.find(book => book.bookId == currentBook.bookId);

        if(isExistInReadList){
            toast('This book already in Read list');
            return;
        }

        const isExistBook = wishList.find(book => book.bookId == currentBook.bookId)

        if(isExistBook){
            toast.warn('The book is already exist in Wish List');
        }
        else{
            addWishListToLocalDB(currentBook);
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to wish list`)
        }

    }

    const data = {
        readList, setReadList, handleMarkAsRead,
        wishList, setWishList, handleWishList
    };

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;