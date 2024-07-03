let searchInput, videoList, favoritesCountElement;
let favorites = new Set();
const apiKey = 'AIzaSyDa_8-dBNVEHfoR3AQOfcUXdVAj9cEltvE'; 

function init() {
    searchInput = document.getElementById('search_input');
    videoList = document.getElementById('videoList');
    favoritesCountElement = document.getElementById('favorites-count');

    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearchSubmit);
    }

    loadFavorites();
    renderFavorites();

    const pathname = window.location.pathname;
    if (pathname.includes('favorite.html')) {
        renderFavoriteVideos(); 
    }
}

async function searchVideos(query) {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${apiKey}`);
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
    videoList.innerHTML = '';

    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');

        const videoId = video.id.videoId;
        const isFavorited = favorites.has(videoId);

        videoItem.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
            <h3>${video.snippet.title}</h3>
            <button class="favorite-button ${isFavorited ? 'favorited' : ''}" onclick="toggleFavorite('${videoId}', this)">
                ${isFavorited ? '★' : '☆'}
            </button>
        `;

        videoList.appendChild(videoItem);
    });
}

function toggleFavorite(videoId, button) {
    if (favorites.has(videoId)) {
        favorites.delete(videoId);
        removeFavorite(videoId);
        button.classList.remove('favorited');
        button.innerHTML = '☆'; 
    } else {
        favorites.add(videoId);
        renderFavorites();
        button.classList.add('favorited');
        button.innerHTML = '★'; 
    }

    updateFavoriteCount();
    saveFavorites(); 
}

function updateFavoriteCount() {
    favoritesCountElement.textContent = favorites.size;
}

function renderFavorites() {
    favoritesCountElement.textContent = favorites.size;

    const pathname = window.location.pathname;
    if (pathname.includes('favorite.html')) {
        renderFavoriteVideos();
    }
}

function renderFavoriteVideos() {
    const favoritesList = document.getElementById('favoritesList');
    favoritesList.innerHTML = '';

    favorites.forEach(videoId => {
        const favoriteItem = document.createElement('div');
        favoriteItem.classList.add('favorite-item');

        favoriteItem.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
            <button class="favorite-button favorited" onclick="toggleFavorite('${videoId}', this)">★</button>
        `;

        favoritesList.appendChild(favoriteItem);
    });
}

function removeFavorite(videoId) {
    favorites.delete(videoId);
    saveFavorites();

    updateVideoFavoriteButton(videoId);
}

function updateVideoFavoriteButton(videoId) {
    const videoItems = document.getElementsByClassName('video-item');
    Array.from(videoItems).forEach(item => {
        const iframeSrc = item.querySelector('iframe').src;
        const id = iframeSrc.substring(iframeSrc.lastIndexOf('/') + 1);
        if (id === videoId) {
            const button = item.querySelector('.favorite-button');
            if (favorites.has(videoId)) {
                button.classList.add('favorited');
                button.innerHTML = '★';
            } else {
                button.classList.remove('favorited');
                button.innerHTML = '☆';
            }
        }
    });
}

function loadFavorites() {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (savedFavorites) {
        favorites = new Set(savedFavorites);
    }
}

function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(Array.from(favorites)));
}

document.addEventListener('DOMContentLoaded', init);
