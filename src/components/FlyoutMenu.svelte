<ul class="flyout-menu" aria-label="{ariaLabel}" ref:flyoutMenu>
	<slot></slot>
</ul>

<style>
.flyout-menu {
	position: absolute;
	top: 100%;
	right: 0;
	margin: 0;
	padding: 0;
	display: none;
	flex-direction: column;
	z-index: 1;
	box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.05);
	background-color: white;
	outline: 1px solid;
}

.flyout-menu :global(.menu-item) {
	align-self: flex-start;
	border-right: none;
}

/** Activating the menu with JS disabled **/
:global(.no-js) .menu-button:focus + .flyout-menu,
/** Activating the menu with JS enabled **/
:global(.flyout-menu--open).flyout-menu,
/** ensure the menu remains open when mousing over it (not sure if this is needed) **/
.flyout-menu:hover {
	display: flex;
}


.flyout-menu :global(.icon) {
	margin-right: 0.5rem;
}

</style>
<script>
export default {
	oncreate() {
		/**
		 * Close the flyout menu when clicked outside the menu or the button.
		 * Checks all clicks on the document, and walks up the DOM to see if
		 * the clicked element is a child of the flyout menu.
		 */
		window.addEventListener('click', (evt) => {
			var 	flyoutMenuButton = this.refs.flyoutMenu.previousElementSibling,
				flyoutMenu = this.refs.flyoutMenu,
				targetElement = evt.target;
			do {
				if ( targetElement === flyoutMenu || targetElement === flyoutMenuButton ) {
					return;
				}
				targetElement = targetElement.parentNode;
			} while ( targetElement );

			flyoutMenu.classList.remove( 'flyout-menu--open');
		} )
	}
}
</script>
