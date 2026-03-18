function getResultsElement() {
    return document.querySelector("#results");
}

function showStatus(message, className = "status") {
    const results = getResultsElement();
    results.innerHTML = `<p class="${className}">${message}</p>`;
}

window.handleRestaurantKeydown = function handleRestaurantKeydown(event) {
    if (event.key === "Enter") {
        handleRestaurantSearch();
    }
};

window.handleRestaurantSearch = async function handleRestaurantSearch() {
    const cuisine = document.querySelector("#cuisine").value.trim();
    const location = document.querySelector("#location").value.trim();

    if (!cuisine || !location) {
        showStatus("Please enter both a cuisine and a location.", "status error");
        return;
    }

    await fetchData(cuisine, location);
};

async function fetchData(cuisine, location) {
    const rootURL = "https://www.apitutor.org/yelp/simple/v3/businesses/search";
    const endpoint = `${rootURL}?location=${encodeURIComponent(location)}&term=${encodeURIComponent(cuisine)}&limit=9`;

    showStatus(`Loading ${cuisine} restaurants near ${location}...`);

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const serverData = await response.json();
        displayData(serverData);
    } catch (error) {
        console.error(error);
        showStatus("Sorry, something went wrong while loading restaurants.", "status error");
    }
}

function displayData(restaurants) {
    const results = getResultsElement();

    if (!restaurants.length) {
        showStatus("No restaurants matched your search.");
        return;
    }

    results.innerHTML = restaurants
        .map((restaurant) => {
            return `
                <article class="card">
                    <img src="${restaurant.image_url}" alt="${restaurant.name}" class="card-image">
                    <div class="card-body">
                        <h2>${restaurant.name}</h2>
                        <p><strong>Rating:</strong> ${restaurant.rating} / 5</p>
                        <p><strong>Price:</strong> ${restaurant.price || "Not listed"}</p>
                        <p><strong>Reviews:</strong> ${restaurant.review_count}</p>
                        <p>${restaurant.display_address}</p>
                    </div>
                </article>
            `;
        })
        .join("");
}
