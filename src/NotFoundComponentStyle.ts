import {
	CSSProperties,
} from 'react';

export const styles: { [key: string]: CSSProperties} = {
	container: {
		position: 'absolute',
		left: '0px',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		pointerEvents: 'none',
	},

	text404: {
		fontSize: 120,
		margin: 0,
		lineHeight: '150px',
	},

	text: {
		fontSize: 28,
		margin: 0,
		lineHeight: '0px',
	},
};
