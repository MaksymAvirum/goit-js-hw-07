const ulCategories = document.querySelector("#categories");
const ulCategoriesItems = document.querySelectorAll(".item");

console.log("Number of categories: " + ulCategories.childElementCount);

ulCategoriesItems.forEach(element => {
    console.log('Category: ' + element.firstElementChild.textContent);
    console.log(`Elements: ${element.lastElementChild.childElementCount}`);
});


