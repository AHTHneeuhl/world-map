import { Country, Header, WorldMap } from "@/components";

const App = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row gap-3 items-center px-6">
        <WorldMap />
        <Country countryName="Vietnam" />
      </div>
    </div>
  );
};

export default App;
