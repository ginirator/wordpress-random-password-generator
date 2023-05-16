<?php
/**
 * Plugin Name: WordPress Random Password Generator
 * Plugin URI: https://github.com/ginirator/wordpress-random-password-generator
 * Description: This is a WordPress Plugin that generates random passwords.
 * Version: 1.0.0
 * Author: Valeriu Dodon
 * Author URI: https://ginirator.com/
 * License:  GPLv2 or later
 * Text Domain: wordpress-random-password-generator
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

define( 'RANDOM_PASSWORD_GENERATOR_DIR', plugin_dir_path( __FILE__ ) );

require_once RANDOM_PASSWORD_GENERATOR_DIR . 'includes/class-random-password-generator.php';

function wprpg_random_password_generator_run() {
    $password_generator = new Random_Password_Generator();
    $password_generator->run();
}

//function wprpg_password_generator_shortcode() {
//    ob_start();
    wprpg_random_password_generator_run();
//    return ob_get_clean();
//}
//add_shortcode('random_password_generator', 'wprpg_password_generator_shortcode');
