

/*Toggle Navbar */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
} 

if (location.hash !== "") {
    document.querySelector(location.hash).classList.add("active");
}   

/*Active Sections   */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
        document.querySelector(".overlay").classList.add("active");
        console.log(e.target.hash);
        navToggler.classList.add("hide");
        if (e.target.classList.contains("nav-item")) {
            toggleNavbar();
        } else {
           hideSection();
           document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 100);
    }        
});



window.onload = function() {
    if (document.querySelector("section.active") === null){
    document.querySelector("#home").classList.add("active");
    }
    else{
        document.querySelector("section.active").classList.remove("active", "fade-out");
        document.querySelector(location.hash).classList.add("active");
        window.scrollTo(0, 0);
        document.body.classList.remove("hide-scrolling");
        navToggler.classList.remove("hide");
        document.querySelector(".overlay").classList.remove("active");
    }
}


window.onhashchange = function() {
        console.log(location.hash);  
    
    if (location.hash !== "") {
    setTimeout(() => {
        
        document.querySelector("section.active").classList.remove("active", "fade-out");
        document.querySelector(location.hash).classList.add("active");
        window.scrollTo(0, 0);
        document.body.classList.remove("hide-scrolling");
        navToggler.classList.remove("hide");
        document.querySelector(".overlay").classList.remove("active");
    }, 100);
   }else{
    setTimeout(() => {
        document.querySelector("section.active").classList.remove("active", "fade-out");
        document.querySelector("#home").classList.add("active");
        window.scrollTo(0, 0);
        document.body.classList.remove("hide-scrolling");
        navToggler.classList.remove("hide");
        document.querySelector(".overlay").classList.remove("active");
    }, 100);
   }
}



/*About Tabs */
const tabsContainer = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("tab-item") &&
        !e.target.classList.contains("active")
    ) {
        tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
        // Activate new tab
        e.target.classList.add("active", "outer-shadow");
        const target = e.target.getAttribute("data-target");
        // Deactivate existing active 'tab-content'
        aboutSection
            .querySelector(".tab-content.active")
            .classList.remove("active");
        // Activate new 'tab-content'
        aboutSection.querySelector(target).classList.add("active");
    }
});

/* Portfolio Item Details Popup */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn") && e.target.classList.contains("thumbnailimage")) {
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0, 0);
        portfolioItemDetails(e.target.parentElement.parentElement);
    }else if(e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0, 0);
        portfolioItemDetails(e.target.parentElement);
}
});


function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// Hide popup when clicking outside of it
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
        togglePortfolioPopup();
    }});
function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src =
        portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
    document.querySelector(".pp-header h3").innerHTML =
        portfolioItem.querySelector(".portfolio-item-title").innerHTML;
    document.querySelector(".pp-body").innerHTML =
        portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

    


