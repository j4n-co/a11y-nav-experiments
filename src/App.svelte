<h1>Classic menu</h1>
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

<h2>Some text</h2>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reprehenderit, aut non fuga beatae hic rem dolor officia incidunt, perspiciatis quos reiciendis quibusdam distinctio veritatis! Error pariatur voluptas minus ipsam!
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reprehenderit, aut non fuga beatae hic rem dolor officia incidunt, perspiciatis quos reiciendis quibusdam distinctio veritatis! Error pariatur voluptas minus ipsam!
</p>

<h1>New menu</h1>

<MenuBar itemLayout="wide" ariaLabel="new menu">
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
		<MenuButton ariaLabel="page actions" ariaExpanded="false">
			<Icon type="more"/>
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
