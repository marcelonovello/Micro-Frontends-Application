const {
    handleSearchSubmit,
    init,
    searchInput,
} = require('../script');

describe('Testes de funções do microfrontend mf_videos', () => {
    let mockEvent;

    beforeEach(() => {
        mockEvent = {
            preventDefault: jest.fn()
        };

        document.body.innerHTML = `
            <form id="searchForm">
                <input id="searchInput" type="text">
            </form>
            <div id="videoList"></div>
            <div id="favoritesList"></div>
        `;
        init();
    });

    test('Teste de evento de submissão do formulário de busca', async () => {
        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ items: [] })
        });

        const searchInput = document.getElementById('searchInput');
        searchInput.value = 'cats';

        handleSearchSubmit(mockEvent);

        expect(mockEvent.preventDefault).toHaveBeenCalled();
        expect(fetchSpy).toHaveBeenCalled();
        expect(fetchSpy).toHaveBeenCalledWith(
            expect.stringContaining('cats')
        );
    });
});
