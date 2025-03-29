const ulCategories = document.querySelector("#categories");
const ulCategoriesItems = document.querySelectorAll(".item");

console.log("Number of categories: " + ulCategoriesItems.length);
// або: console.log("Number of categories: " + ulCategories.children.length);

ulCategoriesItems.forEach(element => {
    console.log('Category: ' + element.firstElementChild.textContent);
    console.log(`Elements: ${element.lastElementChild.childElementCount}`);
});
