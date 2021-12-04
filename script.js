const renderCountries = (arr) => {  // country.name.official kiíratása
    let returnHTML = "";
    for (const country of arr) {
        console.log(country.name.official);
        returnHTML += `
        <div>${country.name.official}
        </div>
        `
    }
    return returnHTML;
}

const renderFlags = (arr) => {  // flag kép megjelenítése
    let returnHTML = "";
    for (const flag of arr) {
        returnHTML += `
        <img src="${flag.flags.png}">`
    }
    return returnHTML;
}

async function loadEvent() {

    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json(); // === arr

    //renderCountries(countryArr);

    document.getElementById("root").insertAdjacentHTML("beforeend", `<div id="countryNames">${renderCountries(countryArr)}</div>`);
    document.getElementById("root").insertAdjacentHTML("beforeend", `<div id="countryFlags">${renderFlags(countryArr)})</div>`);
}

window.addEventListener("load", loadEvent);