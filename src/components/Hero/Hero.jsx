import { NavLink } from "react-router-dom";


const Hero = () => {
    return (
        <div className="hero min-h-[554px] rounded-[24px] bg-[#F3F3F3] container md:mx-auto px-32 py-20 mb-24">
            <div className="hero-content flex  flex-col lg:flex-row-reverse gap-80">
                <img src="https://i.ibb.co/5kktDs6/dsds.png" className="w-fit" />
                <div className="playfair-display-font">
                    <h1 className="text-[56px] leading-[84px] text-[#131313] font-bold py-6">Books to freshen up <br /> your bookshelf</h1>

                    <NavLink to='/listedBook' className="btn work-sans-font md:mr-4 bg-[#23BE0A] text-[18px] text-white font-semibold btn-success">View The List</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Hero;