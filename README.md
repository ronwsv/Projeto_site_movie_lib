# Projeto_site_movie_lib
![image](https://github.com/user-attachments/assets/72a79b04-cdfb-4d8c-9619-f4112683626e)

📝 Descrição
MoviesLib é uma aplicação web desenvolvida em React que permite aos usuários explorar, buscar e visualizar informações detalhadas sobre filmes, utilizando a API do TMDB (The Movie Database).
🛠️ Tecnologias Utilizadas
React.js
React Router DOM
API TMDB
CSS3
Vite
🏗️ Estrutura do Projeto
movies_sic/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Movie.jsx
│   │   ├── Search.jsx
│   │   └── MoviesGrid.css
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MovieCard.jsx
│   │   ├── Navbar.css
│   │   └── Movie.css
│   ├── App.jsx
│   └── main.jsx
├── .env
└── package.json
 Configuração
Variáveis de Ambiente (.env)
VITE_API_KEY=sua_chave_api
VITE_API=https://api.themoviedb.org/3/
VITE_SEARCH=/search/movie
VITE_IMG=https://image.tmdb.org/t/p/w500/

Instalação
# Clone o repositório
git clone [url-do-repositorio]

# Instale as dependências
npm install

# Execute o projeto
npm run dev

Componentes Principais
1. Home (pages/Home.jsx)
Funcionalidade: Página inicial que exibe os filmes mais bem avaliados.
const getTopRatedMovies = async () => {
  // Busca filmes mais bem avaliados da API
}
Pulei algumas parte de detalhe
Fluxo de Dados
Carregamento Inicial
Home carrega filmes mais bem avaliados
Exibe lista de MovieCards
Busca de Filmes
Usuário insere termo no Navbar
Redireciona para página Search
Exibe resultados em MovieCards
Visualização de Detalhes
Usuário clica em "Detalhes" no MovieCard
Redireciona para página Movie
Exibe informações completas do filme

Responsividade
A aplicação é totalmente responsiva, adaptando-se a diferentes tamanhos de tela:
Desktop (> 768px)
Mobile (< 768px)
🎨 Estilização
Tema escuro
Destaques em amarelo (#f7d354)
Cards com efeitos hover
Layouts em grid e flex
🔍 Funcionalidades Principais
Visualização de filmes populares
Sistema de busca
Visualização de detalhes do filme
Exibição de trailers
Informações do elenco
Dados financeiros do filme
🔒 Boas Práticas
Componentização
Estados gerenciados com useState
Efeitos controlados com useEffect
Tratamento de erros
Loading states
URLs amigáveis
🚀 Melhorias Futuras
Implementar paginação
Adicionar sistema de favoritos
Implementar filtros avançados
Adicionar autenticação de usuário
Implementar sistema de avaliações

📄 Licença
[Informações sobre a licença]
---
Desenvolvido com ❤️ por Ron Williams
