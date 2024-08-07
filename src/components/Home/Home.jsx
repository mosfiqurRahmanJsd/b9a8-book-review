
import Hero from "../Hero/Hero";
import Book from "../Book/Book";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";








const Home = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    return (
        <>
            <Hero></Hero>

            <div className="container md:mx-auto pb-24">
                <h2 className="text-center mb-9 text-[#131313] playfair-display-font text-[40px] font-bold">Books</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        books.map((book) => <Book book={book} key={book.bookId}></Book>)
                    }
                </div>
            </div>
        </>
    );
};

Home.propTypes = {
    books: PropTypes.object,
}

export default Home;