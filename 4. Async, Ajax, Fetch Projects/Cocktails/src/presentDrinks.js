import fetchDrinks from './fetchDrinks.js'
import displayDrinks from './displayDrinks.js'
import setDrinks from './setDrink.js'

const showDrinks = async (url) => {
  // fetch drinks
  const data = await fetchDrinks(url)

  // display drinks
  const section = await displayDrinks(data)
  if (section) {
    setDrinks(section)
  }
}

export default showDrinks
