let searchForm, searchInput, videoList, favoritesList;

function init() {
    searchForm = document.getElementById('searchForm');
    searchInput = document.getElementById('searchInput');
    videoList = document.getElementById('videoList');
    favoritesList = document.getElementById('favoritesList');

    searchForm.addEventListener('submit', handleSearchSubmit);
}

async function searchVideos(query) {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${process.env.YOUTUBE_API_KEY}`);
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
        return [];
    }
}

function handleSearchSubmit(event) {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query !== '') {
        searchVideos(query)
            .then(renderVideos)
            .catch(error => console.error('Erro ao buscar vídeos:', error));
    }
}

function renderVideos(videos) {
    videoList.innerHTML = videos.map(video => `
        <div>
            <h3>${video.snippet.title}</h3>
            <p>${video.snippet.description}</p>
            <button onclick="toggleFavorite('${video.id.videoId}')">Favoritar</button>
        </div>
    `).join('');
}

const favorites = new Set();

function toggleFavorite(videoId) {
    if (favorites.has(videoId)) {
        favorites.delete(videoId);
        removeFavorite(videoId);
    } else {
        favorites.add(videoId);
        renderFavorites();
    }
}

function removeFavorite(videoId) {
    const element = document.getElementById(videoId);
    if (element) {
        element.parentNode.removeChild(element);
    }
}

function renderFavorites() {
    favoritesList.innerHTML = Array.from(favorites).map(videoId => `
        <div id="${videoId}">
            <p>Vídeo favorito: ${videoId}</p>
            <button onclick="removeFavorite('${videoId}')">Remover</button>
        </div>
    `).join('');
}

module.exports = {
    searchVideos,
    renderVideos,
    toggleFavorite,
    removeFavorite,
    init,
    searchInput,
    searchForm,
    videoList,
    favoritesList,
    handleSearchSubmit
};
