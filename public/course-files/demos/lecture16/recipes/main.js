function getResultsElement() {
    return document.querySelector("#results");
}

function showStatus(message, className = "status") {
    const results = getResultsElement();
    results.innerHTML = `<p class="${className}">${message}</p>`;
}

window.handleCategoryChange = async function handleCategoryChange() {
    const category = document.querySelector("#category-select").value;
    if (!category) {
        return;
    }
    await fetchData(category);
};

async function fetchData(category) {
    const rootURL = "https://www.themealdb.com/api/json/v1/1/filter.php";
    const endpoint = `${rootURL}?c=${encodeURIComponent(category)}`;

    showStatus(`Loading ${category} recipes...`);

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const serverData = await response.json();
        displayData(serverData.meals || []);
    } catch (error) {
        console.error(error);
        showStatus("Sorry, something went wrong while loading recipes.", "status error");
    }
}

function displayData(meals) {
    const results = getResultsElement();

    if (!meals.length) {
        showStatus("No recipes found for this category.");
        return;
    }

    results.innerHTML = meals
        .map((meal) => {
            return `
                <article class="card">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="card-image">
                    <div class="card-body">
                        <h2>${meal.strMeal}</h2>
                        <p>Meal ID: ${meal.idMeal}</p>
                    </div>
                </article>
            `;
        })
        .join("");
}
