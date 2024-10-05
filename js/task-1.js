const categoriesList = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('ul li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
