


<?php
if ( have_rows('tabs') ) :

$cols = get_field_object('columns');
$tab_cols = get_field_object('tab_columns');
$mob_cols = get_field_object('mob_columns');
$bg_color = get_field('background_color');
$bg_img = get_field('background_image');

$margin = get_field_object('margin');
$padding = get_field_object('padding');


$anchor = '';
if ( ! empty( $block['anchor'] ) ) {
    $anchor = 'id="' . esc_attr( $block['anchor'] ) . '" ';
}

$class = 'il_tabs';
if ( ! empty( $block['className'] ) ) {
    $class .= ' ' . $block['className'];
}
if( get_field('stack_tabs') ) {
    $class .= ' ' . 'stack_tabs';
}
if ( ! empty( $margin ) ) {
    $class .=  ' ' . $margin['value'];
}

if ( ! empty( $padding) ) {
    $class .=  ' ' . $padding['value'];
}

 ?>
<div <?php echo $anchor; ?> class="<?php echo $class ?>"  style="background-image: url('<?php echo $bg_img; ?>'); background-color: <?php echo $bg_color; ?>">
<div class="container">
	<?php get_template_part('components/intro'); ?>
	<?php $item=1; ?>
		<header class="tabs_nav">
			<ul>
		<?php while( have_rows('tabs') ) : the_row();
			$title = get_sub_field('tab_title');
		?>
			<li><a href="#tab<?php echo $item; ?>"><?php echo $title; ?></a></li>
			<?php $item++;?>
		<?php endwhile; ?>
		</ul>
		</header>
		<section class="tabs_content">
			<?php $item=1; ?>
			<?php while( have_rows('tabs') ) : the_row();
				$title = get_sub_field('tab_title');
				$content = get_sub_field('tab_content');

				?>
				<div class="tab" id="tab<?php echo $item; ?>">
				<?php if( get_field('tab_title') ) { ?>
				<h3><?php echo $title; ?></h3>
				<?php } ?>
					<div class="tab_text"><?php echo $content ?></div>
				</div>
			<?php $item++;?>
			<?php endwhile; ?>
		</section>
	</div>
</div>
<?php endif; ?>
