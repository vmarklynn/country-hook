import { useState, useEffect } from "react"
import countryService from "../services/countries"


export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

export const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    const getCountry = async () => {
      const response = await countryService.getCountry(name)
      if (response.error) {
        setCountry(response.error)
      } else {
        setCountry(response)
      }


    }

    if (name.length > 0) {
      getCountry()
    }
  }, [name])

  return country

}

