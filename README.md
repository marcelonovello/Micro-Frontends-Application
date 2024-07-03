# Micro-Frontends Application

## Instruções para Compilar, Testar e Rodar o Projeto

### Pré-requisitos

- Docker
- Docker Compose
- Node.js (para desenvolvimento local)

### Passos para Rodar o Projeto com Docker

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/micro-frontends.git
    cd micro-frontends
    ```

2. Suba os containers Docker:
    ```sh
    docker-compose up --build
    ```

3. Acesse as aplicações:
    - MF Drawer: `http://localhost:8080`
    - MF Videos: `http://localhost:8081`
    - BFF: `http://localhost:3000`

### Rodar Testes Unitários

1. Entre no container do BFF:
    ```sh
    docker exec -it <container_id> sh
    ```

2. Execute os testes:
    ```sh
    npm test
    ```

### Desenvolvimento Local

1. Instale as dependências do BFF:
    ```sh
    cd bff
    npm install
    ```

2. Execute o BFF:
    ```sh
    npm start
    ```

3. Acesse as aplicações localmente:
    - Abra `mf_drawer/index.html` no seu navegador.
    - Abra `mf_videos/index.html` no seu navegador.
    - Abra `mf_videos/favorites.html` no seu navegador.

### Conclusão

Esta estrutura de projeto inclui duas aplicações micro-frontend que se comunicam com um BFF, utilizando a API do YouTube para buscar vídeos e com suporte a navegação por rotas e testes unitários. Certifique-se de substituir `"YOUR_YOUTUBE_API_KEY"` pela sua chave de API do YouTube antes de rodar os testes.
