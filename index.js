function toggleMenu() {
    const menu = document.getElementById("list");
    menu.classList.toggle("active");
    }
    const menuBtn = document.querySelector(".menu-toggle");
    const menu = document.getElementById("list");

    menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    });