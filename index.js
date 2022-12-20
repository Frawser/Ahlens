const navLink = document.querySelector(".nav-inredning");
const navBlock = document.querySelector(".nav-block");

navLink.addEventListener("mouseenter", () => {
    navBlock.style.height = "366px";
});

navBlock.firstElementChild.addEventListener("mouseleave", () => {
    navBlock.style.height = "0px";
});
