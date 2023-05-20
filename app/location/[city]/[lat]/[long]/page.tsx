import {getApolloClient} from '@/apollo-client'
import fetchWeatherQuery from '@/graphql/queries/fetchWeatherQueries'

export default async function WeatherPage({
  params: {city, lat, long},
}: {
  params: {city: string; lat: string; long: string}
}) {
  const client = getApolloClient()

  const {data} = await client.query({
    query: fetchWeatherQuery,
    variables: {latitude: long, longitude: lat},
  })

  const results: Meteo = data.openmeteo

  console.log({results}) // ! debug

  return (
    <div>
      <div>
        <div>
          <h2>Todays Overview</h2>
          <p>Last Updated at: </p>
        </div>
      </div>
    </div>
  )
}
