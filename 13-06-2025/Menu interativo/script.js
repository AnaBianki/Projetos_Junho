const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    sideMenu.classList.toggle("active");
});