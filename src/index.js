import App from './App.svelte'

const target = document.body.appendChild(document.createElement('div'))

const app = new App({
  target,
  hydrate: true
});
