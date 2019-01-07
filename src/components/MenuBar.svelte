<nav aria-label='{ariaLabel}'>
	<ul class="menubar menubar--{itemLayout}">
		<slot>
		</slot>
	</ul>
</nav>

<style>

nav {
	width: 100%;
	position: -webkit-sticky; /* Safari */
	position: sticky;
	top: 0;
	z-index: 1;
}

.menubar {
	margin: 0;
	padding: 0;
	background-color: white;
	display: flex;
}

.menubar.menubar--wide {
	justify-content: space-between;
}

.menubar.menubar--first-wide :global(.menu-item):first-child {
	flex-grow: 1;
}
</style>
