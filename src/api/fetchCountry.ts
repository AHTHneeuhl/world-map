import { CountryAdapter } from "@/adapter";
import restcountiresAPI from "./restcountiresAPI";

const adapter = new CountryAdapter();

// fetchCountry function to fetch country detail by country name
const fetchCountry = async (countryName: string) => {
  const { data } = await restcountiresAPI.get(
    `/name/${countryName}?fullText=true`
  );

  return adapter.getResponse(data);
};

export default fetchCountry;
