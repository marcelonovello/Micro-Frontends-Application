[🇺🇸 English](./README.md)   |   [🇧🇷 Português](./README-pt.md)

<br>
<h1 align="center">🧩 YouTube Data Connector</h1>
<p align="center">
	A modular micro-frontends architecture for browsing, searching, and favoriting YouTube videos, built with Webpack Module Federation, Docker, and modern web technologies.
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

<a id="overview"></a>
## 🔎 Overview

This project implements a **micro-frontends YouTube interface** using **Webpack Module Federation**. It allows users to:

- 🔍 **Browse and search YouTube videos** via the YouTube Data API.  
- 🎬 **View detailed video information**.  
- ⭐ **Favorite videos** for quick access.  
- 🧩 **Run in isolated modules** for scalability and independent deployment.  
- 🐳 **Dockerized & Orchestrated**: The application is containerized with Docker and orchestrated using docker-compose, allowing smooth local development and easy production deployment.

<a id="tech-stack"></a>
## 💻 Tech Stack
<p>
  <img src="https://skillicons.dev/icons?i=js,html,css,webpack,nodejs,docker" />
</p></div>


## 📑 Table of Contents

- 🔍 [Overview](#overview)
- 💻 [Tech Stack](#tech-stack) 
- ✨ [Features](#features)
- 🏗 [Project Structure](#project-structure)   
- 🚀 [Getting Started](#getting-started)
  - ⚙️ [Prerequisites](#prerequisites)
  - ⬇️ [Installation](#installation)
  - 🛠️ [Usage](#usage)
  - 🧪 [Testing](#testing)
  	- 🔧 [Troubleshooting](#troubleshooting)
- 🗺 [Project Roadmap](#project-roadmap)  
- 👥 [Contributing](#contributing)  
- 📄 [License](#license)  
- 📚 [Acknowledgments](#acknowledgments)

---

<a id="features"></a>
## ✨ Features

- ⚡ **Micro-Frontends Architecture** – Modular structure with independent builds and deployments.
- 🔎 **YouTube API Integration** – Search, browse, and retrieve detailed video data.
- ⭐ **Favorites System** – Save and manage your favorite videos locally.
- 🐳 **Dockerized Development** – Fully containerized for reproducibility.
- ⏳ **Hot Reloading** – Instant feedback during development.
- 📦 **Scalable Design** – Modules can be extended or replaced without affecting the whole app.

<a id="project-structure"></a>
## 🏗 Project Structure

```sh
└── 📦 Micro-Frontends-Application/          # Root folder of the Micro-Frontends project
    ├── 📄 README.md                         # Main project documentation and overview
    ├── 📂 bff/                               # Backend-for-Frontend service
    │   ├── 📄 Dockerfile                     # Docker build instructions for BFF
    │   ├── 📄 __test__                       # Folder containing BFF tests
    │   ├── 📄 babel.config.js                # Babel configuration
    │   ├── 📄 jest.config.js                 # Jest test configuration
    │   ├── 📄 jest.setup.js                  # Jest setup scripts
    │   ├── 📄 package-lock.json              # Exact versions of installed Node packages
    │   ├── 📄 package.json                   # Node dependencies and scripts
    │   ├── 📄 public                         # Public folder for static assets
    │   └── 📄 server.js                       # Entry point of the BFF server
    ├── 📄 docker-compose.yml                 # Docker Compose configuration
    ├── 📂 mf_drawer/                          # Micro-frontend for drawer component
    │   ├── 📄 .env.production               # Production environment variables
    │   ├── 📄 Dockerfile                     # Docker build instructions for mf_drawer
    │   ├── 📄 babel.config.js                # Babel configuration
    │   ├── 📄 favorite.html                  # HTML page for favorites
    │   ├── 📄 index.html                     # Main HTML page
    │   ├── 📄 jest.config.js                 # Jest configuration
    │   ├── 📄 jest.setup.js                  # Jest setup scripts
    │   ├── 📄 package-lock.json              # Exact versions of installed Node packages
    │   ├── 📄 package.json                   # Node dependencies and scripts
    │   ├── 📄 script.js                      # JavaScript logic for drawer
    │   ├── 📄 style.css                      # Styles for drawer
    │   └── 📄 test                           # Test folder
    ├── 📂 mf_video/                           # Micro-frontend for video component
    │   ├── 📄 Dockerfile                     # Docker build instructions for mf_video
    │   ├── 📄 __tests__                      # Folder containing video tests
    │   ├── 📄 babel.config.js                # Babel configuration
    │   ├── 📄 dist                            # Build output folder
    │   ├── 📄 index.html                     # Main HTML page
    │   ├── 📄 jest.config.mjs                # Jest configuration module
    │   ├── 📄 jest.setup.js                  # Jest setup scripts
    │   ├── 📄 package-lock.json              # Exact versions of installed Node packages
    │   ├── 📄 package.json                   # Node dependencies and scripts
    │   ├── 📄 script.js                      # JavaScript logic for video
    │   ├── 📄 style.css                      # Styles for video component
    │   ├── 📄 webpack.config.js              # Webpack configuration
    │   └── 📄 {                              # Placeholder or additional files
    └── 📄 package-lock.json                   # Exact versions of installed Node packages

```

---

<a id="getting-started"></a>
## 🚀 Getting Started

<a id="prerequisites"></a>
### ⚙️ Prerequisites

Before getting started with Micro-Frontends-Application, ensure your runtime environment meets the following requirements:

- [<img align="center" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" />](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [<img align="center" src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white" />](https://www.npmjs.com/)
- [<img align="center" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" />](https://www.docker.com/)

<a id="installation"></a>
## ⬇️ Installation

Install Micro-Frontends-Application using one of the following methods:

**Build from source:**

1. Clone the Micro-Frontends-Application repository:
```sh
git clone https://github.com/marcelonovello/Micro-Frontends-Application
```

2. Navigate to the project directory:
```sh
cd Micro-Frontends-Application
```

3. Install the project dependencies:
```bash
# Using npm:
npm install

# Using Docker:
docker build -t marcelonovello/Micro-Frontends-Application .
```

<a id="usage"></a>
## 🛠️ Usage
Run Micro-Frontends-Application using the following command:<br>
```bash
# Using npm:
npm start

# Using Docker:
docker run -it {image_name}
```

<a id="testing"></a>
## 🧪 Testing
Run the test suite using the following command:<br>
```sh
npm test
```

<a id="troubleshooting"></a>
## 🔧 Troubleshooting
- ⚠️ **If ports are already in use** → change PORT in .env or docker-compose.yml
- 🐛 **If YouTube API fails** → verify your YOUTUBE_API_KEY is correct and enabled

---

<a id="project-roadmap"></a>
## 🗺 Project Roadmap

- [X] **`Init`**: Initialize project structure and create micro-frontend modules (`mf_video`, `mf_drawer`).
- [X] **`Config`**: Set up core tooling (Webpack, Babel, Jest) and configuration files.
- [X] **`Container`**: Develop the main application shell (`index.html`, `script.js`).
- [ ] **`MF Video`**: Build and style the core video player component with playback controls.
- [ ] **`MF Drawer`**: Develop the navigation drawer component and integrate the favorites feature.
- [ ] **`Comms`**: Establish a communication pattern between micro-frontends and the container.
- [ ] **`Integrate`**: Use Webpack Module Federation to dynamically load micro-frontends.
- [ ] **`Deploy`**: Finalize Docker containerization and multi-environment configuration.
- [ ] **`Optimize`**: Analyze and optimize bundle sizes, implement lazy loading.
- [ ] **`Test`**: Write integration and E2E tests; establish a CI/CD pipeline.
- [ ] **`Expand`**: Add new micro-frontends (e.g., user profile, comments).
- [ ] **`Improve`**: Enhance developer experience and documentation.

---

<a id="contributing"></a>
## 👥 Contributing

- **💬 [Join the Discussions](https://github.com/marcelonovello/Micro-Frontends-Application/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/marcelonovello/Micro-Frontends-Application/issues)**: Submit bugs found or log feature requests for the `Micro-Frontends-Application` project.
- **💡 [Submit Pull Requests](https://github.com/marcelonovello/Micro-Frontends-Application/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/marcelonovello/Micro-Frontends-Application
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m \'Implemented new feature x.\'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/marcelonovello/Micro-Frontends-Application/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=marcelonovello/Micro-Frontends-Application">
   </a>
</p>
</details>

---

<a id="license"></a>
## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for full details.

---

<a id="acknowledgments"></a>
## 📚 Acknowledgments

- 🏗️ **Micro-Frontends Architecture:** Inspired by modern web development practices for building scalable and independently deployable frontend applications.  
- ⚡ **Webpack Module Federation:** Enables runtime integration of separately built micro-frontends.  
- 🧪 **Jest Testing Framework:** Provides a comprehensive and developer-friendly testing platform.  
- 🐳 **Docker & Docker Compose:** Simplifies containerization and multi-service orchestration, ensuring consistent environments from development to production.  
- 🛠️ **Babel:** Ensures JavaScript code compatibility across different browser environments.  
- 🌐 **The Open Source Community:** For the countless libraries and tools that make modern web development possible.  

---
