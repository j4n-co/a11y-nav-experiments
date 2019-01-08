<!--
	https://egghead.io/lessons/css-accessible-icon-buttons
-->
<i class="icon { ( type ) ? `icon--${type}` : '' }">
	{#if label}<span class="visuallyhidden">{label}</span>{/if}
</i>

<style>
.icon {
	display: inline-block;
	width: 24px;
	height: 24px;
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

.icon.icon--data {
	background-image: url('./icon-data.svg');
}

.icon.icon--download {
	background-image: url('./icon-download.svg');
}

.icon.icon--edit {
	background-image: url('./icon-edit-enabled.svg');
}

.icon.icon--history {
	background-image: url('./icon-history.svg');
}


.icon.icon--info {
	background-image: url('./icon-info.svg');
}

.icon.icon--language {
	background-image: url('./icon-language-switcher.svg');
}

.icon.icon--links {
	background-image: url('./icon-links.svg');
}

.icon.icon--permalink {
	background-image: url('./icon-permalink.svg');
}

.icon.icon--print {
	background-image: url('./icon-print.svg');
}

.icon.icon--quote {
	background-image: url('./icon-quote.svg');
}

.icon.icon--watchlist {
	background-image: url('./icon-watchlist.svg');
}

.icon.icon--more {
	background-image: url('./icon-more.svg');
}

</style>
