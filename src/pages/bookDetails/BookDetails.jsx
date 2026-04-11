import React, { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';



// const booksPromise = fetch('/booksData.json').then(res => res.json());

const BookDetails = () => {
    const { bookId } = useParams(); // routes e dynamic Id jeta dibo useParams eo distracturing korar somoy same id name dithe hobe

    // const books = use(booksPromise);

    const books = useLoaderData();

    const expectedBook = books.find(book => book.bookId == bookId);
    // console.log(expectedBook);
    const { image, bookName, author, category, review, yearOfPublishing, publisher, tags, rating, totalPages } = expectedBook;

    const {handleMarkAsRead, handleWishList} = useContext(BookContext);
    // console.log(storedBooks);

    return (
        <div className="card lg:card-side bg-base-100 shadow-sm w-11/12 md:w-10/12 mx-auto my-20">
            <figure className='bg-gray-50 p-6 m-6 flex-1 rounded-2xl'>
                <img
                    src={image}
                    className='h-100 md:h-150 w-70 md:w-100 rounded-sm'
                    alt={bookName} />
            </figure>
            <div className="card-body flex-1">
                <h2 className="card-title text-3xl font-bold">{bookName}</h2>
                <p className='font-semibold text-xl'>By: {author}</p>
                <div className='divider'></div>
                <p className='font-bold text-lg text-gray-500'>{category}</p>

                <div className='divider mt-0'></div>

                <p><span className='font-bold'>Review:</span> {review}</p>
                <div className='flex gap-3 items-center'>
                    <h2 className='font-bold'>Tag: </h2>
                    {tags.map((tag, index) => <div key={index} className="badge text-green-500 bg-gray-100 font-bold">{tag}</div>)}
                </div>

                <div className='divider'></div>

                <div className="space-y-5">
                    <div className='flex gap-40 items-center'>
                        <div className='flex flex-col gap-5'>
                            <span>Number of Pages: </span>
                            <span>Publisher: </span>
                            <span>Year of Publishing: </span>
                            <span>Rating: </span>
                        </div>

                        <div  className='flex flex-col gap-5'>
                            <span className='font-bold'>{totalPages}</span>
                            <span className='font-bold'>{publisher}</span>
                            <span className='font-bold'>{yearOfPublishing}</span>
                            <span className='font-bold'>{rating}</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <button onClick={() => handleMarkAsRead(expectedBook)} className="btn">Mark as Read</button>
                        <button onClick={() => handleWishList(expectedBook)} className="btn btn-accent text-white">Add To Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;