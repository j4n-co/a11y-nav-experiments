<ul class="flyout-menu" role="menu" aria-label="{ariaLabel}" hidden>
	<slot></slot>
</ul>

<style>
.flyout-menu {
	position: absolute;
	top: 100%;
	right: 0;
	margin: 0;
	padding: 0;
	flex-direction: column;
	box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.05);
	background-color: white;
	outline: 1px solid;
}

.flyout-menu :global(.menu-item) {
	align-self: flex-start;
	border-right: none;
}

/** Activating the menu **/
.flyout-menu:hover,
:global(.menu-button):hover + .flyout-menu {
	display: flex;
}

.flyout-menu :global(.icon) {
	margin-right: 0.5rem;
}

/* combined components */

</style>
