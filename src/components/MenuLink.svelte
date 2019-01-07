<a class="menu-link" href={href} aria-label={ariaLabel}>
	<slot></slot>
</a>

<style>
.menu-link {
	text-decoration: none;
	color: black;
	/** ensure width is not limited by parent flex container */
	white-space: nowrap;
	padding: 0.5rem;

	display: flex;
}

.menu-link:focus {
	outline: 1px solid #36c;
}
</style>
