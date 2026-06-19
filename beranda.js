const carousels = document.querySelectorAll(".movie-list");

document.querySelectorAll(".carousel-wrapper").forEach(wrapper => {

    const list = wrapper.querySelector(".movie-list");

    const next = wrapper.querySelector(".next");
    const prev = wrapper.querySelector(".prev");

    next.addEventListener("click", () => {
        list.scrollBy({
            left: 500,
            behavior: "smooth"
        });
    });

    prev.addEventListener("click", () => {
        list.scrollBy({
            left: -500,
            behavior: "smooth"
        });
    });

});