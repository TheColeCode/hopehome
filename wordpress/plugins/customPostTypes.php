<?php 
/*
 * Plugin Name: Custom Post Types
 * Description: This plugin registers the 'volunteer', 'leader', 'child'
 * Version: 1.0.0
 * License: GPLv2
 * Author: Jonuday
 */


// Volunteers
function custom_volunteer_create_post_type() {

	// set up labels
	$labels = array(
 		'name' => 'Volunteers',
    	'singular_name' => 'Volunteer',
    	'add_new' => 'Add New Volunteer',
    	'add_new_item' => 'Add New Volunteer',
    	'edit_item' => 'Edit Volunteer',
    	'new_item' => 'New Volunteer',
    	'all_items' => 'All Volunteers',
    	'view_item' => 'View Volunteer',
    	'search_items' => 'Search Volunteers',
    	'not_found' =>  'No Volunteers Found',
    	'not_found_in_trash' => 'No Volunteers found in Trash', 
    	'parent_item_colon' => '',
    	'menu_name' => 'Volunteers',    	
    );

    //register post type
	register_post_type( 'volunteer', array(
		'labels' => $labels,
		'has_archive' => true,
 		'public' => true,
		'supports' => array( 'title', 'editor', 'excerpt', 'custom-fields', 'thumbnail','page-attributes' ),
		'taxonomies' => array(  ),
		'exclude_from_search' => false,
		'capability_type' => 'post',
		'rewrite' => array( 'slug' => 'volunteers' ),
		'menu_icon'   => 'dashicons-groups',
		'show_in_rest' => true,
		)
	);

}
add_action( 'init', 'custom_volunteer_create_post_type' );


// register two taxonomies to go with the post type
function custom_volunteer_register_taxonomy() {
	// set up labels
	$labels = array(
		'name'              => 'Volunteer Categories',
		'singular_name'     => 'Volunteer Category',
		'search_items'      => 'Search Volunteer Categories',
		'all_items'         => 'All Volunteer Categories',
		'edit_item'         => 'Edit Volunteer Category',
		'update_item'       => 'Update Volunteer Category',
		'add_new_item'      => 'Add New Volunteer Category',
		'new_item_name'     => 'New Volunteer Category',
		'menu_name'         => 'Volunteer Categories'
	);
	// register taxonomy
	register_taxonomy( 'volunteercat', 'volunteer', array(
		'hierarchical' => true,
		'labels' => $labels,
		'query_var' => true,
		'show_admin_column' => true
	) );
}
add_action( 'init', 'custom_volunteer_register_taxonomy' );

// Leaders
function custom_leader_create_post_type() {

	// set up labels
	$labels = array(
 		'name' => 'Leaders',
    	'singular_name' => 'Leader',
    	'add_new' => 'Add New Leader',
    	'add_new_item' => 'Add New Leader',
    	'edit_item' => 'Edit Leader',
    	'new_item' => 'New Leader',
    	'all_items' => 'All Leaders',
    	'view_item' => 'View Leader',
    	'search_items' => 'Search Leaders',
    	'not_found' =>  'No Leaders Found',
    	'not_found_in_trash' => 'No Leaders found in Trash', 
    	'parent_item_colon' => '',
    	'menu_name' => 'Leaders',    	
    );

    //register post type
	register_post_type( 'leader', array(
		'labels' => $labels,
		'has_archive' => true,
 		'public' => true,
		'supports' => array( 'title', 'editor', 'excerpt', 'custom-fields', 'thumbnail','page-attributes' ),
		'taxonomies' => array(  ),
		'exclude_from_search' => false,
		'capability_type' => 'post',
		'rewrite' => array( 'slug' => 'leadership' ),
		'menu_icon'   => 'dashicons-businessman',
		'show_in_rest' => true,
		)
	);

}
add_action( 'init', 'custom_leader_create_post_type' );


// register two taxonomies to go with the post type
function custom_leader_register_taxonomy() {
	// set up labels
	$labels = array(
		'name'              => 'Leader Categories',
		'singular_name'     => 'Leader Category',
		'search_items'      => 'Search Leader Categories',
		'all_items'         => 'All Leader Categories',
		'edit_item'         => 'Edit Leader Category',
		'update_item'       => 'Update Leader Category',
		'add_new_item'      => 'Add New Leader Category',
		'new_item_name'     => 'New Leader Category',
		'menu_name'         => 'Leader Categories'
	);
	// register taxonomy
	register_taxonomy( 'leadercat', 'leader', array(
		'hierarchical' => true,
		'labels' => $labels,
		'query_var' => true,
		'show_admin_column' => true
	) );
}
add_action( 'init', 'custom_leader_register_taxonomy' );


// Children
function custom_child_create_post_type() {

	// set up labels
	$labels = array(
 		'name' => 'Children',
    	'singular_name' => 'Child',
    	'add_new' => 'Add New Child',
    	'add_new_item' => 'Add New Child',
    	'edit_item' => 'Edit Child',
    	'new_item' => 'New Child',
    	'all_items' => 'All Children',
    	'view_item' => 'View Child',
    	'search_items' => 'Search Children',
    	'not_found' =>  'No Children Found',
    	'not_found_in_trash' => 'No Children found in Trash', 
    	'parent_item_colon' => '',
    	'menu_name' => 'Children',    	
    );

    //register post type
	register_post_type( 'child', array(
		'labels' => $labels,
		'has_archive' => true,
 		'public' => true,
		'supports' => array( 'title', 'editor', 'excerpt', 'custom-fields', 'thumbnail','page-attributes' ),
		'taxonomies' => array(  ),
		'exclude_from_search' => false,
		'capability_type' => 'post',
		'rewrite' => array( 'slug' => 'children' ),
		'menu_icon'   => 'dashicons-universal-access',
		'show_in_rest' => true,
		)
	);

}
add_action( 'init', 'custom_child_create_post_type' );


// register two taxonomies to go with the post type
function custom_child_register_taxonomy() {
	// set up labels
	$labels = array(
		'name'              => 'Child Categories',
		'singular_name'     => 'Child Category',
		'search_items'      => 'Search Child Categories',
		'all_items'         => 'All Child Categories',
		'edit_item'         => 'Edit Child Category',
		'update_item'       => 'Update Child Category',
		'add_new_item'      => 'Add New Child Category',
		'new_item_name'     => 'New Child Category',
		'menu_name'         => 'Child Categories'
	);
	// register taxonomy
	register_taxonomy( 'childcat', 'child', array(
		'hierarchical' => true,
		'labels' => $labels,
		'query_var' => true,
		'show_admin_column' => true
	) );
}
add_action( 'init', 'custom_child_register_taxonomy' );
