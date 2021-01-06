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
let contryListDescriptionSelector = document.querySelectorAll("#country-list .country-list__container .country-list__container_description")
let contryListH3Selector = document.querySelectorAll("#country-list .country-list__container .country-list__container_description h3")

function boxContent (name, population, region, capital){
    let HTMLtext = `<h3>${name}</h3>
    <p>Population:<span>${population}</span></p>
    <p>Region:<span>${region}</span></p>
    <p>Capital:<span>${capital}</span></p>`;
    return HTMLtext
}

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

async function fetchBoxContent (){
    fetch("https://restcountries.eu/rest/v2/all")
    .then(data => data.json())
    .then(data => {
        contryListSelector.forEach(function (v, i,) {
            let name = data[i].name
            let population = data[i].population;
            let region = data[i].region;
            let capital = data[i].capital;
            let functionData = boxContent(name, population, region,capital);
            contryListDescriptionSelector[i].innerHTML = functionData
        })
        }
    );
}