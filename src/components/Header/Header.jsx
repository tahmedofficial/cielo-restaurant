import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import headerimg from "../../assets/images/headerimg.png";

const Header = () => {
    return (
        <header>
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

            <section className="p-3">
                <div className="hero">
                    <img className="w-full" src={headerimg} alt="" />
                    <div className="hero-content text-center text-neutral-content">
                        <div>
                            <h1 className="md:mb-8 text-3xl md:text-5xl lg:text-7xl font-bold text-white">Discover an exceptional cooking</h1>
                            <h1 className="md:mb-10 text-3xl md:text-5xl lg:text-7xl font-bold text-white">class tailored for you!</h1>
                            <p className="mb-2 text-white text-sm md:text-xl">Indulge in a culinary journey at our charming restaurant, where every dish is crafted with passion and precision. From mouthwatering appetizers to decadent desserts, our menu showcases a fusion of flavors from around the world.</p>
                            <div className="md:mt-8 flex justify-center gap-5">
                                <button className="btn rounded-3xl lg:text-lg px-8 text-gray-500 border-0 bg-[#35f3a3]">Explore Now</button>
                                <button className="btn rounded-3xl lg:text-lg px-8 border-0">Our Feedback</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;