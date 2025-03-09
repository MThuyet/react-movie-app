import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-slate-950 px-5 py-4 text-white sm:px-9">
      <div className="flex items-center gap-5">
        <Link to="/">
          <img src="/logoNetflix.png" alt="Netflix" className="w-16 sm:w-28" />
        </Link>
        <a href="#" className="sm:px-2 sm:py-2.5">
          Movie
        </a>
        <a href="#" className="sm:px-2 sm:py-2.5">
          TV Show
        </a>
      </div>
      <IoIosSearch className="size-6 cursor-pointer" />
    </header>
  );
};
export default Header;
