import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';

const Book = ({ book }) => {
    const { image, bookName, tags, author, category, rating } = book;
    return (
        <div className="card  border-2 border-[#DCDCDC] p-6">
            <figure className="bg-[#F3F3F3] py-8 rounded-[16px]"><img className="w-1/2" src={image} alt={bookName} /></figure>
            <div className="pt-6">
                <p className="work-sans-font text-[16px] mb-5 text-[#23BE0A]"><span className="bg-[#F4FCF3] px-4 py-2 font-medium rounded-full">{tags[0]}</span> <span className="bg-[#F4FCF3] px-4 py-2 font-medium rounded-full">{tags[1]}</span></p>
                <h3 className="playfair-display-font font-bold text-2xl text-[#131313]">{bookName}</h3>
                <p className=" work-sans-font mt-4 pb-5 border-[#DCDCDC] border-dashed border-b-2 text-[#424242] font-medium text-[16px]">By : {author}</p>

                <div className="card-actions work-sans-font justify-between mt-5">
                    <p className="text-[#424242] font-medium text-[16px]">{category}</p>
                    <p className="text-[#424242] font-medium text-[16px] flex items-center gap-2">{rating} <FaRegStar /></p>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
}
export default Book;