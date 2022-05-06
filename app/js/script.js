//--------------------------------------------Screen Size adjustment (mobile)
const documentHeight = () => {
  const doc= document.documentElement;
    var w = doc.clientWidth;
    var h = doc.clientHeight;
  doc.style.setProperty("--doc-width", `${w}px`);
  doc.style.setProperty("--doc-height", `${h}px`);
  console.log(`Width: ${w}px , height: ${h}px`);
};
window.addEventListener("resize", documentHeight);

documentHeight();

//--------------------------------------------Navbar visibility
const navbar = document.querySelector(".navbar-container");
const section = document.getElementById("header");

const activationPoint = {
  rootMargin: "-50px 0px 0px 0px",
};
const headerSectionObserver = new IntersectionObserver(function (e, headerSectionObserver) {
  e.forEach((entry) => {
    if (!entry.isIntersecting) {
      navbarTranslateIn();
      navbarList.style.transition = ".4s ease-in-out";
      //console.log(entry);
    } else {
      navbarList.classList.remove("navbar-list-active");
      navbarBtn.classList.remove("toggle-nb");
      navbarLinks.forEach((link, i) => {
        link.style.animation = "";
      });
      navbarTranslateOut();
    }
  });
}, activationPoint);

headerSectionObserver.observe(section);

function navbarTranslateIn(){
  navbar.style.transform = "translateY(0rem)";
}

function navbarTranslateOut(){
  navbar.style.transform = "translateY(-4.7rem)";
}



//--------------------------------------------Scroll movement effect
const dataTarget = document.querySelectorAll("[data-target]");
const dataContent = document.querySelectorAll("[data-content]");
dataTarget.forEach((link) => {
  link.addEventListener("click", () => {
    const select = document.querySelector(link.dataset.target);

    if (select.classList.contains("tab-side")) {
      if(navbarBtn.classList.contains("toggle-nb")){
        navbarEffect();
      }
      setTimeout(function(){tabSide(select)}, 500);         
    } else {
      select.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
//------------Open tabs aside in
function tabSide(select){
  const tabSideBtn = document.querySelector(".tab-side-btn");
  select.classList.add("tab-side-active");
  tabSideBtn.classList.add("tsb-active");
  tabSideBtn.addEventListener("click", () => {
    select.classList.remove("tab-side-active");
    tabSideBtn.classList.remove("tsb-active");
    clearTimeout(tabSide);       
  });
}



//--------------------------------------------Navbar Menu effect
const navbarBtn = document.querySelector(".navbar-buttom");
const navbarList = document.querySelector(".navbar-list");
const navbarLinks = document.querySelectorAll(".navbar-link");  
navbarBtn.addEventListener("click", () => {
  navbarEffect(); 
});

//toggle navbar
function navbarEffect(){
  navbarList.classList.toggle("navbar-list-active");   
  navbarBtn.classList.toggle("toggle-nb");
  if(navbarList.classList.contains("navbar-list-active")){
    navbarList.style.visibility = "visible";
    navbarList.style.animation = "navbarBoxOut 0.4s ease-in-out";    
  } else{     
      navbarList.style.animation = "navbarBoxIn 0.4s ease-in-out .4s backwards";
      setTimeout(visibility, 700);
    }
  navbarLinks.forEach((link, i) => {
    if(navbarList.classList.contains("navbar-list-active")){
      link.style.animation = `linksFadeIn 0.4s ease forwards ${i / 15 + 0.1}s`;
    } else{ 
        link.style.animation = `linksFadeOut 0.4s ease backwards ${i / 15 + 0.1}s`;
      }
  });
}

function visibility(){
  navbarList.style.visibility = "hidden";  
  clearTimeout(visibility); 
}