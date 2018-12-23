<nav aria-label='{ariaLabel}'>
	<ul class="menubar menubar--{itemLayout}">
		<slot>
		</slot>
	</ul>
</nav>

<style>
.menubar {
	margin: 0;
	padding: 0;
	background-color: white;
	display: flex;
	box-shadow: 0px 6px 6px -6px rgba(0,0,0,0.1);
}

.menubar.menubar--wide {
	justify-content: space-between;
}

.menubar.menubar--first-wide :global(.menu-item):first-child {
	flex-grow: 1;
}
</style>
