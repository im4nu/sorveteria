let show = true;

const menuSection = document.querySelector(".menu_section")
const menuIcom = document.querySelector(".material-symbols-outlined")

menuIcom.addEventListener("click", () => {

    menuSection.classList.toggle("on", show)
    show =!show;
})