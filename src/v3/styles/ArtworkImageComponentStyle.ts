import {
	CSSProperties,
} from 'react';

export const styles: { [key: string]: CSSProperties} = {
	content: {
		position: 'relative',
		marginBottom: '10px',
	},

	content_img: {
		display: 'flex',
		maxWidth: '100%',
		cursor: 'pointer',
	},

	content_img_button: {
		position: 'absolute',
		top:'0%',
		left:'0%',
		width: '20%',
		height: '100%',
		cursor: 'pointer',
		opacity: 0.5,
	},

	content_img_button_left: {
		left: '0%',
	},

	content_img_button_right: {
		left: '80%',
	},
};
