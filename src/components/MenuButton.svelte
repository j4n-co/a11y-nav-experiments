<!-- Aria roles should be added conditionally with JS-->
<button class="menu-button" aria-label="{ariaLabel}" aria-expanded="{ariaExpanded}" on:click="toggleFlyoutMenu()" ref:menuButton>
	<slot></slot>
</button>

<style>
.menu-button {
	font-size: inherit;
	border: 0;
	margin: 0;
	background-color: inherit;

	line-height: 1.5rem;
	padding: 0.5rem;
}
.menu-button:hover {
	background-color: mintcream;
}
</style>

<script>
export default {
	methods: {
		// There should be some proper binding between the button and the menu
		// not just some nextSibling shenanigans.
		toggleFlyoutMenu() {
			let button = this.refs.menuButton;
			let expanded = button.getAttribute('aria-expanded') === 'true' || false;
			let menu = button.nextElementSibling;
			button.setAttribute('aria-expanded', String( !expanded ) );
			menu.hidden = !menu.hidden;
		}
	}
}
</script>
