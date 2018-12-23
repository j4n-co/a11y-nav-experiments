<li class="menu-item {class}" {style}>
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

	max-height: 2.5rem;

	flex-direction: column;

	max-height: 2.5rem;
	min-height: 2.5rem;

}
.menu-item:last-child {
	border-right: none;
}
.menu-item:focus,
.menu-item:active {
	background-color: blue;
}
/** menu item inside a flyout menu **/
.flyout-menu :global(.menu-item) {
	align-self: flex-start;
}

</style>

<script>
export default {
	data() {
		return {
			class: ''
		};
	}
};
</script>
