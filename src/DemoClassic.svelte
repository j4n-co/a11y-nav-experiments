<MenuBar itemLayout="first-wide" ariaLabel="old menu">
	<MenuItem>
		<MenuLink href="#" ariaLabel="Languages">
			<Icon type="language"/>
		</MenuLink>
	</MenuItem>
	<MenuItem>
		<MenuLink href="#" ariaLabel="Download PDF">
			<Icon type="download"/>
		</MenuLink>
	</MenuItem>
	<MenuItem>
		<MenuLink href="#" ariaLabel="Add to watchlist">
			<Icon type="watchlist"/>
		</MenuLink>
	</MenuItem>
	<MenuItem>
		<MenuLink href="#" ariaLabel="Edit">
			<Icon type="edit"/>
		</MenuLink>
	</MenuItem>
</MenuBar>

<script>
	export default {
		components: {
			MenuBar: './components/MenuBar.svelte',
			MenuItem: './components/MenuItem.svelte',
			MenuLink: './components/MenuLink.svelte',
			Icon: './components/Icon/Icon.svelte'
		}
	}
</script>
