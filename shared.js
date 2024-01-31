function updateDrinkCard(selectedDrink) {
  const {
    strDrink,
    strDrinkThumb,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8
  } = selectedDrink;

  document.querySelector('.instructions').innerHTML = strInstructions;
  document.querySelector('.drink-name').innerHTML = strDrink;
  document.querySelector('.drink-picture').innerHTML = `<img src='${strDrinkThumb}/preview'/>`;
  document.querySelector('.ingredients1').innerHTML = strIngredient1;
  document.querySelector('.ingredients2').innerHTML = strIngredient2;
  document.querySelector('.ingredients3').innerHTML = strIngredient3;
  document.querySelector('.ingredients4').innerHTML = strIngredient4;
  document.querySelector('.ingredients5').innerHTML = strIngredient5;
  document.querySelector('.ingredients6').innerHTML = strIngredient6;
  document.querySelector('.ingredients7').innerHTML = strIngredient7;
  document.querySelector('.ingredients8').innerHTML = strIngredient8;
}

// Expose the function to the global scope
window.updateDrinkCard = updateDrinkCard;