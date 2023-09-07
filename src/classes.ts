import { Review } from './interfaces.js'

export class MainProperty {
  src: string
  title: string
  reviews: Review[]
  constructor(src: string, title: string, reviews: Review[]) {
    this.src = src
    this.title = title
    this.reviews = reviews
  }
}