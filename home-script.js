
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

  ingredients.forEach((element) => (element.innerHTML = ''));

  for (let i = 0; i < Math.min(20, response.data.drinks.length); i++) {  
    let drink = response.data.drinks[i].strDrink;
    ingredients[i].innerHTML += drink + ', ';
  }

  ingredients.forEach(
    (element) => (element.innerHTML = element.innerHTML.slice(0, -2))
  );
});

  textBox.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
      button.click()
    }
  })
