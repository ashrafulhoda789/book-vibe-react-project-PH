import React from 'react';
import { BookContext } from '../../context/BookContext';
import { Link } from 'react-router';
import { FaBookOpen, FaRegStar, FaUserFriends } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';

const ListedBook = ({book}) => {

     const { image, bookName, author, category, yearOfPublishing, publisher, tags, rating, totalPages } = book;

    return (
        <div className="card bg-base-100 shadow-sm md:flex-row">
            <figure className='p-6 bg-gray-50 m-6 rounded-2xl'>
                <img
                    className=' h-62.5 w-45 rounded-sm'
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body">

                <h2 className="card-title text-2xl">
                    {bookName}
                </h2>
                <p className='font-semibold text-lg'>By: {author}</p>

                <div className='flex gap-3 items-center'>
                    <h2 className='font-bold text-lg'>Tag</h2>
                    {tags.map((tag, index) => <div key={index} className="badge text-green-500 bg-gray-100 font-bold">{tag}</div>)}
                </div>
                
                <div className='flex gap-2 mt-5 flex-wrap'>
                    <p className='flex items-center gap-1.5 font-semibold text-lg text-gray-600'> <FaUserFriends></FaUserFriends> Publisher: {publisher}</p>
                    <p className='flex items-center gap-1.5 font-semibold text-lg text-gray-600'> <CiLocationOn></CiLocationOn> Year of Publishing: {yearOfPublishing}</p>
                    <p className='flex items-center gap-1.5 font-semibold text-lg text-gray-600'><FaBookOpen></FaBookOpen> Page {totalPages}</p>
                </div>
                
                
                <div className="divider"></div>

                <div className='card-actions gap-5 items-center text-xl '>
                    <div className="font-medium text-[16px] px-3 py-2 rounded-2xl bg-[#328EFF]/15 text-[#328EFF]/90">Category: {category}</div>
                    <div className="font-medium text-[16px] px-3 py-2 rounded-2xl bg-[#FFAC33]/15 text-[#FFAC33]">Rating: {rating} </div>
                    <Link to={`/bookDetails/${book.bookId}`} className='btn rounded-full btn-success text-white'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;