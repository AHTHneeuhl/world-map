import { useState } from "react";
import { setCountry } from "@/redux/slices/country";
import { useAppDispatch } from "@/redux/store/hooks";

const SearchCountry: React.FC = () => {
  const [countryName, setCountryName] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleSearch = () => {
    dispatch(setCountry(countryName));
  };

  const handleSearchOnKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      dispatch(setCountry(countryName));
    }
  };

  return (
    <div className="relative w-96 col-start-1 col-end-4">
      <input
        type="search"
        id="search"
        className="block w-full py-3 px-4 pr-10 bg-neutral-100 rounded-full text-sm border-0 outline-none focus:outline-none"
        placeholder="Search"
        required
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        onKeyDown={handleSearchOnKeyPress}
      />
      <div
        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
        onClick={handleSearch}
      >
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
