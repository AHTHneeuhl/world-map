import useCountries from "@/hooks/useCountries";
import { Text, Spinner } from "@/components/common";

const Country: React.FC = () => {
  const { isLoading, country } = useCountries("India");

  if (isLoading) return <Spinner />;

  return (
    <div className="border border-neutral-100 w-full h-[80vh] rounded-2xl p-4 hover:shadow cursor-pointer transition">
      <div className="flex flex-col items-center justify-center gap-3">
        <img
          src={country?.flags.png}
          alt={country?.flags.alt}
          className="w-24 h-16 object-contain"
        />
        <h3 className="text-xl text-center font-medium text-neutral-700">
          {country?.officialName}
        </h3>
      </div>
      <div className="flex flex-row items-center  ">
        <Text label="Capital" />
        {country?.capital.map((item: string) => (
          <Text key={item} content={item} />
        ))}
      </div>
      <div className="flex flex-row items-center  ">
        <Text label="Currency" content={country?.currencies?.INR?.name} />
      </div>
      <Text label="Population" content={country?.population} />
      <Text label="Area" content={country?.area} />
      <Text label="Region" content={country?.region} />
      <Text label="Subregion" content={country?.subregion} />
      <div className="flex flex-row items-center  ">
        <Text label="Timezones" />
        {country?.timezones.map((timezone: string) => (
          <Text key={timezone} content={timezone} />
        ))}
      </div>
      <div className="flex flex-row items-center  ">
        <Text label="Borders" />
        <div className="flex flex-row gap-2">
          {country?.borders.map((border: string) => (
            <p
              key={border}
              className="bg-teal-500 text-white text-sm font-medium px-1"
            >
              {border}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center my-2">
        <Text label="Maps" />
        <button
          onClick={() => window.open(country?.maps.googleMaps, "_blank")}
          className="bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-full"
        >
          View Map
        </button>
      </div>
    </div>
  );
};

export default Country;
