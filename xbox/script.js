const btnScrollTo = document.querySelector("#btnScrollToTop");

btnScrollTo.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    })
})


window.addEventListener("scroll", function(){
    const nav = document.querySelector(".container-navbar");
    nav.classList.toggle("down", window.scrollY>0);
})