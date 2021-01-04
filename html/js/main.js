let listSelector = document.querySelector("#select");
let optionsSelector = document.querySelector("#options");
let modeSelector = document.querySelector("#mode");
let headerSelector = document.querySelector("#header");
let moonSelector = document.querySelector("#moon");
let searchBarSelector = document.querySelector("#search-Bar");
let searchBarListSelector = document.querySelector("#search-Bar-List");
let searchBarImputSelector = document.querySelector("#search-Bar-Imput");
let contentSelector = document.querySelector("#content");
let optiontSelector = document.querySelector("#option");

select.addEventListener("click", ()=> {
    options.classList.toggle("active");
});

mode.addEventListener("click", () =>{
    headerSelector.classList.toggle("mode-White")
    moonSelector.classList.toggle("fas")
    moonSelector.classList.toggle("far")
    searchBarSelector.classList.toggle("mode-White-Search")
    searchBarListSelector.classList.toggle("mode-White-List")
    optionsSelector.classList.toggle("mode-White-List")
    contentSelector.classList.toggle("mode-white-content")
    optiontSelector.classList.toggle("mode-White-List")
} )

