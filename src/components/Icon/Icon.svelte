<!--
	https://egghead.io/lessons/css-accessible-icon-buttons
-->
<i class="icon { ( type ) ? `icon--${type}` : undefined }">
	{#if label}<span class="visuallyhidden">{label}</span>{/if}
</i>

<style>
.icon {
	display: inline-block;
	width: 1.5rem;
	height: 1.5rem;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
	background-image: url('./icon-download.svg');

	/** ensure height is static when flex-child**/
	min-height: 1rem;
	min-width: 1rem;

	/* center text beside icon */
	vertical-align: middle;
}

.icon.icon--edit {
	background-image: url('./icon-edit-enabled.svg');
}

.icon.icon--language {
	background-image: url('./icon-language-switcher.svg');
}

.icon.icon--watchlist {
	background-image: url('./icon-watchlist.svg');
}

.icon.icon--history {
	background-image: url('./icon-history.svg');
}

.icon.icon--more {
	background-image: url('./icon-more.svg');
}

/**
combined components
**/

.menu-link > .icon {
}

</style>
