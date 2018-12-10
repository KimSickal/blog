import { Style } from 'src/models/Style';

export const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	} as Style,


	container_h1: {
		textAlign: 'center',
	} as Style,

	container_contents: {
		flexDirection: 'column',
		justifyContent: 'center',
	} as Style,

	menuBar: {
		display: 'flex',
		flexDirection: 'row',
		paddingLeft: '10px',
		paddingRight: '10px',
	} as Style,

	menuBar_menu: {
		flex: 1,
	} as Style,

	menuBar_menu_selected: {
		flex: 1,
		borderBottom: 'solid 2px #ced4da',
	} as Style,

	menuBar_menu_p: {
		textAlign: 'center',
		color: '#ced4da',
	} as Style,

	menuBar_menu_p_selected: {
		flex: 1,
		textAlign: 'center',
		color: 'black',
	} as Style,
};
