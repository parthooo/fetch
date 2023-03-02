const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const displayCountry = (data) => {
    const countriesContainer = document.getElementById('allCountries')

    // for(const country of data){
    //     const countryDiv = document.createElement('div');
    //     countryDiv.classList.add('country');
    //     countryDiv.innerHTML = `
    //         <h3>Country : ${country.name.common}</h3>
    //         <h5>Capital : ${country.capital ? country.capital[0] : "No Capital"}</h5>
    //     `
    //     countriesContainer.appendChild(countryDiv)
    // }

    // we can get the same data using  foreach instead of "for of loop"
    data.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Country : ${country.name.common}</h3>
            <h5>Capital : ${country.capital ? country.capital[0] : "No Capital"}</h5>
            <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv)

        // console.log(country);
    });
}

    const loadCountryDetails = countryCode => {
        const url = `https://restcountries.com/v3.1/alpha/${countryCode}`
        fetch(url)
        .then(res => res.json())
        .then(data => showCountryDetails(data[0]))

        // console.log(url);
    }

    const showCountryDetails = country => {
        const detailContainer = document.getElementById('countryDetails')
        detailContainer.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <img src="${country.flags.png}">
        `
    }




loadCountry();