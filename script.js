document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const dropdowns = document.querySelectorAll(".dropdown");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function (event) {
            event.stopPropagation();
            this.classList.toggle("active");
        });
    });
});
