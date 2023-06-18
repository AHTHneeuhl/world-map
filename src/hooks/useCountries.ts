import { useQuery } from "@tanstack/react-query";
import fetchCountry from "@/api/fetchCountry";
import { useAppSelector } from "@/redux/store/hooks";
import { useEffect } from "react";

// useCountries hook take countryName from redux store and return country detail,
// here we have used useQuery to cache country detail
const useCountries = () => {
  const countryName = useAppSelector((state) => state.country.currentCountry);

  const {
    isLoading,
    data: country,
    refetch,
  } = useQuery({
    queryKey: ["countries", countryName],
    queryFn: () => fetchCountry(countryName),
  });

  useEffect(() => {
    refetch();
  }, [countryName, refetch]);

  return {
    country,
    isLoading,
  };
};

export default useCountries;
