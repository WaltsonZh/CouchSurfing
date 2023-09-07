import { MainProperty } from './classes.js'
import { Loyalty, UserPermissions } from './enums.js'
import { Review, Property } from './interfaces.js'
import { populateUser, showDetails, showReviewTotal, addReviews } from './utils.js'

const propertyContainer = document.querySelector('.properties') as HTMLDivElement
const footer = document.querySelector('.footer') as HTMLDivElement
const button = document.querySelector('button') as HTMLButtonElement
const mainImageContainer = document.querySelector('.main-image') as HTMLDivElement

// let isLoggedIn: boolean

const reviews: Review[] = [
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
    // description: 'Great hosts, location was a bit further than said.',
  },
]

const you = {
  firstName: 'Bobby',
  lastName: 'Brown',
  permissions: UserPermissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
}

const properties: Property[] = [
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
  {
    image: '/src/assets/malaysian-hotel.jpeg',
    title: 'Malia Hotel',
    price: 35,
    location: {
      firstLine: 'room 4',
      city: 'Malia',
      code: 45334,
      country: 'Malaysia',
    },
    contact: [+60349822083, 'lee34@gmail.com'],
    isAvailable: false,
  },
]

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

// isLoggedIn = false

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

button.addEventListener('click', () => addReviews(reviews))

let yourMainProperty = new MainProperty(
  '/src/assets/italian-property.jpg',
  'Italian House',
  [{
    name: 'Olive',
    stars: 5,
    loyaltyUser: Loyalty.GOLD_USER,
    date: '12-04-2021'
  }]
)

const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)
