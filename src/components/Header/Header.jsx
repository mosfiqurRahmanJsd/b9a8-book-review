import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar container md:mx-auto work-sans-font">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Listed Books</a></li>
                        <li><a>Pages to Read</a></li>
                        <li><a>About Us</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Contact Us</a></li>

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl md:text-3xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[18px]">
                    <li className="mx-2">
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? 'border-2  border-[#23BE0A] focus:bg-white px-5 py-[14px] rounded-xl' : 'border-2 border-white px-5 py-[14px]  rounded-xl hover:bg-[#23BE0A]'
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink
                            to='listedBook'
                            className={({ isActive }) =>
                                isActive ? 'border-2 border-[#23BE0A] focus:bg-white px-5 py-[14px] rounded-xl' : 'border-2 border-white px-5 py-[14px]  rounded-xl hover:bg-[#23BE0A]'
                            }>
                            Listed Books
                        </NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink
                            to='pagesToRead'
                            className={({ isActive }) =>
                                isActive ? 'border-2 border-[#23BE0A] focus:bg-white px-5 py-[14px] rounded-xl' : 'border-2 border-white px-5 py-[14px]  rounded-xl hover:bg-[#23BE0A]'
                            }>
                            Pages to Read
                        </NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink
                            to='faq'
                            className={({ isActive }) =>
                                isActive ? 'border-2 border-[#23BE0A] focus:bg-white px-5 py-[14px] rounded-xl' : 'border-2 border-white px-5 py-[14px]  rounded-xl hover:bg-[#23BE0A]'
                            }>
                            FAQ
                        </NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink
                            to='aboutUs'
                            className={({ isActive }) =>
                                isActive ? 'border-2 border-[#23BE0A] focus:bg-white px-5 py-[14px] rounded-xl' : 'border-2 border-white px-5 py-[14px]  rounded-xl hover:bg-[#23BE0A]'
                            }>
                            About Us
                        </NavLink>
                    </li>




                </ul>
            </div>
            <div className="navbar-end ">
                <a className="btn md:mr-4 bg-[#23BE0A] text-[18px] text-white font-semibold btn-success">Sign In</a>
                <a className="btn bg-[#59C6D2] text-[18px] text-white font-semibold btn-info">Sign Up</a>
            </div>
        </div >
    );
};

export default Header;