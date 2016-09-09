<?php

/*
Plugin Name: Video Embed Optimizer
Plugin URI: www.eric-franklin.media
Description: Video Embed Optimizer
Author: Eric Franklin
Author URI: www.eric-franklin.media
Version: 1.0.0
License: GPL2
*/


// Add Shortcode
function veo_youtube( $atts ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'string' => '',
      'class' => '',
		),
		$atts,
		'veo'
	);

	return '<div
  class="' . $atts['class'] . ' ' . 'veo' . '"
  id="' . $atts['string'] . '"
  ></div>';
}

add_shortcode( 'veo', 'veo_youtube' );

// Add VEO Button and Modal Window
function add_veo_button() {
    echo '<a href="#" id="veo-button" class="button"><span class="dashicons dashicons-format-video"></span>Video Embed Optimizer</a>';
    echo '<div class="veo-box">
            <div class="veo-header">Video Embed Optimizer</div>
            <div class="veo-container">
              <label for="veo_string">Insert Full YouTube or Vimeo Link</label>
              <input type="text" name="veo_string" id="veo_string"/>
              <div class="veo_button">Submit</div>
            </div>
          <div class="veo_close">x</div>
          </div>';
}

add_action('media_buttons', 'add_veo_button');

// Load Scripts

  // Admin Styles
function veo_admin_styles() {
  wp_enqueue_style( 'veo_admin_styles', plugin_dir_url( __FILE__ ) . '/styles/admin.css', array(), '1.0' );
  wp_enqueue_style( 'veo_admin_styles' );
}

add_action( 'admin_enqueue_scripts', 'veo_admin_styles' );

  // Admin Scripts
function include_veo_js_file() {
    wp_enqueue_script('veo', plugin_dir_url( __FILE__ ) . '/scripts/veo.min.js' , array('jquery'), '1.0', true);
}

add_action('wp_enqueue_media', 'include_veo_js_file');

  // Font End Scripts
function veo_scripts() {
  wp_enqueue_script( 'veo_script', plugin_dir_url( __FILE__ ) . '/scripts/scripts.min.js', array(), '1.0', true );
}

add_action( 'wp_enqueue_scripts', 'veo_scripts' );

  // Front End Styles
function veo_styles() {
  wp_register_style( 'veo_css', plugin_dir_url( __FILE__ ) . '/styles/styles.css', false, '1.0.0' );
  wp_enqueue_style( 'veo_css' );
}

add_action( 'wp_enqueue_scripts', 'veo_styles' );