const videosLink = document.getElementById('videosLink');
const favoritesLink = document.getElementById('favoritesLink');
const videosSection = document.getElementById('videosSection');
const favoritesSection = document.getElementById('favoritesSection');

function toggleSections(event) {
    event.preventDefault();
    const toggleVideosLink = event.target;
    if (toggleVideosLink === videosLink) {
        videosSection.style.display = 'block';
        favoritesSection.style.display = 'none';
    } else if (toggleVideosLink === favoritesLink) {
        videosSection.style.display = 'none';
        favoritesSection.style.display = 'block';
    }
}

if (videosLink && favoritesLink && videosSection && favoritesSection) {
    videosLink.addEventListener('click', toggleSections);
    favoritesLink.addEventListener('click', toggleSections);
}
