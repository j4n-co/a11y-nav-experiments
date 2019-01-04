<button class="menu-button" aria-label="{ariaLabel}" aria-expanded="{ariaExpanded}" on:click="toggleFlyoutMenu()" ref:menuButton>
	<slot></slot>
</button>

<style>
.menu-button {
	font-size: inherit;
	border: 0;
	margin: 0;
	background-color: inherit;
	/** veritcal alignment of icon **/
	line-height: 1.5rem;
	padding: 0.5rem;
}
</style>

<script>
export default {
	methods: {
		/**
		 * Toggles flyout menu when clicking or entering the button.
		 */
		toggleFlyoutMenu() {
			const button = this.refs.menuButton,
				expanded = button.getAttribute('aria-expanded') === 'true' || false,
				menu = button.nextElementSibling;
			button.setAttribute('aria-expanded', String( !expanded ) );
			if ( menu ) menu.classList.toggle( 'flyout-menu--open' );
		}
	}
}
</script>
