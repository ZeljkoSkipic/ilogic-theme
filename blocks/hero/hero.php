<?php
$bg_color = get_field('background_color');
$bg_img = get_field('background_image');
$subtitle = get_field('subtitle');
$content = get_field('content');
$height = get_field_object('height');
$margin = get_field_object('margin');
$padding = get_field_object('padding');

$class = 'hero';
if ( ! empty( $block['className'] ) ) {
    $class .= ' ' . $block['className'];
}
if ( ! empty( $height ) ) {
    $class .=  ' ' . $height['value'];
}

if ( ! empty( $margin ) ) {
    $class .=  ' ' . $margin['value'];
}

if ( ! empty( $padding) ) {
    $class .=  ' ' . $padding['value'];
}
?>

<div class="<?php echo $class; ?>" style="background-image: url('<?php echo $bg_img; ?>'); background-color: <?php echo $bg_color; ?>">
	<div class="container hero_inner">
	<?php get_template_part('components/title'); ?>
	<h2 class="hero_subtitle"><?php echo $subtitle ?></h2>
	<div><?php echo $content ?></div>
	<?php get_template_part('components/buttons'); ?>
	</div>
</div>
