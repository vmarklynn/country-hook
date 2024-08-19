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
      try {
        const response = await countryService.getCountry(name)
        if (response.status === 200 && response.data) {
          setCountry({ data: response.data, found: true })
        } else {
          setCountry({ data: null, found: false })
        }
      } catch (error) {
        console.error('Not found')
        setCountry({ data: null, found: false })
      }
    }

    if (name.length > 0) {
      getCountry()
    }
  }, [name])

  return country

}

