const apiKey = '1'
const button = document.querySelector('#submitButton')
const textBox = document.querySelector('#textInput')
const drinkPic = document.querySelector('.drink-picture')
const drinkName = document.querySelector('.drink-name')
const ingredient1 = document.querySelector('.drink1')
const ingredient2 = document.querySelector('.drink2')
const ingredient3 = document.querySelector('.drink3')
const ingredient4 = document.querySelector('.drink4')


button.addEventListener('click', async () => {
  const ingredientName = document.querySelector('#textInput').value
  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ingredientName}`)
  let drink1 = response.data.drinks[0].strDrink
  let drink2 = response.data.drinks[0].strDrink
  let drink3 = response.data.drinks[0].strDrink
  let drink4 = response.data.drinks[0].strDrink


  ingredient1.innerHTML = drink1
  ingredient2.innerHTML = drink2
  ingredient3.innerHTML = drink3
  ingredient4.innerHTML = drink4

   for (let i = 0; i < response.data.drinks[0].length; i++) {
      if (response.data.drinks[0].strIngredients1 === ingredientName) {
        ingredient.textContent += response.data.drinks[0].strDrink + ', '
      } else {
          ingredient.textContent = ''
      }
    }

  // const liquorName = ['vodka', 'whiskey', 'bourbon', 'gin', 'tequilla']
  // let drinkDescription = ''
  // drinkDescription = response.data.drinks[0].strIngredient1

  // switch(drinkDescription) {
  //   case 'vodka':

  // }

})





  textBox.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
      button.click()
    }
  })

  // for (let i = 0; i < response.data.drinks[0].length; i++) {
    //   if (response.data.drinks[0].strIngredients1 === ingredientName) {
    //     ingredient.textContent += response.data.drinks[0].strDrink + ', '
    //   } else {
    //       ingredient.textContent = ''
    //   }
    // }