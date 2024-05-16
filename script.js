
const apiKey = '1'
const button = document.querySelector('#submitButton')
const textBox = document.querySelector('#ingredientInput')
const drinkBox = document.querySelector('#textInput')
const drinkPic = document.querySelector('.drink-picture')
const drinkName = document.querySelector('.drink-name')
const instructions = document.querySelector('.instructions')
const allButtons = document.querySelectorAll('.drink-button')
const homeButton = document.querySelector('.home-button')

const ingredientsOne = document.querySelector('.ingredients1')
const ingredientsTwo = document.querySelector('.ingredients2')
const ingredientsThree = document.querySelector('.ingredients3')
const ingredientsFour = document.querySelector('.ingredients4')
const ingredientsFive = document.querySelector('.ingredients5')
const ingredientsSix = document.querySelector('.ingredients6')
const ingredientsSeven = document.querySelector('.ingredients7')
const ingredientsEight = document.querySelector('.ingredients8')

const ingredients = Array.from({ length: 70 }, (_, index) =>
  document.querySelector(`#button${index + 1}`)
);

function handleClick() {
  window.location.reload()
}
homeButton.addEventListener('click', handleClick)

button.addEventListener('click', async () => {
  const ingredientName = document.querySelector('#ingredientInput').value
  let response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}`
  )

  ingredients.forEach((element, index) => {
    if (element && element.innerHTML !== undefined) {
      element.innerHTML = ''
    } else if (button.innerHTML === '') {
      button.style.opacity = '0'
      button.style.width = '0'
      button.style.height = '0'
    } else {
      button.style.opacity = '.95'
    }
  })

  for (let i = 0; i < Math.min(70, response.data.drinks.length); i++) {
    let drink = response.data.drinks[i].strDrink
    ingredients[i].innerHTML += drink + ', '
  }

  ingredients.forEach((element) => (element.innerHTML = element.innerHTML.slice(0, -2)))

  for (let button of allButtons) {
    if (button.innerHTML === '') {
      button.style.opacity = '0'
    } else {
      button.style.opacity = '.95'
    }
  }
})

textBox.addEventListener('keydown', function (event) {
  if (event.keyCode == 13) {
    button.click()
  }
})

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

  for (let button of allButtons) {
    if (button.innerHTML === '') {
      button.style.opacity = '0'
    } else {
      button.style.opacity = '.95'
    }
  } 
})

const button1 = document.querySelector('.drink1')

button1.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button1')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button2 = document.querySelector('.drink2')

button2.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button2')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button3 = document.querySelector('.drink3')

button3.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button3')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button4 = document.querySelector('.drink4')

button4.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button4')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button5 = document.querySelector('.drink5')

button5.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button5')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button6 = document.querySelector('.drink6')

button6.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button6')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button7 = document.querySelector('.drink7')

button7.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button7')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button8 = document.querySelector('.drink8')

button8.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button8')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button9 = document.querySelector('.drink9')

button9.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button9')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button10 = document.querySelector('.drink10')

button10.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button10')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button11 = document.querySelector('.drink11')

button11.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button11')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button12 = document.querySelector('.drink12')

button12.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button12')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button13 = document.querySelector('.drink13')

button13.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button13')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button14 = document.querySelector('.drink14')

button14.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button14')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button15 = document.querySelector('.drink15')

button15.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button15')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button16 = document.querySelector('.drink16')

button16.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button16')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button17 = document.querySelector('.drink17')

button17.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button17')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button18 = document.querySelector('.drink18')

button18.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button18')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button19 = document.querySelector('.drink19')

button19.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button19')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button20 = document.querySelector('.drink20')

button20.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button20')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button21 = document.querySelector('.drink21')

button21.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button21')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button22 = document.querySelector('.drink22')

button22.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button22')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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
const button23 = document.querySelector('.drink23')

button23.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button23')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button24 = document.querySelector('.drink24')

button24.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button24')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button25 = document.querySelector('.drink25')

button25.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button25')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button26 = document.querySelector('.drink26')

button26.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button26')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button27 = document.querySelector('.drink27')

button27.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button27')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button28 = document.querySelector('.drink28')

button28.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button28')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button29 = document.querySelector('.drink29')

button29.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button29')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button30 = document.querySelector('.drink30')

button30.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button30')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button31 = document.querySelector('.drink31')

button31.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button31')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button32 = document.querySelector('.drink32')

button32.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button32')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button33 = document.querySelector('.drink33')

button33.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button33')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button34 = document.querySelector('.drink34')

button34.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button34')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button35 = document.querySelector('.drink35')

button35.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button35')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button36 = document.querySelector('.drink36')

button36.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button36')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button37 = document.querySelector('.drink37')

button37.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button37')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button38 = document.querySelector('.drink38')

button38.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button38')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button39 = document.querySelector('.drink39')

button39.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button39')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button40 = document.querySelector('.drink40')

button40.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button40')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button41 = document.querySelector('.drink41')

button41.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button41')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button42 = document.querySelector('.drink42')

button42.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button42')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button43 = document.querySelector('.drink43')

button43.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button43')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button44 = document.querySelector('.drink44')

button44.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button44')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button45 = document.querySelector('.drink45')

button45.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button45')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button46 = document.querySelector('.drink46')

button46.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button46')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button47 = document.querySelector('.drink47')

button47.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button47')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button48 = document.querySelector('.drink48')

button48.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button48')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button49 = document.querySelector('.drink49')

button49.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button49')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button50 = document.querySelector('.drink50')

button50.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button50')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button51 = document.querySelector('.drink51')

button51.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button51')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button52 = document.querySelector('.drink52')

button52.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button52')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button53 = document.querySelector('.drink53')

button53.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button53')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button54 = document.querySelector('.drink54')

button54.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button54')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button55 = document.querySelector('.drink55')

button55.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button55')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button56 = document.querySelector('.drink56')

button56.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button56')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button57 = document.querySelector('.drink57')

button57.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button57')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button58 = document.querySelector('.drink58')

button58.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button58')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button59 = document.querySelector('.drink59')

button59.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button59')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button60 = document.querySelector('.drink60')

button60.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button60')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button61 = document.querySelector('.drink61')

button61.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button61')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button62 = document.querySelector('.drink62')

button62.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button62')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button63 = document.querySelector('.drink63')

button63.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button63')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button64 = document.querySelector('.drink64')

button64.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button64')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button65 = document.querySelector('.drink65')

button65.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button65')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button66 = document.querySelector('.drink66')

button66.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button66')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button67 = document.querySelector('.drink67')

button67.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button67')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button68 = document.querySelector('.drink68')

button68.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button68')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button69 = document.querySelector('.drink69')

button69.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button69')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

const button70 = document.querySelector('.drink70')

button70.addEventListener('click', async () => {
  const drinkButton = document.querySelector('#button70')
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkButton.innerText}`)
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

drinkBox.addEventListener('keydown', function (event) {
  if (event.keyCode == 13) {
    button.click()
  }
})

