<?php
$bg_color = get_field('background_color');
$bg_img = get_field('background_image');
$style = get_field_object('choose_style');
$layout = get_field_object('layout');
$stack = get_field_object('stack');

$margin = get_field_object('margin');
$padding = get_field_object('padding');

$class = 'section';
if ( ! empty( $block['className'] ) ) {
    $class .= ' ' . $block['className'];
}
if ( ! empty( $style ) ) {
    $class .=  ' ' . $style['value'];
}
if ( ! empty( $margin ) ) {
    $class .=  ' ' . $margin['value'];
}

if ( ! empty( $padding) ) {
    $class .=  ' ' . $padding['value'];
}

$sec_in_class = 'section_inner';
if ( ! empty( $layout ) ) {
    $sec_in_class .=  ' ' . $layout['value'];
}
if ( ! empty( $stack ) ) {
    $sec_in_class .=  ' ' . $stack['value'];
}


?>


<div class="<?php echo $class ?>" style="background-image: url('<?php echo $bg_color; ?>'); background-color: <?php echo $bg_color; ?>">
<div class="<?php echo $sec_in_class ?>">
<?php if( have_rows('info_box') ): ?>
<?php while( have_rows('info_box') ): the_row();
	$title = get_sub_field('title');
	$text = get_sub_field('text');
	$tag = get_sub_field('heading_tag');
	$title_color = get_sub_field('title_color');
	?>

	<div class="left">
		<<?php echo esc_html($tag); ?> class="section_title" style="color: <?php echo $title_color; ?>;"><?php echo $title; ?></<?php echo esc_html($tag); ?>>
		<div class="section_text"><?php echo $text ?></div>
		<?php get_template_part('components/buttons'); ?>
	</div>

<?php endwhile; ?>
<?php endif; ?>
<div class="right">
	<?php
	$image = get_field('media');
	$size = 'full'; // (thumbnail, medium, large, full or custom size)
	if( $image ) {
		echo wp_get_attachment_image( $image, $size );
	} ?>

	</div>
</div>
</div>
