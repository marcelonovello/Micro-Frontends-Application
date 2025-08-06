# Micro Frontends Application

Arquitetura modular com Container e Remotes usando **Webpack Module Federation** para simular um ambiente escalável e independente entre equipes de front-end.

---

## 🚀 Tecnologias Utilizadas

- **Container/Host App:** React.js, Webpack Module Federation
- **Remote Apps:** React.js (podem ser substituídas por Angular, Vue, etc.)
- **Gerenciamento de Dependências:** Yarn ou npm
- **Ferramentas:** Git, VS Code, Docker (opcional)

---

## 📁 Estrutura do Projeto
Micro-Frontends-Application/
├── container/ # Aplicação principal (Shell)
├── remote1/ # Primeiro micro frontend remoto
├── remote2/ # Segundo micro frontend remoto
├── shared/ # (Opcional) Componentes ou bibliotecas compartilhadas
└── README.md


---

## 🛠️ Funcionalidades Implementadas

- Integração entre múltiplas aplicações front-end de forma independente
- Uso de **Webpack Module Federation** para carregamento remoto dinâmico
- Compartilhamento de dependências entre projetos (ex: React)
- Isolamento completo de código entre remotes
- Rotas independentes para cada microfrontend

---

## ⚙️ Como Executar o Projeto

> Execute os serviços **em paralelo**, pois cada um roda isoladamente em sua própria porta.

### 1. Clone o repositório

    ```bash
git clone https://github.com/marcelonovello/Micro-Frontends-Application.git
cd Micro-Frontends-Application

### 2. Instale as dependências de cada app
- cd container && npm install
- cd ../remote1 && npm install
- cd ../remote2 && npm install

3. Inicie os projetos em terminais separados
# Terminal 1
cd container
npm start
# Acessível em: http://localhost:8080

# Terminal 2
cd remote1
npm start
# Acessível em: http://localhost:8081

# Terminal 3
cd remote2
npm start
# Acessível em: http://localhost:8082

🧭 Arquitetura & Considerações
A abordagem de micro-frontends traz os benefícios da arquitetura de microsserviços para o front-end:

✅ Permite escalar projetos com equipes independentes
✅ Cada parte da aplicação pode evoluir separadamente
✅ Reutilização de bibliotecas e componentes comuns
⚠️ Requer controle rigoroso de dependências compartilhadas
⚠️ Requer planejamento de roteamento, estados e autenticação

Ideal para grandes projetos que demandam autonomia por domínio de negócio.

📚 Base Teórica e Aprendizado
Este projeto foi inspirado em estudos sobre micro-frontends modernos. É altamente recomendável o estudo de:
- Micro Frontends – Martin Fowler
- Webpack Module Federation Docs
- Guia prático com React
- Micro-frontends com Webpack 5

👨‍💻 Autor
Desenvolvido por Marcelo Novello
[GitHub](https://github.com/marcelonovello) •
[LinkedIn](https://linkedin.com/in/marcelonovello)
