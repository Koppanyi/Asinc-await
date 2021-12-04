
const renderCountries = (arr) => {

    let returnHTML = "";
    for (const country of arr) {
        console.log(country.name.official);
        returnHTML += `<div>${country.name.official}</div>`;
    }
    return returnHTML;
};

async function loadEvent() {
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();

    document.getElementById("root").insertAdjacentHTML("beforeend", renderCountries(countryArr));
}


window.addEventListener("load", loadEvent);