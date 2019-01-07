import DemoNew from './DemoNew.svelte'

const target = document.getElementById( 'page-actions' );

const app = new DemoNew({
  target,
  hydrate: true
});
