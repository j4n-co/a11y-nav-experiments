import App from './App.svelte'

const target = document.getElementById( 'app');

const app = new App({
  target,
  hydrate: true
});
