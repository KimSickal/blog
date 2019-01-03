import {
	CSSProperties,
} from 'react';

export const styles: { [key: string]: CSSProperties} = {
	artwork: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'white',
		margin: '10px',
		marginTop: '0px',
		marginBottom: '0px',
	},

	contract: {
		// cursor: 'pointer',
		marginRight: '100px',
		marginLeft: '100px',
	},

	title: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: '30px',
	},

	title_p: {
		margin: '0px',
		fontSize: '20px',
		maxWidth: '100%',
		color: 'black',
	},

	summary: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: '20px',
	},

	summary_p: {
		margin: '0px',
		color: '#868e96',
	},

	division: {
		paddingBottom: '40px',
		borderBottom: '2px solid #ced4da',
		marginRight: '100px',
		marginLeft: '100px',
	},
};
