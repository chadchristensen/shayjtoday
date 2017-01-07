// Libs
import React from 'react';
import ReactDOM, { render } from 'react-dom';

// css
import './src/css/style.scss';

// routes
import routes from './src/router.jsx';

// Render
render(
  routes,
  document.getElementById('root')
);

document.querySelector('#hamburger').addEventListener('click', e => {
  document.querySelector('.nav-expanded').classList.toggle('visible');
  document.querySelector('.main-nav').classList.toggle('expanded');
});
