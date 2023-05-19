import {getApolloClient} from '@/apollo-client'
import fetchWeatherQuery from '@/graphql/queries/fetchWeaterQueries'

export default async function WeatherPage({
  params: {city, lat, long},
}: {
  params: {city: string; lat: string; long: string}
}) {
  const client = getApolloClient()

  const {data} = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: 'true',
      latitude: long,
      longitude: lat,
      timezone: 'GMT',
    },
  })

  const results: Root = data.myQuery

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
