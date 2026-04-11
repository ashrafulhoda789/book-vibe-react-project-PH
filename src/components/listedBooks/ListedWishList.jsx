import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';

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
        <div>
            {
                wishList.map((book, index) => <BookCard key={index} book={book}></BookCard>)
            }
        </div>
    );
};

export default ListedWishList;