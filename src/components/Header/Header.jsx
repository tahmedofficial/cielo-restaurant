import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div>
            <nav>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Home</a></li>
                                <li><a>Recipes</a></li>
                                <li><a>About</a></li>
                                <li><a>Search</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-2xl font-bold md:text-3xl">Cielo</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal text-lg px-1">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="h-10 rounded-3xl text-[#150B2BB3] gap-1 p-3 mr-4 flex items-center bg-[#150B2B0D]">
                            <FiSearch />
                            <input className="h-10 placeholder:text-[#150B2BB3] rounded-3xl bg-[#150B2B00] outline-none" type="text" placeholder="Search" />
                        </div>
                        <button className="btn btn-circle text-3xl bg-[#35f3a3] text-gray-500"><CgProfile /></button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;