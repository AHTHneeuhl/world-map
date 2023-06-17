import useCountries from "@/hooks/useCountries";
import { Text, Spinner } from "@/components/common";
import { numberWithCammas } from "@/utils/helpers";

type TProps = {
  countryName: string;
};

const Country: React.FC<TProps> = ({ countryName }) => {
  const { isLoading, country } = useCountries(countryName);

  if (isLoading) return <Spinner />;

  return (
    <div className="border border-neutral-100 w-96 h-[80vh] rounded-2xl px-4 py-6 hover:shadow cursor-pointer transition">
      <div className="flex flex-col items-center justify-center gap-3 mb-5">
        <img
          src={country?.flags.png}
          alt={country?.flags.alt}
          className="w-24 h-16 object-contain"
        />
        <h3 className="text-xl text-center font-medium text-neutral-700">
          {country?.officialName}
        </h3>
      </div>
      <div className="flex flex-row items-center justify-between">
        <Text label="Capital" />
        {country?.capital.map((item: string) => (
          <Text key={item} content={item} />
        ))}
      </div>
      <div className="flex flex-row items-center justify-between">
        <Text label="Currency" />
      </div>
      <Text
        label="Population"
        content={country?.population && numberWithCammas(country.population)}
      />
      <Text
        label="Area"
        content={country?.area && numberWithCammas(country.area)}
      />
      <Text label="Region" content={country?.region} />
      <Text label="Subregion" content={country?.subregion} />
      <div className="flex flex-row items-center justify-between">
        <Text label="Timezones" />
        {country?.timezones.map((timezone: string) => (
          <Text key={timezone} content={timezone} />
        ))}
      </div>
      <div className="flex flex-row items-center justify-between">
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
      <div className="flex flex-row gap-3 items-center my-2 justify-between">
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
