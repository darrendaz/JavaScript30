const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

fetch(endpoint)
    .then(resp => resp.json())
    .then(data => cities.push(...data))

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex)
    })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches(){
    const input = this.value
    const matchArray = findMatches(input, cities)

    const html = matchArray.map(match => {
        const regex = RegExp(this.value, 'gi')
        const cityName = match.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = match.state.replace(regex, `<span class="hl">${this.value}</span>`)
        const populationWithCommas = numberWithCommas(match.population)

        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${populationWithCommas}</span>
            </li>
        `
    }).join('')

    const suggestions = document.querySelector('.suggestions')
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')


searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)