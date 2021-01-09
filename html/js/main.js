let listSelector = document.querySelector("#select");
let listSpanSelector = document.querySelector("#select .searching-Bar_List_select_content span");
let inputList = document.querySelector("#inputRegion");
let searchCountry = document.querySelector("#countrySearch");
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
let contryListSelector = document.querySelectorAll("#country-list .country-list__container");
let contryListDescriptionSelector = document.querySelectorAll("#country-list .country-list__container .country-list__container_description");
let contryListH3Selector = document.querySelectorAll("#country-list .country-list__container .country-list__container_description h3");

function boxContent (name, population, region, capital,imagen){
    let HTMLtext = 
    `   <div class="country-list" id="country-list">
    <div class="country-list__container">
    <div class="country-list__container_img"><img src="${imagen}"/></div>
    <div class="country-list__container_description">
    <h3>${name}</h3>
    <p>Population:<span>${population}</span></p>
    <p>Region:<span>${region}</span></p>
    <p>Capital:<span>${capital}</span></p>
    </div>
    </div>
    </div>`;
    return HTMLtext
};

function activePop () {
    contryListSelector = document.querySelectorAll("#country-list .country-list__container");
    contryListSelector.forEach((country) => {
    country.addEventListener("click", () => {
        popSelector.classList.toggle("active")
        contentSelector.classList.toggle("none")
    })
});
}


async function getHTMLwithCountrys (bd) {
    for (i=0;i<bd.length;i++) {
        let name = bd[i].name
        let population = bd[i].population;
        let region = bd[i].region;
        let capital = bd[i].capital;
        let imagen = bd[i].flag;
        let functionData = await boxContent(name, population, region, capital, imagen);
        contentSelector.insertAdjacentHTML("beforeend",functionData)
    }
    activePop ()
}




listSelector.addEventListener("click", ()=> {
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
} );

async function getCountriesByWrite (bd, searchValue) {
    contentSelector.innerHTML = "";
    for (i = 0; i < bd.length; i++) {
        if (bd[i].name.toLowerCase().indexOf(searchValue) == 0) {
            let name = bd[i].name
            let population = bd[i].population;
            let region = bd[i].region;
            let capital = bd[i].capital;
            let imagen = bd[i].flag;
            let functionData = boxContent(name, population, region, capital, imagen);
            contentSelector.insertAdjacentHTML("beforeend",functionData)
        } 
        else {
        }
    }
}





document.querySelectorAll(".hover-list span").forEach( async (opcion) => {
    opcion.addEventListener("click", async (e) => {
        e.preventDefault();
        let Imputlowercase = "filter by region ";
        let movingName = listSpanSelector.innerHTML;
        listSpanSelector.innerHTML = e.currentTarget.innerHTML;
        inputList.value = e.currentTarget.innerHTML;
        e.currentTarget.innerHTML = movingName;
        Imputlowercase = inputList.value.toLowerCase()
        options.classList.toggle("active");
        contentSelector.innerHTML = "";
        try {
            let bd = "";
            if (Imputlowercase === "filter by region "){
                bd = await fetch("https://restcountries.eu/rest/v2/all")
            }
            else bd =await fetch(`https://restcountries.eu/rest/v2/region/${Imputlowercase}`)
            
            let bdJson = await bd.json();
            getHTMLwithCountrys(bdJson);
            
            const searchingText = async (e) => {
                searchValue = e.target.value;
                contentSelector.innerHTML = "";
                try {
                    getCountriesByWrite(bdJson, searchValue);
                } 
                catch (error) {
                    console.log("error mijo")
                }
                activePop ()
            };
            searchCountry.addEventListener("keyup", searchingText);
            
        } catch (error) {
            console.log("erorr mijo")
        }
    })
});



backButtonSelector.addEventListener("click", ()=>{
    popSelector.classList.toggle("active")
    contentSelector.classList.toggle("none")
});


async function startingPage () {
    let bd = await fetch("https://restcountries.eu/rest/v2/all");
    bdJson = await bd.json();
    getHTMLwithCountrys(bdJson)
    const searchingText = async (e) => {
        searchValue = e.target.value;
        contentSelector.innerHTML = "";
        try {
            getCountriesByWrite(bdJson, searchValue);
        } 
        catch (error) {
            console.log("error mijo")
        }
        activePop ()
    };
    searchCountry.addEventListener("keyup", searchingText);
}
startingPage()