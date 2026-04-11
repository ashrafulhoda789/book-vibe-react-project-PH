import React from 'react';
import Banner from '../../components/homePage/Banner';
import AllBooks from '../../components/homePage/AllBooks';
import { BookContext } from '../../context/BookContext';

const HomePage = () => {

    // const bookContext = useContext(BookContext);
    // console.log(bookContext);
    return (
        <div>
            <Banner></Banner>
            <AllBooks></AllBooks>
        </div>
    );
};

export default HomePage;