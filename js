jQuery(function($){
var $container     = $( '#list2' ),
							$elemContainer = $container.find( '> .elementor-widget-container' ),
							$items         = $container.find( '.jet-listing-grid__items' ),
							nav            = $items.data( 'nav' );
console.log(nav.query);
$( document ).on('jet-filter-content-rendered', function() {
JetEngine.ajaxGetListing( {
							handler: 'get_listing',
							container: $('#list2'),
							masonry: false,
							slider: false,
							append: false,
							query: nav.query,
							widgetSettings: nav.widget_settings,
							postID: window.elementorFrontendConfig.post.id,
							elementID: $container.data( 'id' ),
						}, function( response ) {
							JetEngine.widgetListingGrid( $container );
						} );});});
