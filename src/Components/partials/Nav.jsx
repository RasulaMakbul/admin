import React, {useState} from "react"
import {FaSearch, FaHeart, FaBars, FaTimes} from "react-icons/fa"
import {IoCart} from "react-icons/io5"
import Logo from "../../assets/logo/logo.jpg"
import {Link} from "react-router-dom"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const navItems = [
    {
      id: 1,
      title: "Tams Collection",
      path: "/",
    },
    {
      id: 2,
      title: "Tams Maternity",
      path: "/",
    },
    {
      id: 3,
      title: "Trending",
      path: "/trending",
    },
    {
      id: 4,
      title: "On Sale",
      path: "/",
    },
    {
      id: 5,
      title: "Top Selling",
      path: "/",
    },
  ]
  return (
    <>
      <header className="max-w-screen-2x1 xl:px-28 px-4 bg-black text-white pb-8">
        <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3 ">
          <FaSearch className="text-gray-400 w-5 h-5 cursor-pointer hidden md:block" />
          <a href="/">
            <img
              src={Logo}
              className="rounded-full w-[100px] h-[100px] "
              alt=""
            />
          </a>
          {/* cart and wishlist */}
          <div className="text-lg text-white sm:flex items-center gap-4 hidden">
            <a href="/" className="flex items-center gap-2">
              <IoCart /> Cart
            </a>
            <a href="/" className="flex items-center gap-2">
              <FaHeart /> wishlist
            </a>
          </div>
          {/* mobile navbar */}
          <div className="sm:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaTimes className="w-5 h-5 text-gray-300" />
              ) : (
                <FaBars className="w-5 h-5 text-gray-300" />
              )}
            </button>
          </div>
        </nav>
        {/* category items */}
        <div className="pt-4">
          <ul className="lg:flex items-center justify-between hidden">
            {navItems.map(data => (
              <li key={data.id} className="hover:text-gray-300">
                <Link to={data.path}>{data.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* only mobile menu items */}
        <ul
          className={`text-white px-4 py-2 rounded  ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          {navItems.map(data => (
            <li
              key={data.id}
              className="my-3 cursor-pointer "
              // Apply styles for hover
              style={{textDecoration: "underline"}}
            >
              <Link
                to={data.path}
                // Apply styles for hover
                className="hover:scale-120"
              >
                {data.title}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  )
}

export default Nav
