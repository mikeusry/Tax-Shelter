<?php

/**
 * @file
 * This file contains Omega region preprocessing for the prolifik theme.
 */

function prolifik_alpha_preprocess_region(&$vars) {
  $theme = alpha_get_theme();
	switch ($vars['elements']['#region']) {
		case 'content':
			$vars['messages'] = $theme->page['messages'];
			break;
	}
}
