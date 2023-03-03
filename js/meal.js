const loadmeal = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => mealContainer(data.meals))
}

const mealContainer = data => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    data.forEach(meals => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card">
            <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meals.strMeal}</h5>
                <p class="card-text">${meals.strInstructions}</p>
                <button onclick="loadMealDetail(${meals.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                    Details
                </button>
            </div>
        </div>
        `
        mealContainer.appendChild(mealDiv)
        // console.log(meals);
    });
}

const btnSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchtext = searchField.value;
    searchField.value = '';

    loadmeal(searchtext);
}

const loadMealDetail = idMeal => {
    url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = mealModal => {
    console.log(mealModal);
    document.getElementById('mealDetailsLabel').innerText = mealModal.strMeal;
    document.getElementById('modal-body').innerHTML = `
    <img class="img-fluid" src="${mealModal.strMealThumb}">`
}


loadmeal('rice');