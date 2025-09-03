[🇺🇸 English](./README.md)   |   [🇧🇷 Portuguese](./README-pt.md)

<h1 align="center">🧩 YouTube Data Connector</h1>

<p align="center">
A modular micro-frontend architecture to search and favorite YouTube videos, built with Docker and Webpack Module Federation.
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
  <img src="https://img.shields.io/github/stars/marcelonovello/YouTube-Data-Connector?style=flat&logo=github" />
  <img src="https://img.shields.io/github/forks/marcelonovello/YouTube-Data-Connector?style=flat&logo=github" />
  
</p>

---

<a id="overview"></a>
## 🔎 Overview

The **YouTube Data Connector** is a project that demonstrates **modular micro-frontends**, allowing multiple independent modules that can be updated and deployed separately.

> 💡 **Why is this project relevant?**  
> It demonstrates how to create a scalable architecture with **Webpack Module Federation** and **Docker**, ideal for large teams that need to integrate and update modules independently, with high maintainability and low coupling.

Main features:

- Search YouTube videos.
- Favorite videos.
- Smooth navigation between modules without reloading the app.
- Scalable architecture with Docker.
- Integration with external APIs.

---

<a id="table-of-contents"></a>
## 📑 Table of Contents
- [Overview](#overview)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [How to Run the Project Locally](#how-to-run-the-project-locally)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [Project Roadmap](#project-roadmap)
- [License](#license)
- [Learnings](#learnings)
- [How to Contribute](#how-to-contribute)
- [Contact](#contact)

---

<a id="demo"></a>
## 🎬 Demo

<p align="center">
  <img src="./assets/demo-search.png" alt="Video Search" width="80%" />
</p>
<p align="center">
  <img src="./assets/demo-favorites.png" alt="Favorite Videos" width="80%" />
</p>
<p align="center">
  <img src="./assets/demo-navigation.png" alt="Module Navigation" width="80%" />
</p>

💻 **Live Deploy:**  
- Frontend: [https://micro-frontends-application.onrender.com/](https://micro-frontends-application.onrender.com/)

---

<a id="technologies-used"></a>
## 🛠️ Technologies Used

| Layer                | Technologies / Tools |
|----------------------|-----------------------|
| Frontend             | [React](https://react.dev/), [Angular](https://angular.dev/), [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/) |
| Backend / API        | [Node.js](https://nodejs.org/), [Express](https://expressjs.com/) |
| Containerization     | [Docker](https://www.docker.com/), [Docker Compose](https://docs.docker.com/compose/) |
| Integration & Deploy | [GitHub Actions](https://github.com/features/actions), [Docker Hub](https://hub.docker.com/) |
| UI & Styling         | [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS), [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML), [Material-UI](https://mui.com/) / [Tailwind](https://tailwindcss.com/) |

---

<a id="how-to-run-the-project-locally"></a>
## 🚀 How to Run the Project Locally

### ⚙️ Prerequisites

- [<img align="center" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" />](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [<img align="center" src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white" />](https://www.npmjs.com/)
- [<img align="center" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" />](https://www.docker.com/)

### ⬇️ Quick Installation

1️⃣ Clone the repository
```bash
git clone https://github.com/marcelonovello/YouTube-Data-Connector.git
cd YouTube-Data-Connector
```

2️⃣ Build and start with Docker
```bash
docker compose up --build
```

3️⃣ Access the micro-frontends
```bash
| Micro-frontend | URL local             |
|----------------|-----------------------|
| Bff            | http://localhost:3000 |
| Drawer         | http://localhost:3001 |
| Vídeo          | http://localhost:3002 |

```
4️⃣ Test functionalities
- Search for videos → in the Video micro-frontend
- Favorite videos → in the Drawer
- Navigate between modules → test links between micro-frontends

5️⃣ Stop the application
```bash
docker compose down
```

---

<a id="project-structure"></a>
## 🏗 Project Structure

```sh
└── 📦 Micro-Frontends-Application/          # Root folder of the Micro-Frontends project
    ├── 📄 README.md                         # Main documentation file of the project
    ├── 📂 bff/                               # Backend-for-Frontend service
    │   ├── 📄 Dockerfile                     # Docker build instructions for the Bff
    │   ├── 📄 __test__                       # Folder containing Bff tests
    │   ├── 📄 babel.config.js                # Babel configuration
    │   ├── 📄 jest.config.js                 # Jest configuration for tests
    │   ├── 📄 jest.setup.js                  # Jest setup scripts
    │   ├── 📄 package-lock.json              # Exact versions of installed Node packages
    │   ├── 📄 package.json                   # Node dependencies and scripts
    │   ├── 📄 public                         # Public folder for static assets
    │   └── 📄 server.js                      # BFF server entry point
    ├── 📄 docker-compose.yml                 # Docker Compose configuration
    ├── 📂 mf_drawer/                          # Micro-frontend for the drawer component
    │   ├── 📄 .env.production                # Production environment variables
    │   ├── 📄 Dockerfile                     # Docker build instructions for mf_drawer
    │   ├── 📄 babel.config.js                # Babel configuration
    │   ├── 📄 favorite.html                  # Favorites HTML page
    │   ├── 📄 index.html                     # Main HTML page
    │   ├── 📄 jest.config.js                 # Jest configuration
    │   ├── 📄 jest.setup.js                  # Jest setup scripts
    │   ├── 📄 package-lock.json              # Exact versions of installed Node packages
    │   ├── 📄 package.json                   # Node dependencies and scripts
    │   ├── 📄 script.js                      # Drawer component JavaScript logic
    │   ├── 📄 style.css                      # Drawer styles
    │   └── 📄 test                           # Test folder
    ├── 📂 mf_video/                           # Micro-frontend for the video component
    │   ├── 📄 Dockerfile                     # Docker build instructions for mf_video
    │   ├── 📄 __tests__                      # Folder containing video component tests
    │   ├── 📄 babel.config.js                # Babel configuration
    │   ├── 📄 dist                           # Build output folder
    │   ├── 📄 index.html                     # Main HTML page
    │   ├── 📄 jest.config.mjs                # Jest module configuration
    │   ├── 📄 jest.setup.js                  # Jest setup scripts
    │   ├── 📄 package-lock.json              # Exact versions of installed Node packages
    │   ├── 📄 package.json                   # Node dependencies and scripts
    │   ├── 📄 script.js                      # Video component JavaScript logic
    │   ├── 📄 style.css                      # Video component styles
    │   ├── 📄 webpack.config.js              # Webpack configuration
    │   └── 📄 {                              # Additional files or placeholder
    └── 📄 package-lock.json                   # Exact versions of installed Node packages

```

---

<a id="troubleshooting"></a>
## 🔧 Troubleshooting
- ⚠️ **If ports are already in use** → change PORT in .env or docker-compose.yml
- 🐛 **If YouTube API fails** → verify your YOUTUBE_API_KEY is correct and enabled

---

<a id="project-roadmap"></a>
## 🗺 Project Roadmap

- [ ] YouTube OAuth authentication.
- [ ] Unit and integration tests.
- [ ] Full CI/CD with automatic deploy
- [ ] Monitoring (Sentry, Prometheus).
- [ ] UI/UX improvements and responsiveness.
- [ ] Detailed documentation per module.

---

<a id="license"></a>

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

---

<a id="learnings"></a>
## 📚 Learnings
- ⚡ Practical application of Webpack Module Federation.
- 🐳 Docker usage for reproducible deployments.
- 🛠️ Integration with YouTube Data API.
- 🌐 Git best practices, commits, and documentation.
- 🎨 UI/UX improvements and code modularization.

---

<a id="how-to-contribute"></a>
## 🤝 How to Contribute

Contributions are welcome! Follow these steps:
1. **Fork this repository**.
2. **Create a branch** for your feature or fix:
```bash
   git checkout -b my-feature
```
3. Make your changes.
4. Commit with a clear message:
```bash
   git commit -m "Add feature X"
```
5. Push to your fork:
```bash
   git push origin my-feature
```
6. Open a Pull Request to main.
```bash
💡 Tip: Before submitting, ensure code follows standards and tests pass.
```

---

<a id="contact"></a>

## 📬 Contact
- **Author:** Marcelo Novello
- **GitHub:** [marcelonovello](https://github.com/marcelonovello)  
- **LinkedIn:** [Marcelo Novello](https://www.linkedin.com/in/marcelo-novello/)

<p align="center">⭐ If you found this project useful, please consider giving it a star to support development!</p>
