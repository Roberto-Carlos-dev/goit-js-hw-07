const categoriesLi = document.querySelector("#categories");
const categoriesItems = categoriesLi.children;
const liCategoriesCount = categoriesItems.length;
console.log(`Number of categories: ${liCategoriesCount}`);

const categoriesArrey = [...categoriesItems];
categoriesArrey.forEach((item) => {
    const categoriesTitle = item.querySelector("h2").textContent;
    const categoriesItemsCount = item.querySelectorAll("li").length;
    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${categoriesItemsCount}`);
})
