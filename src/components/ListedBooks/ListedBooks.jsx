import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredRead, getStoredWishlist } from "../../utility/localstorage";
import ShowBook from "../ShowBook/ShowBook";

const ListedBooks = () => {
    const books = useLoaderData();

    const [readBook, setReadBook] = useState([]);
    const [wishlistBook, setWishlistBook] = useState([]);
    const [sortOption, setSortOption] = useState("");

    useEffect(() => {
        const storedReadBookId = getStoredRead();
        if (books.length > 0) {
            const readBooks = books.filter(book => storedReadBookId.includes(book.bookId));
            setReadBook(readBooks);
        }
    }, [books]);

    useEffect(() => {
        const storedWishlistBookId = getStoredWishlist();
        if (books.length > 0) {
            const wishlistBooks = books.filter(book => storedWishlistBookId.includes(book.bookId));
            setWishlistBook(wishlistBooks);
        }
    }, [books]);

    useEffect(() => {
        const sortBooks = (books) => {
            switch (sortOption) {
                case "Rating":
                    return books.sort((a, b) => b.rating - a.rating);
                case "Number of pages":
                    return books.sort((a, b) => b.totalPages - a.totalPages);
                case "Publisher year":
                    return books.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
                default:
                    return books;
            }
        };

        setReadBook(prevReadBook => sortBooks([...prevReadBook]));
        setWishlistBook(prevWishlistBook => sortBooks([...prevWishlistBook]));
    }, [sortOption]);

    return (
        <div className="container md:mx-auto">
            <div className="bg-[#F3F3F3] py-8 rounded-lg text-center mb-8">
                <h2 className="work-sans-font font-bold text-3xl">Books</h2>
            </div>

            <div className="text-center mb-8">
                <select
                    className="select select-md bg-[#23BE0A] text-white work-sans-font text-[18px] font-semibold"
                    onChange={(e) => setSortOption(e.target.value)}
                    value={sortOption}
                >
                    <option selected>Sort By</option>
                    <option value="Rating">Rating</option>
                    <option value="Number of pages">Number of pages</option>
                    <option value="Publisher year">Publisher year</option>
                </select>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <input
                    type="radio"
                    id="read-books"
                    name="my_tabs"
                    role="tab"
                    className="tab text-xl"
                    aria-label="Read Books"
                    defaultChecked
                />
                <div role="tabpanel" className="tab-content border-base-300 border-b-0 border-s-0 border-e-0">
                    {readBook.map(read => <ShowBook read={read} key={read.bookId}></ShowBook>)}
                </div>

                <input
                    type="radio"
                    id="wishlist-books"
                    name="my_tabs"
                    role="tab"
                    className="tab text-xl"
                    aria-label="Wishlist Books"
                />
                <div role="tabpanel" className="tab-content border-base-300 border-b-0 border-s-0 border-e-0">
                    {wishlistBook.map(read => <ShowBook read={read} key={read.bookId}></ShowBook>)}
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
