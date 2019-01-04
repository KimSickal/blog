import {
	CSSProperties,
} from 'react';

export const styles = {
	menuBar: {
		display: 'flex',
		flexDirection: 'row',
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
