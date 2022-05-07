///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

const filterContainer = document.querySelector(".portfolio-filter-inner");
const filterBtns = filterContainer.children;
const totalFilterBtn = filterBtns.length;
const portfolioItems = document.querySelectorAll(".portfolio-item");
const totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");
    for (let i = 0; i < totalPortfolioItem; i++) {
      if (filterValue === portfolioItems[i].getAttribute("data-category")) {
        portfolioItems[i].classList.remove("hide");
        portfolioItems[i].classList.add("show");
      } else {
        portfolioItems[i].classList.add("hide");
        portfolioItems[i].classList.remove("show");
      }
      if (filterValue === "all") {
        portfolioItems[i].classList.remove("hide");
        portfolioItems[i].classList.add("show");
      }
    }
  });
}

document.addEventListener("click", function (e) {
  // e.preventDefault();
  if (e.target.matches(".close") || !e.target.closest(".container-t")) {
    document.getElementById("contact-image").style.display = "block";
    document.querySelector(".content").style.display = "none";
  }
});

// sticky nav bar
const sectionFirstEl = document.querySelector(".section-first");
const navbar = document.querySelector(".main-nav");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);
    // console.log(navbar.offsetTop);
    if (!ent.isIntersecting) {
      // document.querySelector(".header").classList.add("sticky");
      if (document.querySelector(".section-first").id === "summer") {
        document.querySelector(".header").classList.add("sticky-summer");
      } else document.querySelector(".header").classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.querySelector(".header").classList.remove("sticky");
      if (document.querySelector(".section-first").id === "summer") {
        document.querySelector(".header").classList.remove("sticky-summer");
      } else document.querySelector(".header").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    // rootMargin
  }
);

obs.observe(sectionFirstEl);

// Theme change
const navElements = document.querySelectorAll(".main-nav-link");
const thumbnailElements = document.querySelectorAll(
  ".portfolio-item-thumbnail"
);
const theme = document.getElementById("summer");
const terms = document.querySelectorAll(".term");
const moreButtons = document.querySelectorAll(".more-button");
const waveImg = document.querySelectorAll(".move");
// console.log(document.querySelector(".sticky") && "hi");

const themeChange = () => {
  //SUMMER
  if (document.querySelector(".section-first").id === "spring") {
    document.querySelector(".section-first").setAttribute("id", "summer");
    document.querySelector(".button").setAttribute("id", "spring-btn");
    document.querySelector(".button").innerHTML = "Spring";
    // document
    //   .querySelector(".heading-primary")
    //   .setAttribute("id", "heading-primary-summer");
    // document
    //   .querySelector(".description")
    //   .setAttribute("id", "description-summer");
    waveImg.forEach((link) => {
      link.style.display = "flex";
    });
    document.querySelector(".header").setAttribute("id", "header-summer");
    document
      .querySelector(".firstPage-text-box")
      .setAttribute("id", "firstPage-text-box-summer");

    // document.querySelector(".bubbles").style.display = "";

    document.querySelector(".flowers").style.display = "none";
    document.querySelector(".flowers-ground").style.display = "none";
    document.querySelector(".heading-primary").innerHTML = "Hello, Summer!";

    document.querySelector(".description").innerHTML =
      "A like without love is like a year without summer";
    //swedish

    document.querySelector(".secondPage").style.backgroundImage = "none";
    document.querySelector(".secondPage").style.backgroundColor = "#C3E5AE";
    document.querySelector(".intro-description").style.color = "#1D4116";
    document.querySelector(".title").style.color = "#1D4116";

    navElements.forEach((link) => {
      link.className = "main-nav-link-summer";
    });

    document.querySelector(".portfolio").classList.add("section-third-summer");
    document.querySelector(".portfolio").classList.remove("section-third");

    document
      .getElementById("portfolio-title")
      .setAttribute("id", "portfolio-title-summer");
    document.getElementById("portfolio-filter").className =
      "portfolio-filter-summer";
    thumbnailElements.forEach(
      (link) => (link.className = "portfolio-item-thumbnail-summer")
    );
    terms.forEach((link) => link.setAttribute("id", "term-summer"));
    moreButtons.forEach((link) =>
      link.setAttribute("id", "more-button-summer")
    );
    document.getElementById("fourthPage").className = "fourthPage-summer";
    // document.querySelector(".content").setAttribute("id", "content-summer");
    document.querySelector(".addMe").setAttribute("id", "addMe-summer");
    document.querySelector(".contact-title").className = "contact-title-summer";
    // document.querySelector(".submit").setAttribute("id", "submit-summer");
    document
      .getElementById("contact-image")
      .setAttribute("src", "/img/summer/shark.png");
    document.querySelector(".container-t").style.left = "25%";

    document.querySelector(".footer").setAttribute("id", "footer-summer");
    document.querySelectorAll(".social-icon").forEach((link) => {
      link.setAttribute("id", "social-icon-summer");
    });
    document.querySelector(".copyright").setAttribute("id", "copyright-summer");
  } else {
    document.querySelector(".section-first").setAttribute("id", "spring");
    document.querySelector(".button").setAttribute("id", "summer-btn");
    document.querySelector(".button").innerHTML = "Summer";
    document.querySelector(".heading-primary").setAttribute("id", "");
    document.querySelector(".description").setAttribute("id", "");
    waveImg.forEach((link) => {
      link.style.display = "none";
    });
    document.querySelector(".header").setAttribute("id", "");
    document.querySelector(".firstPage-text-box").setAttribute("id", "");

    // document.querySelector(".bubbles").style.display = "none";
    document.querySelector(".flowers").style.display = "";
    document.querySelector(".flowers-ground").style.display = "";
    document.querySelector(".heading-primary").innerHTML = "Hello, Spring!";
    document.querySelector(".description").innerHTML =
      "Spring is nature's way of saying, Let's Party!" +
      "<br>" +
      "Let us get socked in flower rain.";
    document.querySelector(".secondPage").style.backgroundColor = "none";
    document.querySelector(".secondPage").style.backgroundImage = "";
    document.querySelector(".intro-description").style.color = "#46244c";
    document.querySelector(".intro-description").style.backgroundImage = "";
    document.querySelector(".title").style.color = "#46244c";
    //
    document.querySelectorAll(".main-nav-link-summer").forEach((link) => {
      link.className = "main-nav-link";
    });

    document
      .querySelector(".portfolio")
      .classList.remove("section-third-summer");
    document.querySelector(".portfolio").classList.add("section-third");

    document
      .getElementById("portfolio-title-summer")
      .setAttribute("id", "portfolio-title");
    document.getElementById("portfolio-filter").className = "portfolio-filter";
    document
      .querySelectorAll(".portfolio-item-thumbnail-summer")
      .forEach((link) => (link.className = "portfolio-item-thumbnail"));

    document.querySelector(".term").setAttribute("id", "term");
    terms.forEach((link) => link.setAttribute("id", "term"));
    moreButtons.forEach((link) => link.setAttribute("id", "more-button"));
    document.getElementById("fourthPage").className = "fourthPage";
    // document.querySelector(".content").setAttribute("id", "content");
    document.querySelector(".addMe").setAttribute("id", "");

    document.querySelector(".contact-title-summer").className = "contact-title";
    // document.querySelector(".submit").setAttribute("id", "submit");
    document
      .getElementById("contact-image")
      .setAttribute("src", "/img/springImg/contactBtn.png");
    document.querySelector(".container-t").style.left = "35%";

    document.querySelector(".footer").setAttribute("id", "");

    document.querySelectorAll(".social-icon").forEach((link) => {
      link.setAttribute("id", "");
    });
    document.querySelector(".copyright").setAttribute("id", "");
  }
};
