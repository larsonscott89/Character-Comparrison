// Global Constants

const apiKey = '1'
const button = document.querySelector('#submitButton')
const textBox = document.querySelector('#textInput')
const drinkPic = document.querySelector('.drink-picture')
const drinkName = document.querySelector('.drink-name')
const instructions = document.querySelector('.instructions')

const ingredientsOne = document.querySelector('.ingredients1')
const ingredientsTwo = document.querySelector('.ingredients2')
const ingredientsThree = document.querySelector('.ingredients3')
const ingredientsFour = document.querySelector('.ingredients4')
const ingredientsFive = document.querySelector('.ingredients5')
const ingredientsSix = document.querySelector('.ingredients6')
const ingredientsSeven = document.querySelector('.ingredients7')
const ingredientsEight = document.querySelector('.ingredients8')




button.addEventListener('click', async () => {
  const cocktailName = document.querySelector('#textInput').value
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)

  let drink = response.data.drinks[0].strDrink
  let picture = response.data.drinks[0].strDrinkThumb
  let info = response.data.drinks[0].strInstructions

  let ingredient1 = response.data.drinks[0].strIngredient1
  let ingredient2 = response.data.drinks[0].strIngredient2
  let ingredient3 = response.data.drinks[0].strIngredient3
  let ingredient4 = response.data.drinks[0].strIngredient4
  let ingredient5 = response.data.drinks[0].strIngredient5
  let ingredient6 = response.data.drinks[0].strIngredient6
  let ingredient7 = response.data.drinks[0].strIngredient7
  let ingredient8 = response.data.drinks[0].strIngredient8

  instructions.innerHTML = info
  drinkName.innerHTML = drink
  drinkPic.innerHTML = `<img src='${picture}/preview'/>`

  ingredientsOne.innerHTML = ingredient1
  ingredientsTwo.innerHTML = ingredient2
  ingredientsThree.innerHTML = ingredient3
  ingredientsFour.innerHTML = ingredient4
  ingredientsFive.innerHTML = ingredient5
  ingredientsSix.innerHTML = ingredient6
  ingredientsSeven.innerHTML = ingredient7
  ingredientsEight.innerHTML = ingredient8
  
})




textBox.addEventListener('keydown', function (event) {
  if (event.keyCode == 13) {
    button.click()
  }
})


