[🇺🇸 English](./README.md)   |   [🇧🇷 Português](./README-pt.md)

<br>
<h1 align="center">🧩 YouTube Data Connector</h1>
<p align="center">
	Uma arquitetura modular de micro-frontends para navegar, buscar e favoritar vídeos do YouTube, construída com Webpack Module Federation, Docker e tecnologias web modernas.
</p>
<p align="center">
  <a href="https://www.docker.com/">
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=flat&logo=docker&logoColor=white" />
  </a>
  <a href="https://www.npmjs.com/">
    <img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-yellow?style=flat" />
  </a>
</p>

## 🔎 Visão Geral

Este projeto implementa uma **interface de micro-frontends para YouTube** usando **Webpack Module Federation**.  
Permite que os usuários:
- 🔍 Navegar e buscar vídeos do YouTube via YouTube Data API.  
- 🎬 Visualizar informações detalhadas dos vídeos.  
- ⭐ Favoritar vídeos para acesso rápido.  
- 🧩 Executar em módulos isolados para escalabilidade e implantação independente.  
- 🐳 Dockerizado e orquestrado: A aplicação é containerizada com Docker e orquestrada usando docker-compose, permitindo um desenvolvimento local tranquilo e implantação em produção de forma simples.  

## 🛠 Tecnologias
<p>
  <img src="https://skillicons.dev/icons?i=js,html,css,webpack,nodejs,docker" />
</p></div>

## 📑 Sumário

- 📖 [Visão Geral](#-visão-geral)
- 🛠 [Tecnologias](#-tecnologias)
- ✨ [Funcionalidades](#-funcionalidades)
- 🏗 [Estrutura do Projeto](#-estrutura-do-projeto)
- 🚀 [Começando](#-começando)
  - 🛠 [Pré-requisitos](#-pré-requisitos)
  - ⚙️ [Instalação](#-instalação)
  - 🚀 [Uso](#-uso)
  - 🧪 [Testes](#-testes)
  	- 🔧 [Resolução de Problemas](#-resolução-de-Problemas)
- 🗺 [Roteiro do Projeto](#-roteiro-do-projeto)
- 👥 [Contribuindo](#-contribuindo)
- 📄 [Licença](#-licença)
- 📚 [Agradecimentos](#-agradecimentos)

---

## ✨ Funcionalidades

- ⚡ **Arquitetura Micro-Frontends** – Estrutura modular com builds e deploys independentes.
- 🔎 **Integração com API do YouTube** – Buscar, navegar e obter detalhes dos vídeos.
- ⭐ **Sistema de Favoritos** – Salve e gerencie vídeos favoritos localmente.
- 🐳 **Desenvolvimento Containerizado** – Totalmente containerizado para reprodutibilidade.
- ⏳ **Hot Reloading** – Feedback instantâneo durante o desenvolvimento.
- 📦 **Design Escalável** – Módulos podem ser estendidos ou substituídos sem afetar a aplicação inteira.

## 🏗 Estrutura do Projeto

```sh
└── 📦 Micro-Frontends-Application/          # Pasta raiz do projeto de Micro-Frontends
    ├── 📄 README.md                         # Documentação principal do projeto
    ├── 📂 bff/                               # Serviço Backend-for-Frontend
    │   ├── 📄 Dockerfile                     # Instruções Docker para build do BFF
    │   ├── 📄 __test__                       # Pasta contendo testes do BFF
    │   ├── 📄 babel.config.js                # Configuração do Babel
    │   ├── 📄 jest.config.js                 # Configuração do Jest para testes
    │   ├── 📄 jest.setup.js                  # Scripts de setup do Jest
    │   ├── 📄 package-lock.json              # Versões exatas dos pacotes Node instalados
    │   ├── 📄 package.json                   # Dependências Node e scripts
    │   ├── 📄 public                         # Pasta pública de assets estáticos
    │   └── 📄 server.js                       # Ponto de entrada do servidor BFF
    ├── 📄 docker-compose.yml                 # Configuração do Docker Compose
    ├── 📂 mf_drawer/                          # Micro-frontend do componente drawer
    │   ├── 📄 .env.production               # Variáveis de ambiente de produção
    │   ├── 📄 Dockerfile                     # Instruções Docker para mf_drawer
    │   ├── 📄 babel.config.js                # Configuração do Babel
    │   ├── 📄 favorite.html                  # Página HTML de favoritos
    │   ├── 📄 index.html                     # Página HTML principal
    │   ├── 📄 jest.config.js                 # Configuração do Jest
    │   ├── 📄 jest.setup.js                  # Scripts de setup do Jest
    │   ├── 📄 package-lock.json              # Versões exatas dos pacotes Node instalados
    │   ├── 📄 package.json                   # Dependências Node e scripts
    │   ├── 📄 script.js                      # Lógica JavaScript do drawer
    │   ├── 📄 style.css                      # Estilos do drawer
    │   └── 📄 test                           # Pasta de testes
    ├── 📂 mf_video/                           # Micro-frontend do componente de vídeo
    │   ├── 📄 Dockerfile                     # Instruções Docker para mf_video
    │   ├── 📄 __tests__                      # Pasta contendo testes do vídeo
    │   ├── 📄 babel.config.js                # Configuração do Babel
    │   ├── 📄 dist                            # Pasta de saída do build
    │   ├── 📄 index.html                     # Página HTML principal
    │   ├── 📄 jest.config.mjs                # Configuração do módulo Jest
    │   ├── 📄 jest.setup.js                  # Scripts de setup do Jest
    │   ├── 📄 package-lock.json              # Versões exatas dos pacotes Node instalados
    │   ├── 📄 package.json                   # Dependências Node e scripts
    │   ├── 📄 script.js                      # Lógica JavaScript do vídeo
    │   ├── 📄 style.css                      # Estilos do componente de vídeo
    │   ├── 📄 webpack.config.js              # Configuração do Webpack
    │   └── 📄 {                              # Arquivos adicionais ou placeholder
    └── 📄 package-lock.json                   # Versões exatas dos pacotes Node instalados
```

---

## 🚀 Começando

### ⚙️ Pré-requisitos

Antes de começar com Micro-Frontends-Application, verifique se seu ambiente atende aos seguintes requisitos:

- [<img align="center" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" />](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [<img align="center" src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white" />](https://www.npmjs.com/)
- [<img align="center" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" />](https://www.docker.com/)

## ⬇️ Instalação

Instale o Micro-Frontends-Application usando um dos métodos:

**Build a partir do código-fonte:**

1. Clone o repositório:
```sh
git clone https://github.com/marcelonovello/Micro-Frontends-Application
```

2. Navegue até o diretório do projeto:
```sh
cd Micro-Frontends-Application
```

3. Instale as dependências:
```bash
# Usando npm:
npm install

# Usando Docker:
docker build -t marcelonovello/Micro-Frontends-Application .
```

## 🛠️ Uso
Execute o Micro-Frontends-Application usando o seguinte comando:<br>

```sh
# Usando npm:
npm start

# Usando Docker:
docker run -it {image_name}
```

## 🧪 Testes
Execute os testes usando o seguinte comando:<br>
```sh
❯ npm test
```

## 🔧 Resolução de Problemas

- ⚠️ **Se as portas já estiverem em uso** → Altere a porta em `.env` ou `docker-compose.yml`.  
- 🐛 **Se a YouTube API falhar** → Verifique a URL da API ou se o serviço da API está online.  
  
---

## 🗺 Roteiro do Projeto

- [X] **`Init`**: Inicializar estrutura do projeto e criar módulos micro-frontend (`mf_video`, `mf_drawer`).
- [X] **`Config`**: Configurar ferramentas principais (Webpack, Babel, Jest) e arquivos de configuração.
- [X] **`Container`**: Desenvolver shell principal da aplicação (`index.html`, `script.js`).
- [ ] **`MF Video`**: Criar e estilizar componente principal do player de vídeo.
- [ ] **`MF Drawer`**: Desenvolver drawer de navegação e integrar sistema de favoritos.
- [ ] **`Comms`**: Estabelecer padrão de comunicação entre micro-frontends e container.
- [ ] **`Integrate`**: Usar Webpack Module Federation para carregar micro-frontends dinamicamente.
- [ ] **`Deploy`**: Finalizar containerização Docker e configuração multi-ambiente.
- [ ] **`Optimize`**: Analisar e otimizar tamanhos de bundle, implementar lazy loading.
- [ ] **`Test`**: Criar testes de integração e E2E; estabelecer pipeline CI/CD.
- [ ] **`Expand`**: Adicionar novos micro-frontends (ex: perfil do usuário, comentários).
- [ ] **`Improve`**: Melhorar experiência do desenvolvedor e documentação.

---

## 👥 Contribuindo

- **💬 [Participe das Discussões](https://github.com/marcelonovello/Micro-Frontends-Application/discussions)**: Compartilhe suas ideias, forneça feedback ou faça perguntas.
- **🐛 [Reportar Problemas](https://github.com/marcelonovello/Micro-Frontends-Application/issues)**: Envie bugs encontrados ou registre solicitações de novas funcionalidades para o projeto `Micro-Frontends-Application`.
- **💡 [Submeta Pull Requests](https://github.com/marcelonovello/Micro-Frontends-Application/blob/main/CONTRIBUTING.md)**: Analise PRs abertos e envie seus próprios PRs.

<details closed>
<summary>Diretrizes para Contribuição</summary>

1. **Fork do Repositório**: Comece fazendo um fork do repositório para sua conta no GitHub.
2. **Clone Localmente**: Clone o repositório forked para sua máquina usando um cliente git.
   ```sh
   git clone https://github.com/marcelonovello/Micro-Frontends-Application
   ```
3. **Crie uma Nova Branch**: Sempre trabalhe em uma nova branch, dando um nome descritivo.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Faça Suas Alterações**: Desenvolva e teste suas alterações localmente.
5. **Commit das Alterações**: Faça commit com uma mensagem clara descrevendo suas atualizações.
   ```sh
   git commit -m \'Implemented new feature x.\'
   ```
6. **Push para o github**: Envie as alterações para seu repositório forked.
   ```sh
   git push origin new-feature-x
   ```
7. **Submeta um Pull Request**: Crie um PR contra o repositório original. Descreva claramente as mudanças e suas motivações.
8. **Revisão**: Uma vez que o PR seja revisado e aprovado, ele será mergeado na branch principal. Parabéns pela contribuição!
</details>

<details closed>
<summary>Gráfico de Contribuidores</summary>
<br>
<p align="left">
   <a href="https://github.com{/marcelonovello/Micro-Frontends-Application/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=marcelonovello/Micro-Frontends-Application">
   </a>
</p>
</details>

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📚 Agradecimentos

- 🏗️ **Arquitetura Micro-Frontends**: Inspirada em práticas modernas de desenvolvimento web para aplicações escaláveis e deploy independente.
- ⚡ **Webpack Module Federation**: Para integração de micro-frontends construídos separadamente em runtime.
- 🧪 **Jest Testing Framework**: Plataforma de testes completa e amigável ao desenvolvedor.
- 🐳 **Docker & Docker Compose**: Facilita containerização e orquestração multi-serviço, garantindo ambientes consistentes.
- 🛠️ **Babel**: Compatibilidade de código JavaScript em diferentes navegadores.
- 🌐 **Comunidade Open Source**: Pelas inúmeras bibliotecas e ferramentas que tornam o desenvolvimento web moderno possível.

---
