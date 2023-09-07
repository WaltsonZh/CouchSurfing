import { Loyalty, UserPermissions } from './enums.js'
import { Review } from './interfaces.js'

const returningUserDisplay = document.querySelector('#returning-user') as HTMLSpanElement
const userNameDisplay = document.querySelector('#user') as HTMLSpanElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLTitleElement
const button = document.querySelector('button') as HTMLButtonElement
const reviewContainer = document.querySelector('.reviews') as HTMLDivElement
const container = document.querySelector('.container') as HTMLDivElement

export function showReviewTotal(value: number, reviewer: string, isLoyalty: Loyalty) {
  const icon = isLoyalty === Loyalty.GOLD_USER ? '⭐' : ''
  reviewTotalDisplay.textContent = value.toString() + ' review' + makeMultiple(value) + ' | Last reviewed by ' + reviewer + icon
}

export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = 'back'
  }
  userNameDisplay.innerHTML = userName
}

export function showDetails(authorityStatus: boolean | UserPermissions, element: HTMLDivElement, price: number) {
  if (authorityStatus) {
    const priceDisplay = document.createElement('div')
    priceDisplay.innerHTML = price.toString() + '/night'
    element.appendChild(priceDisplay)
  }
}

function makeMultiple(value: number): string {
  if (value > 1 || value == 0) {
    return 's'
  } else return ''
}

let count = 0
export function addReviews(array: Review[]): void {
  if (!count) {
    count++
    const topTwo = getTopTwoReviews(array)
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement('div')
      card.classList.add('review-card')
      card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
      reviewContainer.appendChild(card)
    }
    container.removeChild(button)
  }
}

function getTopTwoReviews(reviews: Review[]): Review[] {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
  return sortedReviews.slice(0, 2)
}
