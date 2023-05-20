import {getApolloClient} from '@/apollo-client'
import CalloutCard from '@/components/CalloutCard'
import InformationPanel from '@/components/InformationPanel'
import StatCard from '@/components/StatCard'
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

  return (
    <div>
      <InformationPanel props={{city, results, lat, long}} />

      <div className="p-5">
        <div className="pb-5">
          <h2 className="text-xl font-bold">Todays Overview</h2>
          <p className="text-sm text-gray-400">
            Latest Updated at: {new Date(results.current_weather.time).toLocaleString()} {results.timezone}
          </p>
        </div>

        <div className="m-2 mb-10">
          <CalloutCard message="Chat GPT" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
          <StatCard
            title="Maximum Temperature"
            metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
            color="yellow"
          />

          <StatCard
            title="Minimum Temperature"
            metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°`}
            color="green"
          />

          <div>
            <StatCard title="UV Index" metric={results.daily.uv_index_max[0].toFixed(1)} color="rose" />
            {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
              <CalloutCard message="UV Index is high today, wear SPF!" warning />
            )}
          </div>

          <div className="flex space-x-3">
            <StatCard title="Wind Speed" metric={`${results.current_weather.windspeed.toFixed(1)}m/s`} color="cyan" />

            <StatCard
              title="Wind Direction"
              metric={`${results.current_weather.winddirection.toFixed(1)}°`}
              color="violet"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
