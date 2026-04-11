import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookProvider = ({children}) => {

    const [storedBooks, setStoredBooks] = useState([]);

    const handleMarkAsRead = (currentBook) =>{
        // step 1: store book id
        // step 2: where to store
        // step 2: array or collection
        // step 3: duplicate handle by showing toast
        // step 4: add the book to the array or collection
        // console.log(bookId);

        const isExistBook = storedBooks.find(book => book.bookId == currentBook.bookId)

        if(isExistBook){
            alert("Exist");
        }
        else{
            setStoredBooks([...storedBooks, currentBook]);
            alert(`${currentBook.bookName} is added`)
        }

    }

    const data = {
        storedBooks, setStoredBooks, handleMarkAsRead
    };

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;