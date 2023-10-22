function NavBar() {
    return (
        <div className="bg-black md:w-full w-auto">
            <div className="navbar bg-teal-950">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-white bg-green-950  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        <li><a className="hover:text-yellow-600">Shop</a></li>
                        <li><a className="hover:text-yellow-600">Home</a></li>
                        <li><a className="hover:text-yellow-600">News</a></li>
                        <li><a className="hover:text-yellow-600">Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case md:text-xl text-white">BikeZone</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li><a className="hover:text-yellow-600">Shop</a></li>
                    <li><a className="hover:text-yellow-600">Home</a></li>
                    <li><a className="hover:text-yellow-600">News</a></li>
                    <li><a className="hover:text-yellow-600">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className=" bg-[#E76F51] py-1 md:py-2 cursor-pointer px-3 md:px-6 text-white border-none rounded-md text-base hover:text-teal-950">Login</a>
            </div>
        </div>
        </div>
    )
}
export default NavBar