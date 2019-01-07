<li class="menu-item" {style} ref:menuItem>
	<slot>
		I'm MenuItem.html default
	</slot>
</li>

<style>
.menu-item {
	/**
	* Evenly spread out items in a menu bar. This might not
	* be desireable if items are to one side instead.
	*/
	/* flex-grow: 1; */

	/**
	* Allows us to horizontally/vertically center
	* the child elements, as well as place padding on them.
	* This has the benefit of increasing the hit-area of the actual
	* child link or button, and lets us place the hover bg-color on it too.
	*/
	display: flex;

	/** resets browser styles **/
	list-style: none;
	padding: 0;
	margin: 0;

	/** align children **/
	justify-content: center;

	/** for absolutely positioned children **/
	position: relative;

	align-items: start;

	flex-direction: column;

	max-height: 43px;

	/* matching existing dimensions */
	min-width: 61px;
	min-height: 43px;
}
.menu-item:last-child {
	border-right: none;
	min-width: auto;
}

.menu-item:first-child :global( .menu-link ) {
	padding-left: 0;
}
.menu-item:last-child :global( .menu-link ) {
	padding-right: 0;
}

/**a flyout menu inside a menu item **/
:global(.menu-item) .flyout-menu  {
	align-self: flex-start;
}

</style>
