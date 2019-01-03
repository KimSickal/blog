import {
	CSSProperties,
} from 'react';

export const styles: { [key: string]: CSSProperties} = {
	content: {
		position: 'relative',
	},

	content_img: {
		display: 'flex',
		maxWidth: '100%',
		// maxHeight: '800px',
		cursor: 'pointer',
	},

	content_img_shadow: {
		position: 'absolute',
		top:'0%',
		left:'0%',
		width: '100%',
		height: '100%',
		cursor: 'pointer',

		opacity: 0,
		transitionProperty: 'opacity',
		transitionDuration: '0.3s',
		transitionTimingFunction: 'ease',

		boxShadow: 'inset 0 0 50px 0 #868e96',
	},

	content_img_button: {
		position: 'absolute',
		top:'0%',
		left:'0%',
		width: '15%',
		height: '100%',
		cursor: 'pointer',

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

	content_img_button_left: {
		left: '0%',
	},

	content_img_button_right: {
		left: '85%',
	},

	content_img_button_text: {
		fontSize: '200%',
		color: '#868e96',
	},
};
