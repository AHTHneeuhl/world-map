import useCountries from "@/hooks/useCountries";
import { Text, Spinner, EmptyState } from "@/components/common";
import { numberWithCammas } from "@/utils/helpers";

const Country: React.FC = () => {
  const { isLoading, country } = useCountries();

  if (isLoading)
    return (
      <EmptyState>
        <Spinner />
      </EmptyState>
    );

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
      <div className="flex flex-row items-center justify-between my-2">
        <Text label="Timezones" />
        <div className="flex flex-wrap gap-2">
          {country?.timezones.map((timezone: string) => (
            <p
              key={timezone}
              className="text-white bg-teal-500 text-xs font-medium px-1"
            >
              {timezone}
            </p>
          ))}
        </div>
      </div>
      {country?.borders ? (
        <div className="flex flex-row items-center justify-between my-2">
          <Text label="Borders" />
          <div className="flex flex-wrap gap-2">
            {country?.borders.map((border: string) => (
              <p
                key={border}
                className="bg-teal-500 text-white text-xs font-medium px-1"
              >
                {border}
              </p>
            ))}
          </div>
        </div>
      ) : null}
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
