const SearchCountry: React.FC = () => {
  return (
    <div className="relative col-start-1 col-end-4">
      <input
        type="search"
        id="search"
        className="block w-full py-3 px-4 pr-10 bg-neutral-100 rounded-full text-sm border-0 outline-none focus:outline-none"
        placeholder="Search"
        required
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchCountry;
