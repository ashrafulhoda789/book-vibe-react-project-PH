import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';
import ListedBook from './ListedBook';

const ListedWishList = () => {

    const { wishList } = useContext(BookContext);

    if(wishList.length === 0){
        return (
            <div className='h-[50vh] bg-gray-100 flex items-center justify-center my-10 rounded-2xl'>
                <h2 className='text-gray-600 font-bold text-3xl'>No wish list books found</h2>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-1 gap-6 my-10'>
            {
                wishList.map((book, index) => <ListedBook key={index} book={book}></ListedBook>)
            }
        </div>
    );
};

export default ListedWishList;