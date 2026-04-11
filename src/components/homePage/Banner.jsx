import React from 'react';
import bannerBookImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[60vh] p-4 md:p-10 rounded-2xl my-10 w-10/11 md:w-9/11 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 w-full justify-between">
                <img
                    src={bannerBookImg}
                    className=" md:max-w-sm rounded-2xl p-1"
                />
                <div className='text-center lg:text-left'>
                    <h1 className="text-5xl leading-15 font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn btn-primary mt-8">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;