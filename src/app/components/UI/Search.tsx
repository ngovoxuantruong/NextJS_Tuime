import { MdSearch } from 'react-icons/md';

const Search = () => {
  return (
    <div className="w-full h-auto top-0 left-0 mb-[30px] relative">
      <form className="top-0 left-0 w-full h-auto p-[10px] bg-primary rounded-xl table relative">
        <div className="w-[calc(100%-40px)] h-[30px] border-r border-base-100 inline-block">
          <input
            type="text"
            placeholder="Nhập từ khoá......."
            autoComplete="off"
            className="px-[10px] w-full h-full bg-primary outline-none text-base text-base-100 placeholder:text-[#ddd]"
          />
        </div>
        <a
          href="#!"
          className=" inline-flex justify-center items-center w-[40px] h-[30px] text-base-100 text-base top-1 relative"
        >
          <span className="text-2xl px-[5px] inline-flex items-center justify-center">
            <MdSearch />
          </span>
        </a>
      </form>
    </div>
  );
};

export default Search;
