import { IoIosSearch } from "react-icons/io";

function App() {
  return (
    <div>
      <header className="flex items-center justify-between bg-slate-950 px-9 py-4 text-white">
        <div className="flex items-center gap-5">
          <img
            src="../public/logoNetflix.png"
            alt="Netflix"
            className="w-16 sm:w-28"
          />
          <a href="#" className="sm:px-2 sm:py-2.5">
            Phim
          </a>
          <a href="#" className="sm:px-2 sm:py-2.5">
            Truyền hình
          </a>
        </div>
        <IoIosSearch className="size-6 cursor-pointer" />
      </header>
    </div>
  );
}

export default App;
