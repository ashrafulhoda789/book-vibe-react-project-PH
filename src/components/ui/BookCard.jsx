import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
            <figure className='p-6 bg-gray-50 m-6 rounded-2xl'>
                <img
                    className=' h-62.5 w-45 rounded-sm'
                    src={book.image}
                    alt={book.bookName} />
            </figure>
            <div className="card-body">
                <div className='flex gap-3 items-center'>
                    {book.tags.map((tag, index) => <div key={index} className="badge text-green-500 bg-gray-100 font-bold">{tag}</div>)}
                </div>
                <h2 className="card-title text-2xl">
                    {book.bookName}
                </h2>
                <p className='font-semibold text-lg'>By: {book.author}</p>

                <div className="divider"></div>

                <div className='card-actions justify-between text-xl '>
                    <div className="font-semibold">{book.category}</div>
                    <div className="font-semibold flex items-center gap-1">{book.rating} <FaRegStar /></div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;