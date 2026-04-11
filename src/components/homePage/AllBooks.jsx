import React, { use } from 'react';
import BookCard from '../ui/BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
    const books = use(booksPromise);
    // console.log(books);
    return (
        <div className='my-10 w-10/12 mx-auto'>
            <h2 className='font-bold text-4xl text-center mb-10'>BOOKS</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    books.map(book =>
                        <BookCard key={book.bookId} book={book}></BookCard>
                    )
                }
            </div>
        </div>
    );
};

export default AllBooks;