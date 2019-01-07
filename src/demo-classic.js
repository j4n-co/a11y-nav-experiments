import DemoClassic from './DemoClassic.svelte'

const target = document.getElementById( 'page-actions' );

const app = new DemoClassic({
  target,
  hydrate: true
});
