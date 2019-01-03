import {
	CSSProperties,
} from 'react';

export const styles: { [key: string]: CSSProperties} = {
	content: {
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginRight: '10px',
		marginLeft: '10px',
	},

	markdown: {
		display: 'flex',
		flex: '1',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		padding: '100px',
		paddingTop: '10px',
		paddingBottom: '10px',
	},
};
