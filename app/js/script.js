//--------------------------------------------Navbar visibility 
const navbar = document.querySelector(".navbar-container");
const section = document.getElementById("header");

const activationPoint = {
  rootMargin: "-50px 0px 0px 0px"
};
const headerSectionObserver = new IntersectionObserver(
    function (e, headerSectionObserver) {
        e.forEach(entry => {
            if (!entry.isIntersecting) {
                navbar.style.top="0";
                navbarList.style.transition=".4s ease-in-out";
                console.log(entry);
            } else {
                navbarList.style.transition="0s"
                navbarList.classList.remove("navbar-list-active");
                navbarBtn.classList.remove("toggle-nb");               
                navbarLinks.forEach((link, i)=>{
                link.style.animation="";
            });
            navbar.style.top="-5.5rem";
            }
        });
    },
activationPoint);

headerSectionObserver.observe(section);




//--------------------------------------------Scroll movement effect
const dataTarget = document.querySelectorAll('[data-target]');
const dataContent = document.querySelectorAll('[data-content]');
//------------Open tabs aside
const tabSideBtn = document.querySelector(".tab-side-btn");

dataTarget.forEach((link) => {
  link.addEventListener("click", () => {
    const select = document.querySelector(link.dataset.target);
    
    if (select.classList.contains("tab-side")) {
        select.classList.add("tab-side-active");
        tabSideBtn.classList.add("tsb-active");
        tabSideBtn.addEventListener("click", ()=>{
            select.classList.remove("tab-side-active");
            tabSideBtn.classList.remove("tsb-active");
        })
    } else {      
      select.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});




//--------------------------------------------Navbar Menu effect
const navbarBtn = document.querySelector(".navbar-buttom");
const navbarList = document.querySelector(".navbar-list");
const navbarLinks = document.querySelectorAll(".navbar-link"); 
navbarBtn.addEventListener("click", ()=>{
    //toggle navbar    
    navbarList.classList.toggle("navbar-list-active");    
    navbarBtn.classList.toggle("toggle-nb");
    //animation links
    navbarLinks.forEach((link, i)=>{
        link.style.animation? link.style.animation="" : link.style.animation=`linksFade 0.4s ease forwards ${i / 15 + 0.1}s`;
    })
})

