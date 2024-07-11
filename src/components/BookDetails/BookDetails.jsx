import { useLoaderData } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveToRead, saveToWishlist } from "../../utility/localstorage";



const BookDetails = () => {


    const books = useLoaderData();

    const { bookId, image, bookName, tags, author, category, rating, review, totalPages, publisher, yearOfPublishing } = books;


    const handleReadBtn = () => {
        saveToRead(bookId);
    }

    const handleWishlistBtn = () => {
        saveToWishlist(bookId);
    }

    return (
        <section className="container md:mx-auto flex items-center md:flex-row flex-col  gap-12 mb-14">
            <div className="bg-[#F3F3F3] p-20 rounded-2xl md:w-1/2 flex justify-center ">
                <img className="w-2/3" src={image} alt="" />
            </div>
            <div className="md:w-1/2">
                <h2 className="playfair-display-font text-5xl font-bold mb-5">{bookName}</h2>
                <h5 className="work-sans-font font-medium text-2xl text-[#424242] mb-6">By: {author}</h5>
                <hr />
                <p className="my-5 work-sans-font text-xl font-medium text-[#424242]">{category}</p>
                <hr />
                <p className="mt-6 work-sans mb-6 leading-7 text-[16px]"> <span className="font-black">Review:</span> {review}</p>
                <p className="work-sans-font text-[16px] mb-6 text-[#23BE0A]"> <span className="font-bold text-black">Tag:</span> <span className="bg-[#F4FCF3] px-4 py-2 font-medium rounded-full">#{tags[0]}</span> <span className="bg-[#F4FCF3] px-4 py-2 font-medium rounded-full">#{tags[1]}</span></p>
                <hr />
                <p className="mt-6 text-[#131313] leading-7 mb-3">Number of Pages: <span className="font-semibold ms-16">{totalPages}</span></p>
                <p className="text-[#131313] leading-7 mb-3 ">Publisher: <span className="font-semibold ms-[120px]">{publisher}</span></p>
                <p className="text-[#131313] leading-7 mb-3 ">Year of Publishing: <span className="font-semibold ms-[60px]">{yearOfPublishing}</span></p>
                <p className="text-[#131313] leading-7 mb-3 ">Rating: <span className="font-semibold ms-[140px]">{rating}</span></p>
                <div className="navbar-end mt-7">
                    <a onClick={handleReadBtn} className="btn btn-outline md:mr-4 text-[18px] font-semibold ">Read</a>
                    <a onClick={handleWishlistBtn} className="btn bg-[#59C6D2] text-[18px] text-white font-semibold btn-info">Wishlist</a>
                    <ToastContainer />
                </div>
            </div>
        </section>
    );
};

export default BookDetails;