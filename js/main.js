const menuBtn = document.getElementById("bar");
const navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("show");
};

const section = document.querySelectorAll("section");
const navlink = document.querySelectorAll(".header .navbar a");

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("show");

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 80;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navlink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
