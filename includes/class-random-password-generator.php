<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * The main plugin class.
 */
class Random_Password_Generator {
	public function run() {
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_shortcode( 'random_password_generator', array( $this, 'render_form' ) );
	}

	/**
	 * Enqueue styles.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return void
	 */
	public function enqueue_styles() {
		wp_enqueue_style('random-password-generator', plugins_url( '/assets/css/main.css', dirname( __FILE__ ) ), [], '1.0.1');
	}

	/**
	 * Enqueue scripts.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return void
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( 'random-password-generator', plugins_url( '/assets/js/password-generator.js', dirname( __FILE__ ) ), array( 'jquery' ), '1.0.1', true );
	}

	/**
	 * Render the form.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string
	 */
	public function render_form() {
		ob_start();
		include RANDOM_PASSWORD_GENERATOR_DIR . 'views/password-generator-form.php';
		return ob_get_clean();
	}
}
