<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package ilogic
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function ilogic_body_classes( $classes ) {

	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}
	if( get_field('sticky', 'option' ) == 'stick-top') {
		$classes[] = 'stick-top';
	}
	if( get_field('sticky', 'option' ) == 'stick-main') {
		$classes[] = 'stick-main';
	}
	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', 'ilogic_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function ilogic_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'ilogic_pingback_header' );



// Plugin dependencies

require_once get_template_directory() . '/plugins/plugin-activation.php';

add_action( 'tgmpa_register', 'ilogic_register_required_plugins' );

function ilogic_register_required_plugins() {

	$plugins = array(

		// This is an example of how to include a plugin bundled with a theme.
		array(
			'name'               => 'Advanced Custom Fields PRO', // The plugin name.
			'slug'               => 'advanced-custom-fields-pro', // The plugin slug (typically the folder name).
			'source'             => get_template_directory() . '/plugins/advanced-custom-fields-pro.zip', // The plugin source.
			'required'           => true, // If false, the plugin is only 'recommended' instead of required.
			'version'            => '6.0.7', // E.g. 1.0.0. If set, the active plugin must be this version or higher. If the plugin version is higher than the plugin version installed, the user will be notified to update the plugin.
			'force_activation'   => true, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch.
			'force_deactivation' => false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins.
			'external_url'       => '', // If set, overrides default API URL and points to an external URL.
			'is_callable'        => '', // If set, this callable will be be checked for availability to determine if a plugin is active.
		),

	);

	$config = array(
		'id'           => 'ilogic',                 // Unique ID for hashing notices for multiple instances of TGMPA.
		'default_path' => '',                      // Default absolute path to bundled plugins.
		'menu'         => 'tgmpa-install-plugins', // Menu slug.
		'parent_slug'  => 'themes.php',            // Parent menu slug.
		'capability'   => 'edit_theme_options',    // Capability needed to view plugin install page, should be a capability associated with the parent menu used.
		'has_notices'  => true,                    // Show admin notices or not.
		'dismissable'  => false,                    // If false, a user cannot dismiss the nag message.
		'dismiss_msg'  => '',                      // If 'dismissable' is false, this message will be output at top of nag.
		'is_automatic' => false,                   // Automatically activate plugins after installation or not.
		'message'      => '',                      // Message to output right before the plugins table.
	);

	tgmpa( $plugins, $config );
}


// Disable Comments

add_action('admin_init', function () {
    // Redirect any user trying to access comments page
    global $pagenow;

    if ($pagenow === 'edit-comments.php') {
        wp_redirect(admin_url());
        exit;
    }

    // Remove comments metabox from dashboard
    remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');

    // Disable support for comments and trackbacks in post types
    foreach (get_post_types() as $post_type) {
        if (post_type_supports($post_type, 'comments')) {
            remove_post_type_support($post_type, 'comments');
            remove_post_type_support($post_type, 'trackbacks');
        }
    }
});

// Close comments on the front-end
add_filter('comments_open', '__return_false', 20, 2);
add_filter('pings_open', '__return_false', 20, 2);

// Hide existing comments
add_filter('comments_array', '__return_empty_array', 10, 2);

// Remove comments page in menu
add_action('admin_menu', function () {
    remove_menu_page('edit-comments.php');
});

// Remove comments links from admin bar
add_action('init', function () {
    if (is_admin_bar_showing()) {
        remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
    }
});


// Include ACF local.json

add_filter('acf/settings/save_json', 'my_acf_json_save_point');

function my_acf_json_save_point( $path ) {

    // update path
    $path = get_stylesheet_directory() . '/acf-json';


    // return
    return $path;

}

add_filter('acf/settings/load_json', 'my_acf_json_load_point');

function my_acf_json_load_point( $paths ) {

    // remove original path (optional)
    unset($paths[0]);


    // append path
    $paths[] = get_stylesheet_directory() . '/acf-json';


    // return
    return $paths;

}


// Register Footer Widgets


function wpdocs_theme_slug_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Footer 1', 'ilogic' ),
		'id'            => 'footer-1',
		'description'   => __( 'Footer Area 1', 'ilogic' ),
		'before_widget' => '',
		'after_widget'  => '',
		'before_title'  => '<h2 class="widgettitle">',
		'after_title'   => '</h2>',
	) );
    register_sidebar( array(
		'name'          => __( 'Footer 2', 'ilogic' ),
		'id'            => 'footer-2',
		'description'   => __( 'Footer Area 2', 'ilogic' ),
		'before_widget' => '',
		'after_widget'  => '',
		'before_title'  => '<h2 class="widgettitle">',
		'after_title'   => '</h2>',
	) );
    register_sidebar( array(
		'name'          => __( 'Footer 3', 'ilogic' ),
		'id'            => 'footer-3',
		'description'   => __( 'Footer Area 3', 'ilogic' ),
		'before_widget' => '',
		'after_widget'  => '',
		'before_title'  => '<h2 class="widgettitle">',
		'after_title'   => '</h2>',
	) );
    register_sidebar( array(
		'name'          => __( 'Footer 4', 'ilogic' ),
		'id'            => 'footer-4',
		'description'   => __( 'Footer Area 4', 'ilogic' ),
		'before_widget' => '',
		'after_widget'  => '',
		'before_title'  => '<h2 class="widgettitle">',
		'after_title'   => '</h2>',
	) );
    register_sidebar( array(
		'name'          => __( 'Footer Bottom', 'ilogic' ),
		'id'            => 'footer-bottom',
		'description'   => __( 'Footer Bottom', 'ilogic' ),
		'before_widget' => '<div class="footer_bottom_inner container">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widgettitle">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'wpdocs_theme_slug_widgets_init' );