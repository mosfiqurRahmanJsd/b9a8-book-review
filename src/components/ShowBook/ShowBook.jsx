
import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { LuStickyNote } from "react-icons/lu";
import { NavLink } from 'react-router-dom';


const ShowBook = ({ read }) => {
    const { image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating, bookId } = read;
    return (
        <div className="flex md:flex-row flex-col border-2 mt-8 p-6 rounded-2xl gap-6 ">
            <div className='md:w-1/5 bg-[#F3F3F3] flex justify-center items-center rounded-2xl'>
                <img className='w-28 h-44' src={image} alt="" />
            </div>
            <div className='w-4/5'>
                <h3 className='playfair-display-font text-2xl font-bold mb-4'>{bookName}</h3>
                <p className='work-sans-font text-[#424242] font-medium mb-4'>By: {author}</p>
                <p className="work-sans-font mb-5 text-[#23BE0A] text-[16px] flex items-center"><span className='text-[#131313] font-bold me-4'>Tag</span> <span className="bg-[#F4FCF3] px-4 py-2 font-medium rounded-full">#{tags[0]}</span> <span className="bg-[#F4FCF3] px-4 py-2 font-medium rounded-full">#{tags[1]}</span>
                    <span className='flex items-center text-[#424242]'><CiLocationOn className='me-2' /> Year of Publishing: {yearOfPublishing}</span>

                </p>


                <p className='flex items-center work-sans-font mb-5 text-[#717171]'>
                    <span className='flex me-8'><FaUserFriends className='pt-1 me-3' /> Publisher: {publisher}</span>
                    <span className='flex'><LuStickyNote className='pt-1 me-3' /> Page {totalPages}</span>
                </p>
                <hr />
                <div className='mt-4 flex items-center'>
                    <p className='me-3 py-3 px-5 bg-[#E0EEFF] rounded-3xl work-sans-font text-[#328EFF]'>Category: {category}</p>
                    <p className='me-3 py-3 px-5 bg-[#FFF3E0] rounded-3xl work-sans-font text-[#FFAC33]'>Rating: {rating}</p>
                    <NavLink to={`/book/${bookId}`} className="btn work-sans-font md:mr-4 bg-[#23BE0A] text-[18px] text-white font-semibold btn-success rounded-3xl">View Details</NavLink>
                </div>

            </div>

        </div >
    );
};

ShowBook.propTypes = {
    read: PropTypes.object
}

export default ShowBook;