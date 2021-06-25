import { gql, useQuery } from "@apollo/client";

import {
  ApolloClient,
  InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-weather-api.herokuapp.com",
  cache: new InMemoryCache(),
});

const GET_CITY_BY_NAME = gql`
query city($cityName: String!, $config: ConfigInput) {
  getCityByName (name: $cityName, config: $config){
    id
    name
    country
    weather{
      summary {
        title
        description
        icon
      }
      temperature{
        actual
        feelsLike
        min
        max
      }
      wind {
        speed
        deg
      }
      clouds {
        all
        visibility
        humidity
      }
    }
  }
}`;

export const getWeather: any = async (cityName: string) => {
  var res = await client.query({
    query: GET_CITY_BY_NAME,
    variables: {
      cityName: cityName, config: {
          units: "metric"
      },
    }
  });
  const data : getCityByName = res.data;
  return data;
};
