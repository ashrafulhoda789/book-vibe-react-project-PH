import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const Books = () => {
    const { storedBooks, wishList } = useContext(BookContext);
    console.log(storedBooks, wishList);

    return (
        <div className='w-10/12 mx-auto'>
            <h2>Read List: {storedBooks.length}</h2>
            <h2>Wish List: {wishList.length}</h2>
        </div>
    );
};

export default Books;