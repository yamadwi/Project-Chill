// movie list carousel functionality
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


// Accordion functionality for footer sections
const accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach(title => {

    title.addEventListener("click", () => {

        title.classList.toggle("active");

        const content = title.nextElementSibling;

        content.classList.toggle("active");

    });

});


// Profile wrapper toggle functionality
const profileWrapper = document.querySelector(".profile-wrapper");

profileWrapper.addEventListener("click", () => {
    profileWrapper.classList.toggle("active");
});

document.addEventListener("click", (e) => {

    if(!profileWrapper.contains(e.target)){
        profileWrapper.classList.remove("active");
    }

});