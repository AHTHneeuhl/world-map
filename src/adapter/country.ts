type TAPIResponse = {
  name: {
    common: string;
    official: string;
  };
  independent: boolean;
  currencies: {
    INR: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  latlng: [number, number];
  borders: string[];
  area: number;
  flag: string;
  maps: {
    googleMaps: string;
  };
  population: number;
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  capitalInfo: {
    latlng: [number, number];
  };
};

class CountryAdapter {
  private parseResponse = (apiResponse: TAPIResponse[]) => {
    return {
      commonName: apiResponse[0].name.common,
      officialName: apiResponse[0].name.official,
      capital: apiResponse[0].capital,
      timezones: apiResponse[0].timezones,
      continents: apiResponse[0].continents,
      population: apiResponse[0].population,
      region: apiResponse[0].region,
      subregion: apiResponse[0].subregion,
      capitalInfo: apiResponse[0].capitalInfo,
      flags: apiResponse[0].flags,
      flag: apiResponse[0].flag,
      maps: apiResponse[0].maps,
      latlng: apiResponse[0].latlng,
      borders: apiResponse[0].borders,
      area: apiResponse[0].area,
      currencies: apiResponse[0].currencies,
    };
  };

  getResponse = (apiResponse: TAPIResponse[]) =>
    this.parseResponse(apiResponse);
}

export default CountryAdapter;
