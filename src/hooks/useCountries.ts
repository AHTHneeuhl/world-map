import { useQuery } from "@tanstack/react-query";
import fetchCountry from "@/api/fetchCountry";

const useCountries = (countryName: string) => {
  const { isLoading, data: country } = useQuery({
    queryKey: ["countries", countryName],
    queryFn: () => fetchCountry(countryName),
  });

  return {
    country,
    isLoading,
  };
};

export default useCountries;
