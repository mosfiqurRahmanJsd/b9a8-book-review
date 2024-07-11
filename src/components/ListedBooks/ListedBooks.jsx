import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredRead } from "../../utility/localstorage";
import ReadBook from "../ReadBook/ReadBook";


const ListedBooks = () => {
    const books = useLoaderData()

    const [readBook, setReadBook] = useState([]);

    useEffect(() => {
        const storedReadBookId = getStoredRead();
        if (books.length > 0) {
            const readBooks = books.filter(book => storedReadBookId.includes(book.bookId))
            setReadBook(readBooks);
        }
    }, [])


    return (
        <div className="container md:mx-auto">
            <div className="bg-[#F3F3F3] py-8 rounded-lg text-center mb-8">
                <h2 className="work-sans-font font-bold text-3xl">Books</h2>
            </div>

            <div className="text-center">
                <select className="select select-md bg-[#23BE0A] text-white work-sans-font text-[18px] font-semibold">
                    <option disabled selected>Sort By</option>
                    <option>Normal Apple</option>
                    <option>Normal Orange</option>
                    <option>Normal Tomato</option>
                </select>
            </div>

            <div role="tablist" className="tabs tabs-lifted">


                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-xl"
                    aria-label="Read Books "
                    defaultChecked />
                <div role="tabpanel" className="tab-content  border-base-300 border-b-0 border-s-0 border-e-0  ">

                    {
                        readBook.map(read => <ReadBook read={read} key={read.bookId}></ReadBook>)
                    }
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-xl "
                    aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content  border-base-300 border-b-0 border-s-0 border-e-0  ">
                    Bokfndfjhkdjf
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;