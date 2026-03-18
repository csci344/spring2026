function getResultsElement() {
    return document.querySelector("#results");
}

function escapeHTML(text) {
    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function showStatus(message, className = "status") {
    const results = getResultsElement();
    results.innerHTML = `<p class="${className}">${message}</p>`;
}

window.handleSongKeydown = function handleSongKeydown(event) {
    if (event.key === "Enter") {
        handleSongSearch();
    }
};

window.handleSongSearch = async function handleSongSearch() {
    const searchTerm = document.querySelector("#search-input").value.trim();

    if (!searchTerm) {
        showStatus("Please enter a song or artist to search for.", "status error");
        return;
    }

    await fetchData(searchTerm);
};

async function fetchData(searchTerm) {
    const rootURL = "https://www.apitutor.org/spotify/simple/v1/search?type=track";
    const endpoint = `${rootURL}&q=${encodeURIComponent(searchTerm)}`;
    console.log(endpoint);

    showStatus(`Loading songs for "${escapeHTML(searchTerm)}"...`);

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const serverData = await response.json();
        displayData(serverData || []);
    } catch (error) {
        console.error(error);
        showStatus("Sorry, something went wrong while loading songs.", "status error");
    }
}

function buildTrackEmbed(track) {
    console.log(track);
  return `
        <iframe 
            data-testid="embed-iframe" 
            style="border-radius:12px" 
            src="https://open.spotify.com/embed/track/${track.id}" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"></iframe>
    `;
}

function displayData(tracks) {
    const results = getResultsElement();

    if (!tracks.length) {
        showStatus("No songs matched your search.");
        return;
    }

    results.innerHTML = tracks
        .map((track) => buildTrackEmbed(track))
        .join("");
}