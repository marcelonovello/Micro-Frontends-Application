# Micro Frontends Application

## 📋 Pré-requisitos:
- Node.js v16+
- Yarn/npm 
- Git

## 🚀 Tecnologias Utilizadas:

- **Container/Host App:** React.js, Webpack Module Federation
- **Remote Apps:** React.js (podem ser substituídas por Angular, Vue, etc.)
- **Gerenciamento de Dependências:** Yarn ou npm
- **Ferramentas:** Git, VS Code, Docker (opcional)

---

## 📁 Arquitetura
Micro-Frontends-Application/<br>
├── container/ <br>
├── remote1/ # Primeiro micro frontend remoto<br>
├── remote2/ # Segundo micro frontend remoto<br>
├── shared/ # Componentes ou bibliotecas compartilhadas<br>
└── README.md<br>

## 🛠️ Funcionalidades Implementadas

- Integração entre múltiplas aplicações front-end de forma independente
- Uso de **Webpack Module Federation** para carregamento remoto dinâmico
- Compartilhamento de dependências entre projetos (ex: React)
- Isolamento completo de código entre remotes
- Rotas independentes para cada microfrontend


## ⚙️ Como Executar o Projeto:

> Execute os serviços **em paralelo**, pois cada um roda isoladamente em sua própria porta.

### 1. Clone o repositório:

```bash
git clone https://github.com/marcelonovello/Micro-Frontends-Application.git
cd Micro-Frontends-Application
```
### 2. Instale as dependências de cada app:

   ```bash
   cd container && npm install
   cd ../remote1 && npm install
   cd ../remote2 && npm install
```
### 3. Inicie os projetos em terminais separados:
## Terminal 1:

   ```bash
    cd container
    npm start
   ```
### Acessível em: http://localhost:8080

## Terminal 2:

   ```bash
    cd remote1
    npm start
   ```
### Acessível em: http://localhost:8081

## Terminal 3:

   ```bash
    cd remote2
    npm start
   ```
### Acessível em: http://localhost:8082

### 👨‍💻 Autor:
Desenvolvido por Marcelo Novello<br>
[GitHub](https://github.com/marcelonovello) •
[LinkedIn](https://linkedin.com/in/marcelonovello)
