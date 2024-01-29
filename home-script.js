const apiKey = '1'
const button = document.querySelector('#submitButton')
const textBox = document.querySelector('#textInput')
const drinkPic = document.querySelector('.drink-picture')
const drinkName = document.querySelector('.drink-name')

const ingredients = Array.from({ length: 20 }, (_, index) =>
  document.querySelector(`.drink${index + 1}`)
);

button.addEventListener('click', async () => {
  const ingredientName = document.querySelector('#textInput').value;
  let response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}`
  );

  // Clear previous content
  ingredients.forEach((element) => (element.innerHTML = ''));

  for (let i = 0; i < Math.min(20, response.data.drinks.length); i++) {
    // Use different variables for each drink
    let drink = response.data.drinks[i].strDrink;

    // Append the drink to the respective element
    ingredients[i].innerHTML += drink + ', ';
  }

  // Remove the trailing comma and space for each element
  ingredients.forEach(
    (element) => (element.innerHTML = element.innerHTML.slice(0, -2))
  );
});

// ingredient.innerHTML = ''



  textBox.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
      button.click()
    }
  })

  // for (let i = 0; i < response.data.drinks[0].strDrink.length; i++) {
  //   if (response.data.drinks[0].strIngredients1 === ingredientName) {
  //     ingredient1.innerHTML += response.data.drinks[0].strDrink + ', '
  //   } else if (response.data.drinks[0].strIngredients1 === ingredientName) {
  //     ingredient2.innerHTML += response.data.drinks[0].strDrink + ', '
  //   } else {
  //     ingredient.innerHTML = ''
  //   }
  //  }

  // const liquorName = ['vodka', 'whiskey', 'bourbon', 'gin', 'tequilla']
  // let drinkDescription = ''
  // drinkDescription = response.data.drinks[0].strIngredient1

  // switch(drinkDescription) {
  //   case 'vodka':
  //     ingredient.innerHTML += response.data.drinks[0].strDrink + ', '
  //     break;
  //   default:
  //     ingredient.innerHTML += ''
  // }