const links = document.querySelectorAll(".item");

console.log(`Number of categories: ${links.length}`);


links.forEach(link => {
    const textTitle = link.querySelector("h2").textContent;
    const numbers = link.querySelectorAll("li").length;
    console.log(`Category: ${textTitle}`);
    console.log(`Elements: ${numbers}`);

})