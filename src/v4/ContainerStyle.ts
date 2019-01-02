import {
	CSSProperties,
} from 'react';

export const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	} as CSSProperties,


	container_h1: {
		textAlign: 'center',
	} as CSSProperties,

	container_contents: {
		flexDirection: 'column',
		justifyContent: 'center',
	} as CSSProperties,

	menuBar: {
		display: 'flex',
		flexDirection: 'row',
		paddingLeft: '10px',
		paddingRight: '10px',
	} as CSSProperties,

	menuBar_menu: {
		flex: 1,
	} as CSSProperties,

	menuBar_menu_selected: {
		flex: 1,
		borderBottom: 'solid 2px #ced4da',
	} as CSSProperties,

	menuBar_menu_p: {
		textAlign: 'center',
		color: '#ced4da',
	} as CSSProperties,

	menuBar_menu_p_selected: {
		flex: 1,
		textAlign: 'center',
		color: 'black',
	} as CSSProperties,
};
