'use client'

import {useState} from 'react'
import Select from 'react-select'
import {GlobeIcon} from '@heroicons/react/solid'
import {useRouter} from 'next/navigation'
import {Country, City} from 'country-state-city'

type CountryOption = (typeof countries)[0]

type CityOption = ReturnType<typeof cities>[0]

const countries = Country.getAllCountries().map(country => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}))

const cities = (country: CountryOption) =>
  City.getCitiesOfCountry(country.value.isoCode)?.map(city => ({
    value: {
      latitude: city.latitude!,
      longitude: city.longitude!,
      countryCode: city.countryCode,
      name: city.name,
      stateCode: city.stateCode,
    },
    label: city.name,
  })) ?? []

export default function CityPicker() {
  const [country, setCountry] = useState<CountryOption | null>(null)
  const [city, setCity] = useState<CityOption | null>(null)
  const router = useRouter()

  console.log({country, city}) // ! debug
  if (country) console.log({citiesLength: cities(country).length, citiesSample: cities(country).slice(0, 10)}) // ! debug

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
            setCity(null)
          }}
        />
      </div>

      {country && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white/80">
            <GlobeIcon className="w-5 h-5 text-white" />
            <label htmlFor="country">City</label>
          </div>

          {/* sta lenta esta madre por ejemplo con US */}
          <Select
            className="text-black"
            options={cities(country)}
            value={city}
            onChange={option => {
              setCity(option)
              router.push(`location/${option?.value.latitude}/${option?.value.longitude}`)
            }}
          />
        </div>
      )}
    </div>
  )
}
