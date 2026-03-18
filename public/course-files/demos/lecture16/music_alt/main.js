function getResultsElement() {
    return document.querySelector("#results");
}

function getPreviewPlayer() {
    return document.querySelector("#preview-player");
}

function getPreviewStatus() {
    return document.querySelector("#preview-status");
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
    const rootURL = "https://itunes.apple.com/search";
    const endpoint = `${rootURL}?term=${encodeURIComponent(searchTerm)}&entity=song&limit=10`;

    showStatus(`Loading songs for "${escapeHTML(searchTerm)}"...`);

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const serverData = await response.json();
        displayData(serverData.results || []);
    } catch (error) {
        console.error(error);
        showStatus("Sorry, something went wrong while loading songs.", "status error");
    }
}

window.playPreview = function playPreview(buttonElement) {
    const previewURL = buttonElement.dataset.previewUrl;
    const trackName = buttonElement.dataset.trackName;
    const artistName = buttonElement.dataset.artistName;
    const player = getPreviewPlayer();
    const status = getPreviewStatus();

    if (!previewURL) {
        status.textContent = "Sorry, no audio preview is available for this song.";
        player.removeAttribute("src");
        player.load();
        return;
    }

    player.src = previewURL;
    player.load();
    player.play().catch((error) => {
        console.error(error);
    });
    status.textContent = `Now playing: ${trackName} by ${artistName}`;
};

function displayData(tracks) {
    const results = getResultsElement();

    if (!tracks.length) {
        showStatus("No songs matched your search.");
        return;
    }

    results.innerHTML = tracks
        .map((track) => {
            const trackName = escapeHTML(track.trackName);
            const artistName = escapeHTML(track.artistName);
            const albumName = escapeHTML(track.collectionName);
            const artworkURL = escapeHTML(track.artworkUrl100);
            const previewURL = escapeHTML(track.previewUrl || "");

            return `
                <article class="card">
                    <img src="${artworkURL}" alt="${trackName}" class="card-image">
                    <div class="card-body">
                        <h2>${trackName}</h2>
                        <p><strong>Artist:</strong> ${artistName}</p>
                        <p><strong>Album:</strong> ${albumName}</p>
                        <button
                            class="preview-button"
                            onclick="playPreview(this)"
                            data-preview-url="${previewURL}"
                            data-track-name="${trackName}"
                            data-artist-name="${artistName}">
                            Play Preview
                        </button>
                    </div>
                </article>
            `;
        })
        .join("");
}