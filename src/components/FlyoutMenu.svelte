<ul class="flyout-menu" aria-label="{ariaLabel}" ref:flyoutMenu>
	<slot></slot>
</ul>

<style>
.flyout-menu {
	display: flex;
	position: absolute;
	top: 100%;
	right: 0;
	margin: 0;
	padding: 0.5em;
	flex-direction: column;
	z-index: 1;
	visibility: hidden;
	opacity: 0;
	transform: translateY( -10px );
	transition: opacity 150ms ease-out, visibility 0ms, transform 150ms ease-out;
	background-color: #fff;
	border: 1px solid rgba(200, 204, 209, 0.46);
	box-shadow: 0 0 17px 0 rgba(0, 0, 0, 0.24);
	border-radius: 4px;
}

/** Activating the menu with JS disabled **/
:global(.client-nojs) .menu-button:focus + .flyout-menu,
/** Activating the menu with JS enabled **/
:global(.flyout-menu--open).flyout-menu,
/** ensure the menu remains open when mousing over it (not sure if this is needed) **/
.flyout-menu:hover {
	opacity: 1;
	visibility: visible;
	transform: translateY( 0px );
}

/* flyout menu children */
.flyout-menu :global(.menu-item) {
	align-self: flex-start;
	border-right: none;
}

.flyout-menu :global(.icon) {
	margin-right: 0.5rem;
	width: 20px;
	height: 20px;
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
			flyoutMenuButton.setAttribute( 'aria-expanded', 'false' );
		} )
	}
}
</script>
