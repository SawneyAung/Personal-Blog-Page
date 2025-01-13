// Search Bar
const search = document.querySelector(".search-wrapper");

search.addEventListener("mouseover", () => {
    if (!search.classList.contains("active")) {
    search.classList.add("active");
    }
});

search.addEventListener("mouseout", () => {
    if (search.classList.contains("active")) {
    search.classList.remove("active");
    }
});