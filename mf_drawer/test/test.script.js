test('Teste de navegação entre seções', () => {
    const videosLink = document.getElementById('videosLink');
    const videosSection = document.getElementById('videosSection');
    const favoritesSection = document.getElementById('favoritesSection');

    if (videosSection && favoritesSection) {
        videosLink.click();

        expect(videosSection.style.display).toBe('block');
        expect(favoritesSection.style.display).toBe('none');

        const favoritesLink = document.getElementById('favoritesLink');
        favoritesLink.click();

        expect(favoritesSection.style.display).toBe('block');
        expect(videosSection.style.display).toBe('none');
    } else {
        console.error('Elementos de seção não encontrados');
    }
});
