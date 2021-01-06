let listSelector = document.querySelector("#select");
let listSpanSelector = document.querySelector("#select .searching-Bar_List_select_content span");
let inputList = document.querySelector("#inputRegion");
let optionsSelector = document.querySelector("#options");
let modeSelector = document.querySelector("#mode");
let headerSelector = document.querySelector("#header");
let moonSelector = document.querySelector("#moon");
let searchBarSelector = document.querySelector("#search-Bar");
let searchBarListSelector = document.querySelector("#search-Bar-List");
let searchBarImputSelector = document.querySelector("#search-Bar-Imput");
let contentSelector = document.querySelector("#content");
let optiontSelector = document.querySelector("#option");
let popSelector = document.querySelector("#pop");
let backButtonSelector = document.querySelector("#pop .popHeader .backButton");
let contryListSelector = document.querySelectorAll("#country-list .country-list__container")
let contryListH3Selector = document.querySelectorAll("#country-list .country-list__container .country-list__container_description h3")

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
    popSelector.classList.toggle("mode-White")
} )

document.querySelectorAll(".hover-list span").forEach((opcion) => {
    opcion.addEventListener("click", (e) => {
        e.preventDefault();
        listSpanSelector.innerHTML = e.currentTarget.innerHTML;
        inputList.value = e.currentTarget.innerHTML;
        options.classList.toggle("active");
    })
})

contryListSelector.forEach((country) => {
    country.addEventListener("click", () => {
        popSelector.classList.toggle("active")
        contentSelector.classList.toggle("none")
    })
})

backButtonSelector.addEventListener("click", ()=>{
    popSelector.classList.toggle("active")
    contentSelector.classList.toggle("none")
})