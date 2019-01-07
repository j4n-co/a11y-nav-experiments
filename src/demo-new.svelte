<MenuBar itemLayout="wide">
	<MenuItem>
		<MenuLink ariaLabel="Languages">
			<Icon type="language"/>
		</MenuLink>
	</MenuItem>
	<MenuItem>
		<MenuButton ariaLabel="add to watchlist">
			<Icon type="watchlist"/>
		</MenuButton>
	</MenuItem>
	<MenuItem>
		<MenuLink ariaLabel="history">
			<Icon type="history"/>
		</MenuLink>
	</MenuItem>
	<MenuItem>
		<MenuLink ariaLabel="edit">
			<Icon type="edit"/>
		</MenuLink>
	</MenuItem>

	<MenuItem>
		<MenuButton ariaLabel="page actions" ariaExpanded="false" ariaHasPopup="true">
			<Icon type="more" label="more"/>
		</MenuButton>
		<FlyoutMenu ariaLabel="flyout menu">
			<MenuItem>
				<MenuButton>
					<Icon type="language"/>Download PDF
				</MenuButton>
			</MenuItem>

			<MenuItem>
				<MenuLink>
					<Icon type="download"/> Page Information
				</MenuLink>
			</MenuItem>

			<MenuItem>
				<MenuLink>
					<Icon type="watchlist"/>Permanent link
				</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink>
					<Icon type="edit"/>View links to this page
				</MenuLink>
			</MenuItem>

			<MenuItem>
				<MenuLink>
					<Icon/>View wikidata item
				</MenuLink>
			</MenuItem>

			<MenuItem>
				<MenuLink>
					Cite this page
				</MenuLink>
			</MenuItem>
		</FlyoutMenu>

	</MenuItem>
</MenuBar>

<script>
	export default {
		components: {
			MenuBar: './components/MenuBar.svelte',
			MenuItem: './components/MenuItem.svelte',
			MenuLink: './components/MenuLink.svelte',
			Icon: './components/Icon/Icon.svelte',
			MenuButton: './components/MenuButton.svelte',
			FlyoutMenu: './components/FlyoutMenu.svelte'
		}
	}
</script>
