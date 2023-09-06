const returningUserDisplay = document.querySelector('#returning-user') as HTMLSpanElement
const userNameDisplay = document.querySelector('#user') as HTMLSpanElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLTitleElement
const propertyContainer = document.querySelector('.properties') as HTMLDivElement
const footer = document.querySelector('.footer') as HTMLDivElement

let isLoggedIn: boolean

enum Loyalty {
  GOLD_USER,
  SILVER_USER,
  BRONZE_USER,
}

const reviews: any[] = [
  {
    name: 'Sheia',
    stars: 5,
    loyaltyUser: Loyalty.GOLD_USER,
    date: '01-04-2021',
  },
  {
    name: 'Andrzej',
    stars: 3,
    loyaltyUser: Loyalty.BRONZE_USER,
    date: '28-03-2021',
  },
  {
    name: 'Omar',
    stars: 4,
    loyaltyUser: Loyalty.SILVER_USER,
    date: '27-03-2021',
    description: 'Great hosts, location was a bit further than said.',
  },
]

function showReviewTotal(value: number, reviewer: string, isLoyalty: Loyalty) {
  const icon = isLoyalty === Loyalty.GOLD_USER ? '⭐' : ''
  reviewTotalDisplay.textContent = 'review total ' + value.toString() + ' | recent user: ' + reviewer + icon
}

function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = 'back'
  }
  userNameDisplay.innerHTML = userName
}

enum UserPermissions {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ_ONLY',
}

const you = {
  firstName: 'Bobby',
  lastName: 'Brown',
  permissions: UserPermissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
}

type Price = 25 | 30 | 45
type Country = 'Colombia' | 'Poland' | 'United Kingdom'
const properties: {
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
}[] = [
  {
    image: '/src/assets/colombia-property.jpg',
    title: 'Colombian Shack',
    price: 45,
    location: {
      firstLine: 'shack 37',
      city: 'Bogota',
      code: 45632,
      country: 'Colombia',
    },
    contact: [+1123495082908, 'marywinkle@gmail.com'],
    isAvailable: true,
  },
  {
    image: '/src/assets/poland-property.jpg',
    title: 'Polish Cottage',
    price: 30,
    location: {
      firstLine: 'no 23',
      city: 'Gdansk',
      code: 343903,
      country: 'Poland',
    },
    contact: [+1123495082908, 'garydavis@hotmail.com'],
    isAvailable: false,
  },
  {
    image: '/src/assets/london-property.jpg',
    title: 'London Flat',
    price: 25,
    location: {
      firstLine: 'flat 15',
      city: 'London',
      code: 35433,
      country: 'United Kingdom',
    },
    contact: [+1123495082908, 'andyluger@aol.com'],
    isAvailable: true,
  },
]

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

isLoggedIn = false

function showDetails(authorityStatus: boolean | UserPermissions, element: HTMLDivElement, price: number) {
  if (authorityStatus) {
    const priceDisplay = document.createElement('div')
    priceDisplay.innerHTML = price.toString() + '/night'
    element.appendChild(priceDisplay)
  }
}

for (let i = 0; i < properties.length; i++) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.textContent = properties[i].title
  const image = document.createElement('img')
  image.setAttribute('src', properties[i].image)
  card.appendChild(image)
  propertyContainer.appendChild(card)
  showDetails(you.permissions, card, properties[i].price)
}

let currentLocation: [string, string, number] = ['London', '11:35', 17]
footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}&deg;`
