'use client'

import {useState} from 'react'
import Select from 'react-select'
import {GlobeIcon} from '@heroicons/react/solid'
import {useRouter} from 'next/navigation'
import {Country, City, State} from 'country-state-city'

type CountryOption = (typeof countries)[0]
type StateOption = ReturnType<typeof states>[0]

const countries = Country.getAllCountries().map(country => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}))

const states = (country: CountryOption) =>
  State.getStatesOfCountry(country.value.isoCode)?.map(state => ({
    value: {
      latitude: state.latitude!,
      longitude: state.longitude!,
      countryCode: state.countryCode,
      name: state.name,
      stateCode: state.isoCode,
    },
    label: state.name,
  })) ?? []

const handler = (country: CountryOption, state: StateOption) =>
  state !== null
    ? City.getCitiesOfState(country.value.isoCode, state.value.stateCode).map(city => ({
        value: {
          latitude: city.latitude!,
          longitude: city.longitude!,
          countryCode: city.countryCode,
          name: city.name,
        },
        label: state.label + ', ' + city.name,
      }))
    : states(country)

export default function CityPicker() {
  const [country, setCountry] = useState<CountryOption | null>(null)
  const [state, setState] = useState<StateOption | null>(null)
  const router = useRouter()

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white/80">
          <GlobeIcon className="w-5 h-5 text-white" />
          <label htmlFor="country">Country</label>
        </div>

        <Select
          className="text-black"
          options={countries}
          value={country}
          onChange={option => {
            setCountry(option)
            setState(null)
          }}
        />
      </div>

      {country && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white/80">
            <GlobeIcon className="w-5 h-5 text-white" />
            <label htmlFor="country">City</label>
          </div>

          <Select
            className="text-black"
            options={handler(country, state!)}
            onChange={option => {
              if (state === null) setState(option as StateOption)
              else {
                console.log(option)
                router.push(`location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`)
              }
            }}
          />
        </div>
      )}
    </div>
  )
}

// TODO: the city select is very slow on United States because there are 19k cities, fix
