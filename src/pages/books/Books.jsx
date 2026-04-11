import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const Books = () => {
    const { handleMarkAsRead, storedBooks } = useContext(BookContext);
    console.log(storedBooks);
    
    return (
        <div>
            <h2>Books</h2>
        </div>
    );
};

export default Books;