<?php

$intro_text = get_field('intro_text');

get_template_part('components/title');

if( $intro_text ) { ?>
	<div class="intro_text">
		<?php echo $intro_text; ?>
	</div>
<?php }
