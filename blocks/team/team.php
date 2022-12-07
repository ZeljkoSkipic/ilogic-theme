<?php
if ( have_rows('team') ) :

$cols = get_field_object('columns');
$tab_cols = get_field_object('tab_columns');
$mob_cols = get_field_object('mob_columns');
$bg_color = get_field('background_color');
$bg_img = get_field('background_image');
$team_layout = get_field_object('layout');

$margin = get_field_object('margin');
$padding = get_field_object('padding');


$anchor = '';
if ( ! empty( $block['anchor'] ) ) {
    $anchor = 'id="' . esc_attr( $block['anchor'] ) . '" ';
}

$class = 'il_block team';
if ( ! empty( $block['className'] ) ) {
    $class .= ' ' . $block['className'];
}
if ( ! empty( $cols ) ) {
    $class .=  ' ' . $cols['value'];
}
if ( ! empty( $tab_cols ) ) {
    $class .=  ' ' . $tab_cols['value'];
}
if ( ! empty( $mob_cols ) ) {
    $class .=  ' ' . $mob_cols['value'];
}
if ( ! empty( $margin ) ) {
    $class .=  ' ' . $margin['value'];
}

if ( ! empty( $padding) ) {
    $class .=  ' ' . $padding['value'];
}

$member_class = 'member';
if ( ! empty( $block['className'] ) ) {
    $member_class .= ' ' . $block['className'];
}
if ( ! empty( $team_layout ) ) {
    $member_class .=  ' ' . $team_layout['value'];
}

 ?>
<div <?php echo $anchor; ?> class="<?php echo $class ?>">
<?php get_template_part('components/background'); ?>
	<div class="container">
		<?php get_template_part('components/intro'); ?>
		<div class="team_inner">
			<?php while( have_rows('team') ) : the_row();
				$image = get_sub_field('image');
				$size = 'full';
				$name = get_sub_field('name');
				$description = get_sub_field('description');
				$position = get_sub_field('position');
				?>
				<div class="<?php echo $member_class; ?> column">
				<?php if( $image ) { ?>
					<figure class="member_image">
						<?php echo wp_get_attachment_image( $image, $size ); ?>
					</figure>
				<?php } ?>
					<div class="member_text">
						<h4 class="member_name"><?php echo $name ?></h4>
						<div class="member_description"><?php echo $description ?></div>
						<span class="member_position"><em><?php echo $position ?></em></span>
					</div>
				</div>

			<?php endwhile; ?>
		</div>
	</div>
</div>
<?php endif; ?>
