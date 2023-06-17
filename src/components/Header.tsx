import SearchCountry from "./SearchCountry";

const Header: React.FC = () => {
  return (
    <header className="w-screen px-6 py-2 flex flex-row items-center justify-between">
      <h2 className="font-semibold text-xl text-violet-950">MapQuest</h2>
      <SearchCountry />
    </header>
  );
};

export default Header;
