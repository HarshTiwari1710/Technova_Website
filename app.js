const navReponsive = document.querySelector(".nav-responsive");

const collapse = document.querySelector(".collapse-div");

const nav = document.querySelector("nav ul");

const close = document.querySelector(".close-div");

const clubData = document.querySelectorAll(".club-data");

const sectionInfo = document.querySelector("#info");

let appended = false;
const hr = document.createElement("hr");
collapse.addEventListener("click", function () {
  close.classList.add("active");
  collapse.classList.add("remove");
  if (!appended) addChildren();
  nav.classList.add("responsive");
});

close.addEventListener("click", function () {
  close.classList.remove("active");
  nav.classList.remove("responsive");
  collapse.classList.remove("remove");
});

window.addEventListener("resize", function () {
  try {
    if (window.visualViewport.width > 900) removeChild();
    else addChildren();
  } catch (error) {}
});

function addChildren() {
  nav.appendChild(hr);
  appended = true;
}

function removeChild() {
  nav.removeChild(hr);
  appended = false;
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) navReponsive.style.opacity = 0.5;
  else navReponsive.style.opacity = 1;
});

// INCREMENTING COUNTER
window.addEventListener("scroll", listenEvent);

function listenEvent() {
  clubData.forEach((club) => {
    club.innerText = "0";
    const getData = () => {
      let target = +club.getAttribute("data-attribute");
      const current = +club.innerText;

      const increment = +target / 40;
      if (current < target) {
        club.innerText = `${Math.ceil(increment) + current}`;
        setTimeout(getData, 50);
      } else {
        club.innerText = target + "+";
      }
    };
    if (sectionInfo.getBoundingClientRect().top <= 60) {
      getData();
      window.removeEventListener("scroll", listenEvent);
    }
  });
}
