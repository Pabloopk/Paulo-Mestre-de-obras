import path from 'path';
import SitemapGenerator from 'react-router-sitemap';
import { createBrowserHistory } from 'history';
import routes from './src/routes'; // Aqui você importa suas rotas do React

// Criando o roteador com histórico do React Router
const history = createBrowserHistory();

// Gerando o Sitemap
const sitemap = new SitemapGenerator(routes, {
  output: path.resolve(__dirname, 'public/sitemap.xml'),
  history
});

sitemap.build();
sitemap.save();
