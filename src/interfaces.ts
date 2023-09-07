import { Loyalty } from './enums.js'
import { Price, Country } from './types.js'

export interface Review {
  name: string
  stars: number
  loyaltyUser: Loyalty
  date: string
}

export interface Property {
  image: string
  title: string
  price: Price
  location: {
    firstLine: string
    city: string
    code: number
    country: Country
  }
  contact: [number, string]
  isAvailable: boolean
}
