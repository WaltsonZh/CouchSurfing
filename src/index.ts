const returningUserDisplay = document.querySelector('#returning-user') as HTMLSpanElement
const userNameDisplay = document.querySelector('#user') as HTMLSpanElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLTitleElement

let isOpen: boolean
const reviews = [
  {
    name: 'Sheia',
    stars: 5,
    loyaltyUser: true,
    date: '01-04-2021',
  },
  {
    name: 'Andrzej',
    stars: 3,
    loyaltyUser: false,
    date: '28-03-2021',
  },
  {
    name: 'Omar',
    stars: 4,
    loyaltyUser: true,
    date: '27-03-2021',
  },
]

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
  const icon = isLoyalty ? '⭐' : ''
  reviewTotalDisplay.textContent = 'review total ' + value.toString() + ' | recent user: ' + reviewer + icon
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const you: {
  isReturning: boolean
  firstName: string;
  lastName: string;
  age: number;
} = {
  firstName: 'Bobby',
  lastName: 'Brown',
  age: 35,
  isReturning: true,
}

function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = 'back'
  }
  userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.firstName)
