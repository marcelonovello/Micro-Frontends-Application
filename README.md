# Micro Frontends Application

## 📋 Pré-requisitos:
- Node.js v16+
- Yarn/npm
- Git

## 🚀 Tecnologias Utilizadas:

- **Container (mf_drawer):** React.js, Webpack Module Federation
- **Remote App (mf_video):** React.js (pode ser substituído por Angular, Vue, etc.)
- **BFF (Backend for Frontend):** Node.js/Express
- **Gerenciamento de Dependências:** Yarn ou npm
- **Ferramentas:** Git, VS Code, Docker (opcional)

---

## 📁 Arquitetura
Micro-Frontends-Application/<br>
├── mf_drawer/ # Aplicação container (host) <br>
├── mf_video/ # Micro frontend remoto (vídeo) <br>
├── bff/ # Backend for Frontend (API) <br>
└── README.md<br>

## 🛠️ Funcionalidades Implementadas

- Integração entre múltiplas aplicações front-end de forma independente
- Uso de **Webpack Module Federation** para carregamento remoto dinâmico
- Compartilhamento de dependências entre projetos (ex: React)
- Isolamento completo de código entre remotes
- Rotas independentes para cada microfrontend
- Backend intermediário para orquestração e comunicação com APIs

## ⚙️ Como Executar o Projeto Localmente:

> Execute os serviços **em paralelo**, pois cada um roda isoladamente em sua própria porta.

### 1. Clone o repositório:

```bash
git clone https://github.com/marcelonovello/Micro-Frontends-Application.git
cd Micro-Frontends-Application
```

### 2. Instale as dependências de cada app:

```bash
cd mf_drawer && npm install
cd ../mf_video && npm install
cd ../bff && npm install
```

### 3. Inicie os projetos em terminais separados:

#### Terminal 1 — BFF (Backend for Frontend):
```bash
cd bff
npm start
```
Acessível em: http://localhost:3000

#### Terminal 2 — mf_video (Remote):
```bash
cd mf_video
npm start
```
Acessível em: http://localhost:8081

#### Terminal 3 — mf_drawer (Container):
```bash
cd mf_drawer
npm start
```
Acessível em: http://localhost:8080

---

## ☁️ Deploy no Netlify

O **mf_drawer** e **mf_video** podem ser hospedados no Netlify, enquanto o **bff** deve ser hospedado em um serviço de backend (Heroku, Render, Railway, Vercel Functions ou Netlify Functions).

### Deploy dos micro-frontends no Netlify:
1. Crie **um site no Netlify para cada app** (`mf_drawer` e `mf_video`).
2. Configure cada um:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist` (ou conforme configuração do bundler)
3. Após o deploy, substitua as URLs dos remotes no `ModuleFederationPlugin` do `mf_drawer` para apontar para as URLs públicas do Netlify.

### Deploy do BFF:
- Utilize plataformas como **Render**, **Railway**, **Heroku** ou **Vercel Functions**.
- Atualize o frontend (`mf_drawer` e `mf_video`) para consumir a URL do BFF no ambiente de produção.

> **Importante:** O Netlify não mantém `npm start` em produção, é necessário rodar `npm run build` e servir os arquivos estáticos.

---

### 👨‍💻 Autor:
Desenvolvido por Marcelo Novello<br>
