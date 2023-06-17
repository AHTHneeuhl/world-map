import restcountiresAPI from "./restcountiresAPI";

const fetchCountry = async (countryName: string) => {
  const { data } = await restcountiresAPI.get(`/name/${countryName}`);

  return data;
};

export default fetchCountry;
